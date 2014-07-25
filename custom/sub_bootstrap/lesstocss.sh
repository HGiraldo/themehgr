#!/bin/bash
# Agregar comentarios.

less_compile () {
  OK=1
  TOTAL=1
  file="";
  echo "================== EMPEZANDO A COMPILAR EN LESS  ========================"

  FILES="/var/www/sites/sites/quan/themes/custom/sub_bootstrap/less/_*.less"
  for f in $FILES
  do
    (
      # cd $dir
      # file="$dir/config.rb"
      # HACER LA VALIDACIÓN PARA VER SI EXISTE EL config.rb
      # if [ -s "$file" ] ; then
        echo "$f"
        # compass compile --output-style "$1" --force
      # fi
    )
  done
  sleep 1
  echo -e "\033[1;32m***********************************\033[0m"
  echo -e "\033[1;32m*******\033[0m FINALIZADO \033[1;32m*******\033[0m"
  echo -e "\033[1;32m***********************************\033[0m"
  exit
}

clear
echo "Compilador masivo para Less"
sleep 1
echo "Opciones:"
select opt in "Compilar"  "Finalizar"
do
    case $opt in
        "Compilar")
          less_compile
        ;;
        "Finalizar")
          exit
        ;;
        *) echo invalid option;;
    esac
done
