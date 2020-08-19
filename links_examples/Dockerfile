FROM ocaml/opam2:ubuntu-18.04
WORKDIR links_examples
RUN sudo apt-get update && sudo apt-get install -y libpq-dev
RUN echo 'debconf debconf/frontend select Noninteractive' | sudo debconf-set-selections 
# RUN sudo apt-get install -y -q
# RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends apt-utils
RUN DEBIAN_FRONTEND=noninteractive sudo apt-get update && sudo apt-get install -yq apt-utils 
# RUN DEBIAN_FRONTEND=noninteractive sudo apt-get update && sudo apt-get install dialog apt-utils -yq
# RUN sudo apt-get update && sudo apt-get install -y apt-utils
# RUN sudo apt-get update && sudo apt-get install -y m4
RUN sudo apt-get install -y  m4 postgresql
# RUN opam init -a
RUN opam switch 4.06
RUN eval `opam config env`
RUN opam update
RUN opam install -y postgresql links links-postgresql
RUN eval `opam config env`
RUN sudo mkdir hello_links
COPY hello_links.links ./hello_links
# RUN linx ./hello_links/hello_links.links
EXPOSE 8080
# CMD ["linx"] 



