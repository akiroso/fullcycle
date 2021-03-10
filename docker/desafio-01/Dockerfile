FROM golang as compiler

WORKDIR /code
COPY src /code
RUN go mod init akiroso/desafio && go build

FROM scratch

COPY --from=compiler /code/desafio .

CMD ["/desafio"]