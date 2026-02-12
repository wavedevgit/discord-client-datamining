package ul;

import android.graphics.PointF;
import android.opengl.GLES20;
import android.opengl.Matrix;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import sl.c;
import xl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements sl.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f50779a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50780b;

    /* renamed from: c  reason: collision with root package name */
    private final vl.a[] f50781c;

    /* renamed from: d  reason: collision with root package name */
    private final c f50782d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f50783e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f50784f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f50785g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f50786h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f50787i;

    /* renamed from: j  reason: collision with root package name */
    private int f50788j;

    /* renamed from: k  reason: collision with root package name */
    private int f50789k;

    /* renamed from: l  reason: collision with root package name */
    private int f50790l;

    /* renamed from: m  reason: collision with root package name */
    private int f50791m;

    /* renamed from: n  reason: collision with root package name */
    private int f50792n;

    /* renamed from: o  reason: collision with root package name */
    private int f50793o;

    /* renamed from: p  reason: collision with root package name */
    private int f50794p;

    /* renamed from: q  reason: collision with root package name */
    private int f50795q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, vl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f50787i = fArr;
        this.f50779a = str;
        this.f50780b = str2;
        this.f50781c = aVarArr;
        this.f50782d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f50786h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // sl.a
    public void a() {
        Matrix.setIdentityM(this.f50784f, 0);
        int c10 = f.c(35633, this.f50779a);
        this.f50788j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f50780b);
            this.f50789k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f50788j, c11);
                this.f50790l = b10;
                if (b10 != 0) {
                    this.f50794p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f50794p != -1) {
                        this.f50795q = GLES20.glGetAttribLocation(this.f50790l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f50795q != -1) {
                            this.f50791m = GLES20.glGetUniformLocation(this.f50790l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f50791m != -1) {
                                this.f50792n = GLES20.glGetUniformLocation(this.f50790l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f50792n != -1) {
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

    @Override // sl.a
    public void apply(long j10) {
        this.f50786h.position(0);
        GLES20.glVertexAttribPointer(this.f50794p, 3, 5126, false, 20, (Buffer) this.f50786h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f50794p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f50786h.position(3);
        GLES20.glVertexAttribPointer(this.f50795q, 2, 5126, false, 20, (Buffer) this.f50786h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f50795q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f50790l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f50793o);
        vl.a[] aVarArr = this.f50781c;
        if (aVarArr != null && aVarArr.length > 0) {
            vl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f50791m, 1, false, this.f50783e, this.f50785g);
        GLES20.glUniformMatrix4fv(this.f50792n, 1, false, this.f50784f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // sl.a
    public void b(float[] fArr, int i10) {
        this.f50783e = tl.a.a(fArr, this.f50782d);
        this.f50785g = i10;
    }

    @Override // sl.b
    public void c(int i10, float[] fArr) {
        this.f50793o = i10;
        this.f50784f = fArr;
    }

    @Override // sl.a
    public void release() {
        GLES20.glDeleteProgram(this.f50790l);
        GLES20.glDeleteShader(this.f50788j);
        GLES20.glDeleteShader(this.f50789k);
        GLES20.glDeleteBuffers(1, new int[]{this.f50795q}, 0);
        this.f50790l = 0;
        this.f50788j = 0;
        this.f50789k = 0;
        this.f50795q = 0;
    }
}
