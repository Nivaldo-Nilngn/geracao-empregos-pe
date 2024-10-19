const api = "https://script.google.com/macros/s/AKfycbzFShvjvkluL0OEGk2bSidcSymKgfafOqOz_9KuPqacejM0letEyyYAIRfURMywQpTP9g/exec"; // URL da API para onde os dados serão enviados

const reloadDiv = document.createElement("div");
reloadDiv.classList.add("reload");
reloadDiv.innerHTML = `
    <div class="reload__content">
      <p>Aguarde, os dados estão sendo enviados...</p>
    </div>
  `;
document.body.appendChild(reloadDiv);
reloadDiv.style.display = "none";

// Função para criar um elemento de alerta personalizado
function showAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.innerHTML = `
      <div class="alert__content">
        <p>${message}</p>
      </div>
    `;
    document.body.appendChild(alertDiv);
    alertDiv.style.display = "flex";
    setTimeout(() => {
        alertDiv.style.display = "none";
        alertDiv.remove();
    }, 3000); // Esconder o alerta depois de 3 segundos
}

const formElemento = document.querySelector("#cadastro-form");
formElemento.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Coleta os dados dos inputs
    const nomeInput = formElemento.querySelector("#nome");
    const telefoneInput = formElemento.querySelector("#telefone");
    const idadeInput = formElemento.querySelector("#idade");
    const areaInteresseInput = formElemento.querySelector("#area-interesse");
    const cidadeInput = formElemento.querySelector("#cidade");

    // Validação dos campos
    if (!nomeInput.value.trim()) {
        showAlert("Por favor, preencha o campo Nome");
        return;
    }

    if (!telefoneInput.value.trim()) {
        showAlert("Por favor, preencha o campo Telefone");
        return;
    }

    if (!idadeInput.value.trim()) {
        showAlert("Por favor, preencha o campo Idade");
        return;
    }

    // Certifique-se de que o valor está sendo corretamente lido
    if (!areaInteresseInput.value) {
        showAlert("Por favor, selecione uma área de interesse");
        return;
    }

    if (!cidadeInput.value.trim()) {
        showAlert("Por favor, preencha o campo Cidade");
        return;
    }

    const formData = new FormData(formElemento);
    reloadDiv.style.display = "flex"; // Mostra o indicador de carregamento

    fetch(api, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao enviar os dados");
            }
            console.log(`Dados enviados com sucesso`);
            window.location.href = "./src/html/sucesso.html";
        })
        .catch((error) => {
            console.error("Ocorreu um erro ao enviar os dados:", error);
            window.location.href = "./src/html/found404.html";
        })
        .finally(() => {
            reloadDiv.style.display = "none"; // Esconde o indicador de carregamento
        });
});
