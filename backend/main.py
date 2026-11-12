from agents.agent_router import select_agent

print("Welcome to Zynaid AI")

while True:
    user_input = input("Ask me ")

    if user_input.lower() =="exit":
        break


    result = select_agent(user_input)

    print("Syntrova:",result)