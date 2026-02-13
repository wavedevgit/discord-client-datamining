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
    private final String f51347a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51348b;

    /* renamed from: c  reason: collision with root package name */
    private final vl.a[] f51349c;

    /* renamed from: d  reason: collision with root package name */
    private final c f51350d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f51351e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f51352f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f51353g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f51354h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f51355i;

    /* renamed from: j  reason: collision with root package name */
    private int f51356j;

    /* renamed from: k  reason: collision with root package name */
    private int f51357k;

    /* renamed from: l  reason: collision with root package name */
    private int f51358l;

    /* renamed from: m  reason: collision with root package name */
    private int f51359m;

    /* renamed from: n  reason: collision with root package name */
    private int f51360n;

    /* renamed from: o  reason: collision with root package name */
    private int f51361o;

    /* renamed from: p  reason: collision with root package name */
    private int f51362p;

    /* renamed from: q  reason: collision with root package name */
    private int f51363q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, vl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f51355i = fArr;
        this.f51347a = str;
        this.f51348b = str2;
        this.f51349c = aVarArr;
        this.f51350d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f51354h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // sl.a
    public void a() {
        Matrix.setIdentityM(this.f51352f, 0);
        int c10 = f.c(35633, this.f51347a);
        this.f51356j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f51348b);
            this.f51357k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f51356j, c11);
                this.f51358l = b10;
                if (b10 != 0) {
                    this.f51362p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f51362p != -1) {
                        this.f51363q = GLES20.glGetAttribLocation(this.f51358l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f51363q != -1) {
                            this.f51359m = GLES20.glGetUniformLocation(this.f51358l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f51359m != -1) {
                                this.f51360n = GLES20.glGetUniformLocation(this.f51358l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f51360n != -1) {
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
        this.f51354h.position(0);
        GLES20.glVertexAttribPointer(this.f51362p, 3, 5126, false, 20, (Buffer) this.f51354h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f51362p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f51354h.position(3);
        GLES20.glVertexAttribPointer(this.f51363q, 2, 5126, false, 20, (Buffer) this.f51354h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f51363q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f51358l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f51361o);
        vl.a[] aVarArr = this.f51349c;
        if (aVarArr != null && aVarArr.length > 0) {
            vl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f51359m, 1, false, this.f51351e, this.f51353g);
        GLES20.glUniformMatrix4fv(this.f51360n, 1, false, this.f51352f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // sl.a
    public void b(float[] fArr, int i10) {
        this.f51351e = tl.a.a(fArr, this.f51350d);
        this.f51353g = i10;
    }

    @Override // sl.b
    public void c(int i10, float[] fArr) {
        this.f51361o = i10;
        this.f51352f = fArr;
    }

    @Override // sl.a
    public void release() {
        GLES20.glDeleteProgram(this.f51358l);
        GLES20.glDeleteShader(this.f51356j);
        GLES20.glDeleteShader(this.f51357k);
        GLES20.glDeleteBuffers(1, new int[]{this.f51363q}, 0);
        this.f51358l = 0;
        this.f51356j = 0;
        this.f51357k = 0;
        this.f51363q = 0;
    }
}
