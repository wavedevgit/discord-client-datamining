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
    private final String f39075a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39076b;

    /* renamed from: c  reason: collision with root package name */
    private final nl.a[] f39077c;

    /* renamed from: d  reason: collision with root package name */
    private final c f39078d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f39079e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f39080f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f39081g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f39082h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f39083i;

    /* renamed from: j  reason: collision with root package name */
    private int f39084j;

    /* renamed from: k  reason: collision with root package name */
    private int f39085k;

    /* renamed from: l  reason: collision with root package name */
    private int f39086l;

    /* renamed from: m  reason: collision with root package name */
    private int f39087m;

    /* renamed from: n  reason: collision with root package name */
    private int f39088n;

    /* renamed from: o  reason: collision with root package name */
    private int f39089o;

    /* renamed from: p  reason: collision with root package name */
    private int f39090p;

    /* renamed from: q  reason: collision with root package name */
    private int f39091q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, nl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f39083i = fArr;
        this.f39075a = str;
        this.f39076b = str2;
        this.f39077c = aVarArr;
        this.f39078d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f39082h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // kl.a
    public void a() {
        Matrix.setIdentityM(this.f39080f, 0);
        int c10 = f.c(35633, this.f39075a);
        this.f39084j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f39076b);
            this.f39085k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f39084j, c11);
                this.f39086l = b10;
                if (b10 != 0) {
                    this.f39090p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f39090p != -1) {
                        this.f39091q = GLES20.glGetAttribLocation(this.f39086l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f39091q != -1) {
                            this.f39087m = GLES20.glGetUniformLocation(this.f39086l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f39087m != -1) {
                                this.f39088n = GLES20.glGetUniformLocation(this.f39086l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f39088n != -1) {
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
        this.f39082h.position(0);
        GLES20.glVertexAttribPointer(this.f39090p, 3, 5126, false, 20, (Buffer) this.f39082h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f39090p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f39082h.position(3);
        GLES20.glVertexAttribPointer(this.f39091q, 2, 5126, false, 20, (Buffer) this.f39082h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f39091q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f39086l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f39089o);
        nl.a[] aVarArr = this.f39077c;
        if (aVarArr != null && aVarArr.length > 0) {
            nl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f39087m, 1, false, this.f39079e, this.f39081g);
        GLES20.glUniformMatrix4fv(this.f39088n, 1, false, this.f39080f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // kl.a
    public void b(float[] fArr, int i10) {
        this.f39079e = ll.a.a(fArr, this.f39078d);
        this.f39081g = i10;
    }

    @Override // kl.b
    public void c(int i10, float[] fArr) {
        this.f39089o = i10;
        this.f39080f = fArr;
    }

    @Override // kl.a
    public void release() {
        GLES20.glDeleteProgram(this.f39086l);
        GLES20.glDeleteShader(this.f39084j);
        GLES20.glDeleteShader(this.f39085k);
        GLES20.glDeleteBuffers(1, new int[]{this.f39091q}, 0);
        this.f39086l = 0;
        this.f39084j = 0;
        this.f39085k = 0;
        this.f39091q = 0;
    }
}
