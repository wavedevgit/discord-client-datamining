package sl;

import android.graphics.PointF;
import android.opengl.GLES20;
import android.opengl.Matrix;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import ql.c;
import vl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements ql.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f49843a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49844b;

    /* renamed from: c  reason: collision with root package name */
    private final tl.a[] f49845c;

    /* renamed from: d  reason: collision with root package name */
    private final c f49846d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f49847e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f49848f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f49849g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f49850h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f49851i;

    /* renamed from: j  reason: collision with root package name */
    private int f49852j;

    /* renamed from: k  reason: collision with root package name */
    private int f49853k;

    /* renamed from: l  reason: collision with root package name */
    private int f49854l;

    /* renamed from: m  reason: collision with root package name */
    private int f49855m;

    /* renamed from: n  reason: collision with root package name */
    private int f49856n;

    /* renamed from: o  reason: collision with root package name */
    private int f49857o;

    /* renamed from: p  reason: collision with root package name */
    private int f49858p;

    /* renamed from: q  reason: collision with root package name */
    private int f49859q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, tl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f49851i = fArr;
        this.f49843a = str;
        this.f49844b = str2;
        this.f49845c = aVarArr;
        this.f49846d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f49850h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // ql.a
    public void a() {
        Matrix.setIdentityM(this.f49848f, 0);
        int c10 = f.c(35633, this.f49843a);
        this.f49852j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f49844b);
            this.f49853k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f49852j, c11);
                this.f49854l = b10;
                if (b10 != 0) {
                    this.f49858p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f49858p != -1) {
                        this.f49859q = GLES20.glGetAttribLocation(this.f49854l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f49859q != -1) {
                            this.f49855m = GLES20.glGetUniformLocation(this.f49854l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f49855m != -1) {
                                this.f49856n = GLES20.glGetUniformLocation(this.f49854l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f49856n != -1) {
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

    @Override // ql.a
    public void apply(long j10) {
        this.f49850h.position(0);
        GLES20.glVertexAttribPointer(this.f49858p, 3, 5126, false, 20, (Buffer) this.f49850h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f49858p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f49850h.position(3);
        GLES20.glVertexAttribPointer(this.f49859q, 2, 5126, false, 20, (Buffer) this.f49850h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f49859q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f49854l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f49857o);
        tl.a[] aVarArr = this.f49845c;
        if (aVarArr != null && aVarArr.length > 0) {
            tl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f49855m, 1, false, this.f49847e, this.f49849g);
        GLES20.glUniformMatrix4fv(this.f49856n, 1, false, this.f49848f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // ql.a
    public void b(float[] fArr, int i10) {
        this.f49847e = rl.a.a(fArr, this.f49846d);
        this.f49849g = i10;
    }

    @Override // ql.b
    public void c(int i10, float[] fArr) {
        this.f49857o = i10;
        this.f49848f = fArr;
    }

    @Override // ql.a
    public void release() {
        GLES20.glDeleteProgram(this.f49854l);
        GLES20.glDeleteShader(this.f49852j);
        GLES20.glDeleteShader(this.f49853k);
        GLES20.glDeleteBuffers(1, new int[]{this.f49859q}, 0);
        this.f49854l = 0;
        this.f49852j = 0;
        this.f49853k = 0;
        this.f49859q = 0;
    }
}
