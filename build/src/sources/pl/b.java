package pl;

import android.graphics.PointF;
import android.opengl.GLES20;
import android.opengl.Matrix;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import nl.c;
import sl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements nl.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f46069a;

    /* renamed from: b  reason: collision with root package name */
    private final String f46070b;

    /* renamed from: c  reason: collision with root package name */
    private final ql.a[] f46071c;

    /* renamed from: d  reason: collision with root package name */
    private final c f46072d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f46073e = new float[16];

    /* renamed from: f  reason: collision with root package name */
    private float[] f46074f = new float[16];

    /* renamed from: g  reason: collision with root package name */
    private int f46075g;

    /* renamed from: h  reason: collision with root package name */
    private FloatBuffer f46076h;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f46077i;

    /* renamed from: j  reason: collision with root package name */
    private int f46078j;

    /* renamed from: k  reason: collision with root package name */
    private int f46079k;

    /* renamed from: l  reason: collision with root package name */
    private int f46080l;

    /* renamed from: m  reason: collision with root package name */
    private int f46081m;

    /* renamed from: n  reason: collision with root package name */
    private int f46082n;

    /* renamed from: o  reason: collision with root package name */
    private int f46083o;

    /* renamed from: p  reason: collision with root package name */
    private int f46084p;

    /* renamed from: q  reason: collision with root package name */
    private int f46085q;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(String str, String str2, ql.a[] aVarArr, c cVar) {
        float[] fArr = {-1.0f, -1.0f, 0.0f, 0.0f, 0.0f, 1.0f, -1.0f, 0.0f, 1.0f, 0.0f, -1.0f, 1.0f, 0.0f, 0.0f, 1.0f, 1.0f, 1.0f, 0.0f, 1.0f, 1.0f};
        this.f46077i = fArr;
        this.f46069a = str;
        this.f46070b = str2;
        this.f46071c = aVarArr;
        this.f46072d = cVar == null ? new c(new PointF(1.0f, 1.0f), new PointF(0.5f, 0.5f), 0.0f) : cVar;
        FloatBuffer asFloatBuffer = ByteBuffer.allocateDirect(fArr.length * 4).order(ByteOrder.nativeOrder()).asFloatBuffer();
        this.f46076h = asFloatBuffer;
        asFloatBuffer.put(fArr).position(0);
    }

    @Override // nl.a
    public void a() {
        Matrix.setIdentityM(this.f46074f, 0);
        int c10 = f.c(35633, this.f46069a);
        this.f46078j = c10;
        if (c10 != 0) {
            int c11 = f.c(35632, this.f46070b);
            this.f46079k = c11;
            if (c11 != 0) {
                int b10 = f.b(this.f46078j, c11);
                this.f46080l = b10;
                if (b10 != 0) {
                    this.f46084p = GLES20.glGetAttribLocation(b10, "aPosition");
                    f.a("glGetAttribLocation aPosition");
                    if (this.f46084p != -1) {
                        this.f46085q = GLES20.glGetAttribLocation(this.f46080l, "aTextureCoord");
                        f.a("glGetAttribLocation aTextureCoord");
                        if (this.f46085q != -1) {
                            this.f46081m = GLES20.glGetUniformLocation(this.f46080l, "uMVPMatrix");
                            f.a("glGetUniformLocation uMVPMatrix");
                            if (this.f46081m != -1) {
                                this.f46082n = GLES20.glGetUniformLocation(this.f46080l, "uSTMatrix");
                                f.a("glGetUniformLocation uSTMatrix");
                                if (this.f46082n != -1) {
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

    @Override // nl.a
    public void apply(long j10) {
        this.f46076h.position(0);
        GLES20.glVertexAttribPointer(this.f46084p, 3, 5126, false, 20, (Buffer) this.f46076h);
        f.a("glVertexAttribPointer maPosition");
        GLES20.glEnableVertexAttribArray(this.f46084p);
        f.a("glEnableVertexAttribArray aPositionHandle");
        this.f46076h.position(3);
        GLES20.glVertexAttribPointer(this.f46085q, 2, 5126, false, 20, (Buffer) this.f46076h);
        f.a("glVertexAttribPointer aTextureHandle");
        GLES20.glEnableVertexAttribArray(this.f46085q);
        f.a("glEnableVertexAttribArray aTextureHandle");
        f.a("onDrawFrame start");
        GLES20.glUseProgram(this.f46080l);
        f.a("glUseProgram");
        GLES20.glActiveTexture(33984);
        GLES20.glBindTexture(36197, this.f46083o);
        ql.a[] aVarArr = this.f46071c;
        if (aVarArr != null && aVarArr.length > 0) {
            ql.a aVar = aVarArr[0];
            throw null;
        }
        GLES20.glUniformMatrix4fv(this.f46081m, 1, false, this.f46073e, this.f46075g);
        GLES20.glUniformMatrix4fv(this.f46082n, 1, false, this.f46074f, 0);
        GLES20.glDrawArrays(5, 0, 4);
        f.a("glDrawArrays");
    }

    @Override // nl.a
    public void b(float[] fArr, int i10) {
        this.f46073e = ol.a.a(fArr, this.f46072d);
        this.f46075g = i10;
    }

    @Override // nl.b
    public void c(int i10, float[] fArr) {
        this.f46083o = i10;
        this.f46074f = fArr;
    }

    @Override // nl.a
    public void release() {
        GLES20.glDeleteProgram(this.f46080l);
        GLES20.glDeleteShader(this.f46078j);
        GLES20.glDeleteShader(this.f46079k);
        GLES20.glDeleteBuffers(1, new int[]{this.f46085q}, 0);
        this.f46080l = 0;
        this.f46078j = 0;
        this.f46079k = 0;
        this.f46085q = 0;
    }
}
