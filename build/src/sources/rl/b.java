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
    private final String f49018a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49019b;

    /* renamed from: c  reason: collision with root package name */
    private final sl.a[] f49020c;

    /* renamed from: d  reason: collision with root package name */
    private final c f49021d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f49022e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f49023f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f49024g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f49025h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f49026i;

    /* renamed from: j  reason: collision with root package name */
    private int f49027j;

    /* renamed from: k  reason: collision with root package name */
    private int f49028k;

    /* renamed from: l  reason: collision with root package name */
    private int f49029l;

    /* renamed from: m  reason: collision with root package name */
    private int f49030m;

    /* renamed from: n  reason: collision with root package name */
    private int f49031n;

    /* renamed from: o  reason: collision with root package name */
    private int f49032o;

    /* renamed from: p  reason: collision with root package name */
    private int f49033p;

    /* renamed from: q  reason: collision with root package name */
    private int f49034q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, sl.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f49026i = fArr;
        this.f49018a = str;
        this.f49019b = str2;
        this.f49020c = aVarArr;
        this.f49021d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f49025h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // pl.a
    public void a() {
        Matrix.setIdentityM(this.f49023f, 0);
        int c10 = f.c(35633, this.f49018a);
        this.f49027j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f49019b);
            this.f49028k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f49027j, c11);
                this.f49029l = b10;
                if (b10 != 0) {
                    this.f49033p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f49033p != -1) {
                        this.f49034q = GLES20.glGetAttribLocation(this.f49029l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f49034q != -1) {
                            this.f49030m = GLES20.glGetUniformLocation(this.f49029l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f49030m != -1) {
                                this.f49031n = GLES20.glGetUniformLocation(this.f49029l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f49031n != -1) {
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
        this.f49025h.position(0);
        GLES20.glVertexAttribPointer(this.f49033p, 3, 5126, false, 20, (Buffer) this.f49025h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f49033p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f49025h.position(3);
        GLES20.glVertexAttribPointer(this.f49034q, 2, 5126, false, 20, (Buffer) this.f49025h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f49034q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f49029l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f49032o);
        sl.a[] aVarArr = this.f49020c;
        if (aVarArr != null && aVarArr.length > 0) {
            sl.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f49030m, 1, false, this.f49022e, this.f49024g);
        GLES20.glUniformMatrix4fv(this.f49031n, 1, false, this.f49023f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // pl.a
    public void b(float[] fArr, int i10) {
        this.f49022e = ql.a.a(fArr, this.f49021d);
        this.f49024g = i10;
    }

    @Override // pl.b
    public void c(int i10, float[] fArr) {
        this.f49032o = i10;
        this.f49023f = fArr;
    }

    @Override // pl.a
    public void release() {
        GLES20.glDeleteProgram(this.f49029l);
        GLES20.glDeleteShader(this.f49027j);
        GLES20.glDeleteShader(this.f49028k);
        GLES20.glDeleteBuffers(1, new int[]{this.f49034q}, 0);
        this.f49029l = 0;
        this.f49027j = 0;
        this.f49028k = 0;
        this.f49034q = 0;
    }
}
