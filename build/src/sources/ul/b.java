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
    private final String f50778a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50779b;

    /* renamed from: c  reason: collision with root package name */
    private final vl.a[] f50780c;

    /* renamed from: d  reason: collision with root package name */
    private final c f50781d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f50782e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f50783f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f50784g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f50785h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f50786i;

    /* renamed from: j  reason: collision with root package name */
    private int f50787j;

    /* renamed from: k  reason: collision with root package name */
    private int f50788k;

    /* renamed from: l  reason: collision with root package name */
    private int f50789l;

    /* renamed from: m  reason: collision with root package name */
    private int f50790m;

    /* renamed from: n  reason: collision with root package name */
    private int f50791n;

    /* renamed from: o  reason: collision with root package name */
    private int f50792o;

    /* renamed from: p  reason: collision with root package name */
    private int f50793p;

    /* renamed from: q  reason: collision with root package name */
    private int f50794q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, vl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f50786i = fArr;
        this.f50778a = str;
        this.f50779b = str2;
        this.f50780c = aVarArr;
        this.f50781d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f50785h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // sl.a
    public void a() {
        Matrix.setIdentityM(this.f50783f, 0);
        int c10 = f.c(35633, this.f50778a);
        this.f50787j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f50779b);
            this.f50788k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f50787j, c11);
                this.f50789l = b10;
                if (b10 != 0) {
                    this.f50793p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f50793p != -1) {
                        this.f50794q = GLES20.glGetAttribLocation(this.f50789l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f50794q != -1) {
                            this.f50790m = GLES20.glGetUniformLocation(this.f50789l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f50790m != -1) {
                                this.f50791n = GLES20.glGetUniformLocation(this.f50789l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f50791n != -1) {
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
        this.f50785h.position(0);
        GLES20.glVertexAttribPointer(this.f50793p, 3, 5126, false, 20, (Buffer) this.f50785h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f50793p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f50785h.position(3);
        GLES20.glVertexAttribPointer(this.f50794q, 2, 5126, false, 20, (Buffer) this.f50785h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f50794q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f50789l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f50792o);
        vl.a[] aVarArr = this.f50780c;
        if (aVarArr != null && aVarArr.length > 0) {
            vl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f50790m, 1, false, this.f50782e, this.f50784g);
        GLES20.glUniformMatrix4fv(this.f50791n, 1, false, this.f50783f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // sl.a
    public void b(float[] fArr, int i10) {
        this.f50782e = tl.a.a(fArr, this.f50781d);
        this.f50784g = i10;
    }

    @Override // sl.b
    public void c(int i10, float[] fArr) {
        this.f50792o = i10;
        this.f50783f = fArr;
    }

    @Override // sl.a
    public void release() {
        GLES20.glDeleteProgram(this.f50789l);
        GLES20.glDeleteShader(this.f50787j);
        GLES20.glDeleteShader(this.f50788k);
        GLES20.glDeleteBuffers(1, new int[]{this.f50794q}, 0);
        this.f50789l = 0;
        this.f50787j = 0;
        this.f50788k = 0;
        this.f50794q = 0;
    }
}
