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
    private final String f39095a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39096b;

    /* renamed from: c  reason: collision with root package name */
    private final nl.a[] f39097c;

    /* renamed from: d  reason: collision with root package name */
    private final c f39098d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f39099e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f39100f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f39101g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f39102h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f39103i;

    /* renamed from: j  reason: collision with root package name */
    private int f39104j;

    /* renamed from: k  reason: collision with root package name */
    private int f39105k;

    /* renamed from: l  reason: collision with root package name */
    private int f39106l;

    /* renamed from: m  reason: collision with root package name */
    private int f39107m;

    /* renamed from: n  reason: collision with root package name */
    private int f39108n;

    /* renamed from: o  reason: collision with root package name */
    private int f39109o;

    /* renamed from: p  reason: collision with root package name */
    private int f39110p;

    /* renamed from: q  reason: collision with root package name */
    private int f39111q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, nl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f39103i = fArr;
        this.f39095a = str;
        this.f39096b = str2;
        this.f39097c = aVarArr;
        this.f39098d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f39102h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // kl.a
    public void a() {
        Matrix.setIdentityM(this.f39100f, 0);
        int c10 = f.c(35633, this.f39095a);
        this.f39104j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f39096b);
            this.f39105k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f39104j, c11);
                this.f39106l = b10;
                if (b10 != 0) {
                    this.f39110p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f39110p != -1) {
                        this.f39111q = GLES20.glGetAttribLocation(this.f39106l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f39111q != -1) {
                            this.f39107m = GLES20.glGetUniformLocation(this.f39106l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f39107m != -1) {
                                this.f39108n = GLES20.glGetUniformLocation(this.f39106l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f39108n != -1) {
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
        this.f39102h.position(0);
        GLES20.glVertexAttribPointer(this.f39110p, 3, 5126, false, 20, (Buffer) this.f39102h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f39110p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f39102h.position(3);
        GLES20.glVertexAttribPointer(this.f39111q, 2, 5126, false, 20, (Buffer) this.f39102h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f39111q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f39106l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f39109o);
        nl.a[] aVarArr = this.f39097c;
        if (aVarArr != null && aVarArr.length > 0) {
            nl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f39107m, 1, false, this.f39099e, this.f39101g);
        GLES20.glUniformMatrix4fv(this.f39108n, 1, false, this.f39100f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // kl.a
    public void b(float[] fArr, int i10) {
        this.f39099e = ll.a.a(fArr, this.f39098d);
        this.f39101g = i10;
    }

    @Override // kl.b
    public void c(int i10, float[] fArr) {
        this.f39109o = i10;
        this.f39100f = fArr;
    }

    @Override // kl.a
    public void release() {
        GLES20.glDeleteProgram(this.f39106l);
        GLES20.glDeleteShader(this.f39104j);
        GLES20.glDeleteShader(this.f39105k);
        GLES20.glDeleteBuffers(1, new int[]{this.f39111q}, 0);
        this.f39106l = 0;
        this.f39104j = 0;
        this.f39105k = 0;
        this.f39111q = 0;
    }
}
