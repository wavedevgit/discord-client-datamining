package rl;

import android.graphics.PointF;
import android.opengl.GLES20;
import android.opengl.Matrix;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import pl.c;
import ul.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements pl.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f48970a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48971b;

    /* renamed from: c  reason: collision with root package name */
    private final sl.a[] f48972c;

    /* renamed from: d  reason: collision with root package name */
    private final c f48973d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f48974e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f48975f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f48976g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f48977h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f48978i;

    /* renamed from: j  reason: collision with root package name */
    private int f48979j;

    /* renamed from: k  reason: collision with root package name */
    private int f48980k;

    /* renamed from: l  reason: collision with root package name */
    private int f48981l;

    /* renamed from: m  reason: collision with root package name */
    private int f48982m;

    /* renamed from: n  reason: collision with root package name */
    private int f48983n;

    /* renamed from: o  reason: collision with root package name */
    private int f48984o;

    /* renamed from: p  reason: collision with root package name */
    private int f48985p;

    /* renamed from: q  reason: collision with root package name */
    private int f48986q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, sl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f48978i = fArr;
        this.f48970a = str;
        this.f48971b = str2;
        this.f48972c = aVarArr;
        this.f48973d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f48977h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // pl.a
    public void a() {
        Matrix.setIdentityM(this.f48975f, 0);
        int c10 = f.c(35633, this.f48970a);
        this.f48979j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f48971b);
            this.f48980k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f48979j, c11);
                this.f48981l = b10;
                if (b10 != 0) {
                    this.f48985p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f48985p != -1) {
                        this.f48986q = GLES20.glGetAttribLocation(this.f48981l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f48986q != -1) {
                            this.f48982m = GLES20.glGetUniformLocation(this.f48981l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f48982m != -1) {
                                this.f48983n = GLES20.glGetUniformLocation(this.f48981l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f48983n != -1) {
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

    @Override // pl.a
    public void apply(long j10) {
        this.f48977h.position(0);
        GLES20.glVertexAttribPointer(this.f48985p, 3, 5126, false, 20, (Buffer) this.f48977h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f48985p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f48977h.position(3);
        GLES20.glVertexAttribPointer(this.f48986q, 2, 5126, false, 20, (Buffer) this.f48977h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f48986q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f48981l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f48984o);
        sl.a[] aVarArr = this.f48972c;
        if (aVarArr != null && aVarArr.length > 0) {
            sl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f48982m, 1, false, this.f48974e, this.f48976g);
        GLES20.glUniformMatrix4fv(this.f48983n, 1, false, this.f48975f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // pl.a
    public void b(float[] fArr, int i10) {
        this.f48974e = ql.a.a(fArr, this.f48973d);
        this.f48976g = i10;
    }

    @Override // pl.b
    public void c(int i10, float[] fArr) {
        this.f48984o = i10;
        this.f48975f = fArr;
    }

    @Override // pl.a
    public void release() {
        GLES20.glDeleteProgram(this.f48981l);
        GLES20.glDeleteShader(this.f48979j);
        GLES20.glDeleteShader(this.f48980k);
        GLES20.glDeleteBuffers(1, new int[]{this.f48986q}, 0);
        this.f48981l = 0;
        this.f48979j = 0;
        this.f48980k = 0;
        this.f48986q = 0;
    }
}
