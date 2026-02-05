package pe;

import android.opengl.GLES20;
import android.util.Log;
import java.nio.Buffer;
import java.nio.FloatBuffer;
import ne.s;
import ne.t;
import pe.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f45025j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f45026k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45027l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f45028m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f45029n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f45030a;

    /* renamed from: b  reason: collision with root package name */
    private a f45031b;

    /* renamed from: c  reason: collision with root package name */
    private a f45032c;

    /* renamed from: d  reason: collision with root package name */
    private s f45033d;

    /* renamed from: e  reason: collision with root package name */
    private int f45034e;

    /* renamed from: f  reason: collision with root package name */
    private int f45035f;

    /* renamed from: g  reason: collision with root package name */
    private int f45036g;

    /* renamed from: h  reason: collision with root package name */
    private int f45037h;

    /* renamed from: i  reason: collision with root package name */
    private int f45038i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f45039a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f45040b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f45041c;

        /* renamed from: d  reason: collision with root package name */
        private final int f45042d;

        public a(e.b bVar) {
            this.f45039a = bVar.a();
            this.f45040b = t.e(bVar.f45023c);
            this.f45041c = t.e(bVar.f45024d);
            int i10 = bVar.f45022b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f45042d = 4;
                    return;
                } else {
                    this.f45042d = 6;
                    return;
                }
            }
            this.f45042d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f45016a;
        e.a aVar2 = eVar.f45017b;
        if (aVar.b() != 1 || aVar.a(0).f45021a != 0 || aVar2.b() != 1 || aVar2.a(0).f45021a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f45032c;
        } else {
            aVar = this.f45031b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f45030a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f45027l;
                } else {
                    fArr2 = f45026k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f45029n;
                } else {
                    fArr2 = f45028m;
                }
            } else {
                fArr2 = f45025j;
            }
            GLES20.glUniformMatrix3fv(this.f45035f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f45034e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f45038i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f45036g, 3, 5126, false, 12, (Buffer) aVar2.f45040b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f45037h, 2, 5126, false, 8, (Buffer) aVar2.f45041c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f45042d, 0, aVar2.f45039a);
            try {
                t.b();
            } catch (t.a e13) {
                Log.e("ProjectionRenderer", "Failed to render", e13);
            }
        }
    }

    public void b() {
        try {
            s sVar = new s("uniform mat4 uMvpMatrix;\nuniform mat3 uTexMatrix;\nattribute vec4 aPosition;\nattribute vec2 aTexCoords;\nvarying vec2 vTexCoords;\n// Standard transformation.\nvoid main() {\n  gl_Position = uMvpMatrix * aPosition;\n  vTexCoords = (uTexMatrix * vec3(aTexCoords, 1)).xy;\n}\n", "// This is required since the texture data is GL_TEXTURE_EXTERNAL_OES.\n#extension GL_OES_EGL_image_external : require\nprecision mediump float;\n// Standard texture rendering shader.\nuniform samplerExternalOES uTexture;\nvarying vec2 vTexCoords;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoords);\n}\n");
            this.f45033d = sVar;
            this.f45034e = sVar.j("uMvpMatrix");
            this.f45035f = this.f45033d.j("uTexMatrix");
            this.f45036g = this.f45033d.e("aPosition");
            this.f45037h = this.f45033d.e("aTexCoords");
            this.f45038i = this.f45033d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f45030a = eVar.f45018c;
        a aVar = new a(eVar.f45016a.a(0));
        this.f45031b = aVar;
        if (!eVar.f45019d) {
            aVar = new a(eVar.f45017b.a(0));
        }
        this.f45032c = aVar;
    }
}
