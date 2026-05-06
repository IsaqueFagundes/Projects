
def bin2dec(): 
    valorbinario = input("Digite um número binário: ")

    if len(valorbinario) == 0:
        print("Nenhum número binário foi digitado.")
    elif len(valorbinario) > 8:
        print("O número binário deve conter no máximo 8 dígitos.")
    elif not all(digit in '01' for digit in valorbinario):
        print("O número binário deve conter apenas os dígitos 0 e 1.")
    else:
        valordecimal = 0
        for i in range(len(valorbinario)):
            valordecimal += int(valorbinario[-(i + 1)]) * (2 ** i)
        print(f"O número binário {valorbinario} é igual a {valordecimal} em decimal.")

while True:
    try:
        bin2dec()
    except:
        print("Ocorreu um erro ao converter o número binário.")
    continuar = input("Deseja converter outro número binário? (s/n): ")
    if continuar.lower() != 's':
        print("Encerrando o programa.")
        break