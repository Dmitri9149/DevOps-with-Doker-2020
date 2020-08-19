FROM ocaml/opam2:ubuntu-18.04
WORKDIR links_examples
RUN sudo apt-get update && sudo apt-get install -y libpq-dev
RUN echo 'debconf debconf/frontend select Noninteractive' | sudo debconf-set-selections 
RUN DEBIAN_FRONTEND=noninteractive sudo apt-get update && sudo apt-get install -yq apt-utils 
RUN sudo apt-get install -y  m4 postgresql
RUN opam switch 4.06
RUN eval `opam config env`
RUN opam update
RUN opam install -y postgresql links links-postgresql
RUN eval `opam config env`
RUN sudo mkdir hello_links
COPY hello_links.links ./hello_links
EXPOSE 8080
RUN sudo apt-get update && sudo apt-get install -y vim
RUN sudo mkdir form_server
COPY form_server.links ./form_server
RUN sudo mkdir form_client
COPY form_client.links ./form_client
RUN sudo mkdir todo
COPY todo.links ./todo



