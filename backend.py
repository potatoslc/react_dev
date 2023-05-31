from flask import Flask,send_file
import matplotlib as plt
import pandas as pd
import geopandas as gpd
import io

app =Flask(__name__)
@app.route('/')

def testplot():
    fig,ax = plt.subplots()
    ax.plot([1,2,3,4],[4,3,2,1])
    ax.set_title('test plot')
    buffer  = io.BytesIO()
    plt.savefig(fig,format= 'png')
    buffer.seek(0)
    return send_file(buffer,mimetype='image/png')

if __name__ == '__main__':
    app.run()

