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
    private final String f39079a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39080b;

    /* renamed from: c  reason: collision with root package name */
    private final nl.a[] f39081c;

    /* renamed from: d  reason: collision with root package name */
    private final c f39082d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f39083e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f39084f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f39085g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f39086h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f39087i;

    /* renamed from: j  reason: collision with root package name */
    private int f39088j;

    /* renamed from: k  reason: collision with root package name */
    private int f39089k;

    /* renamed from: l  reason: collision with root package name */
    private int f39090l;

    /* renamed from: m  reason: collision with root package name */
    private int f39091m;

    /* renamed from: n  reason: collision with root package name */
    private int f39092n;

    /* renamed from: o  reason: collision with root package name */
    private int f39093o;

    /* renamed from: p  reason: collision with root package name */
    private int f39094p;

    /* renamed from: q  reason: collision with root package name */
    private int f39095q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, nl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f39087i = fArr;
        this.f39079a = str;
        this.f39080b = str2;
        this.f39081c = aVarArr;
        this.f39082d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f39086h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // kl.a
    public void a() {
        Matrix.setIdentityM(this.f39084f, 0);
        int c10 = f.c(35633, this.f39079a);
        this.f39088j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f39080b);
            this.f39089k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f39088j, c11);
                this.f39090l = b10;
                if (b10 != 0) {
                    this.f39094p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f39094p != -1) {
                        this.f39095q = GLES20.glGetAttribLocation(this.f39090l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f39095q != -1) {
                            this.f39091m = GLES20.glGetUniformLocation(this.f39090l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f39091m != -1) {
                                this.f39092n = GLES20.glGetUniformLocation(this.f39090l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f39092n != -1) {
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
        this.f39086h.position(0);
        GLES20.glVertexAttribPointer(this.f39094p, 3, 5126, false, 20, (Buffer) this.f39086h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f39094p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f39086h.position(3);
        GLES20.glVertexAttribPointer(this.f39095q, 2, 5126, false, 20, (Buffer) this.f39086h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f39095q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f39090l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f39093o);
        nl.a[] aVarArr = this.f39081c;
        if (aVarArr != null && aVarArr.length > 0) {
            nl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f39091m, 1, false, this.f39083e, this.f39085g);
        GLES20.glUniformMatrix4fv(this.f39092n, 1, false, this.f39084f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // kl.a
    public void b(float[] fArr, int i10) {
        this.f39083e = ll.a.a(fArr, this.f39082d);
        this.f39085g = i10;
    }

    @Override // kl.b
    public void c(int i10, float[] fArr) {
        this.f39093o = i10;
        this.f39084f = fArr;
    }

    @Override // kl.a
    public void release() {
        GLES20.glDeleteProgram(this.f39090l);
        GLES20.glDeleteShader(this.f39088j);
        GLES20.glDeleteShader(this.f39089k);
        GLES20.glDeleteBuffers(1, new int[]{this.f39095q}, 0);
        this.f39090l = 0;
        this.f39088j = 0;
        this.f39089k = 0;
        this.f39095q = 0;
    }
}
