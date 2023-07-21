package main
import (
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	file1 := "public/index.html"
	file2 := "public/posts/index.html"
	file3 := "public/posts/example/index.html"
	file4 := "public/tags/index.html"
	file5 := "public/tags/tag1/index.html"
	file6 := "public/categories/index.html"
	file7 := "public/categories/category1/index.html"

	destinition := "themes/theme/src/index.html"

	files := []string{file1, file2, file3, file4, file5, file6, file7}

	if err := concatFiles(destinition, files); err != nil {
		panic(err)
	} else {
		fmt.Println("concat files success")
	}
}

func concatFiles(destinition string, files []string) error {
	destinationFile, err := os.Create(destinition)
	if err != nil {
		return err
	}
	defer destinationFile.Close()

	for _, file := range files {
		content, err := ioutil.ReadFile(file)
		if err != nil {
			return err
		}
		if _, err := destinationFile.Write(content); err != nil {
			return err
		}
	}

	return nil
}
