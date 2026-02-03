package ml;

import android.graphics.PointF;
import android.opengl.GLES20;
import android.opengl.Matrix;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import kl.c;
import pl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements kl.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f38872a;

    /* renamed from: b  reason: collision with root package name */
    private final String f38873b;

    /* renamed from: c  reason: collision with root package name */
    private final nl.a[] f38874c;

    /* renamed from: d  reason: collision with root package name */
    private final c f38875d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f38876e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f38877f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f38878g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f38879h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f38880i;

    /* renamed from: j  reason: collision with root package name */
    private int f38881j;

    /* renamed from: k  reason: collision with root package name */
    private int f38882k;

    /* renamed from: l  reason: collision with root package name */
    private int f38883l;

    /* renamed from: m  reason: collision with root package name */
    private int f38884m;

    /* renamed from: n  reason: collision with root package name */
    private int f38885n;

    /* renamed from: o  reason: collision with root package name */
    private int f38886o;

    /* renamed from: p  reason: collision with root package name */
    private int f38887p;

    /* renamed from: q  reason: collision with root package name */
    private int f38888q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, nl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f38880i = fArr;
        this.f38872a = str;
        this.f38873b = str2;
        this.f38874c = aVarArr;
        this.f38875d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f38879h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // kl.a
    public void a() {
        Matrix.setIdentityM(this.f38877f, 0);
        int c10 = f.c(35633, this.f38872a);
        this.f38881j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f38873b);
            this.f38882k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f38881j, c11);
                this.f38883l = b10;
                if (b10 != 0) {
                    this.f38887p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f38887p != -1) {
                        this.f38888q = GLES20.glGetAttribLocation(this.f38883l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f38888q != -1) {
                            this.f38884m = GLES20.glGetUniformLocation(this.f38883l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f38884m != -1) {
                                this.f38885n = GLES20.glGetUniformLocation(this.f38883l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f38885n != -1) {
                                    return;
                                }
                                throw new RuntimeException("Could not get attrib location for uSTMatrix");
                            }
                            throw new RuntimeException("Could not get attrib location for uMVPMatrix");
                        }
                        throw new RuntimeException("Could not get attrib location for aTextureCoord");
                    }
                    throw new RuntimeException("Could not get attrib location for aPosition");
                }
                release();
                throw new RuntimeException("failed creating glProgram");
            }
            release();
            throw new RuntimeException("failed loading fragment shader");
        }
        throw new RuntimeException("failed loading vertex shader");
    }

    @Override // kl.a
    public void apply(long j10) {
        this.f38879h.position(0);
        GLES20.glVertexAttribPointer(this.f38887p, 3, 5126, false, 20, (Buffer) this.f38879h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f38887p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f38879h.position(3);
        GLES20.glVertexAttribPointer(this.f38888q, 2, 5126, false, 20, (Buffer) this.f38879h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f38888q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f38883l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f38886o);
        nl.a[] aVarArr = this.f38874c;
        if (aVarArr != null && aVarArr.length > 0) {
            nl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f38884m, 1, false, this.f38876e, this.f38878g);
        GLES20.glUniformMatrix4fv(this.f38885n, 1, false, this.f38877f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // kl.a
    public void b(float[] fArr, int i10) {
        this.f38876e = ll.a.a(fArr, this.f38875d);
        this.f38878g = i10;
    }

    @Override // kl.b
    public void c(int i10, float[] fArr) {
        this.f38886o = i10;
        this.f38877f = fArr;
    }

    @Override // kl.a
    public void release() {
        GLES20.glDeleteProgram(this.f38883l);
        GLES20.glDeleteShader(this.f38881j);
        GLES20.glDeleteShader(this.f38882k);
        GLES20.glDeleteBuffers(1, new int[]{this.f38888q}, 0);
        this.f38883l = 0;
        this.f38881j = 0;
        this.f38882k = 0;
        this.f38888q = 0;
    }
}
