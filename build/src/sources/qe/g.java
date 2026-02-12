package qe;

import android.opengl.GLES20;
import android.util.Log;
import java.nio.Buffer;
import java.nio.FloatBuffer;
import oe.s;
import oe.t;
import qe.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f44053j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f44054k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f44055l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f44056m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f44057n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f44058a;

    /* renamed from: b  reason: collision with root package name */
    private a f44059b;

    /* renamed from: c  reason: collision with root package name */
    private a f44060c;

    /* renamed from: d  reason: collision with root package name */
    private s f44061d;

    /* renamed from: e  reason: collision with root package name */
    private int f44062e;

    /* renamed from: f  reason: collision with root package name */
    private int f44063f;

    /* renamed from: g  reason: collision with root package name */
    private int f44064g;

    /* renamed from: h  reason: collision with root package name */
    private int f44065h;

    /* renamed from: i  reason: collision with root package name */
    private int f44066i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f44067a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f44068b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f44069c;

        /* renamed from: d  reason: collision with root package name */
        private final int f44070d;

        public a(e.b bVar) {
            this.f44067a = bVar.a();
            this.f44068b = t.e(bVar.f44051c);
            this.f44069c = t.e(bVar.f44052d);
            int i10 = bVar.f44050b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f44070d = 4;
                    return;
                } else {
                    this.f44070d = 6;
                    return;
                }
            }
            this.f44070d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f44044a;
        e.a aVar2 = eVar.f44045b;
        if (aVar.b() != 1 || aVar.a(0).f44049a != 0 || aVar2.b() != 1 || aVar2.a(0).f44049a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f44060c;
        } else {
            aVar = this.f44059b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f44058a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f44055l;
                } else {
                    fArr2 = f44054k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f44057n;
                } else {
                    fArr2 = f44056m;
                }
            } else {
                fArr2 = f44053j;
            }
            GLES20.glUniformMatrix3fv(this.f44063f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f44062e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f44066i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f44064g, 3, 5126, false, 12, (Buffer) aVar2.f44068b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f44065h, 2, 5126, false, 8, (Buffer) aVar2.f44069c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f44070d, 0, aVar2.f44067a);
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
            this.f44061d = sVar;
            this.f44062e = sVar.j("uMvpMatrix");
            this.f44063f = this.f44061d.j("uTexMatrix");
            this.f44064g = this.f44061d.e("aPosition");
            this.f44065h = this.f44061d.e("aTexCoords");
            this.f44066i = this.f44061d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f44058a = eVar.f44046c;
        a aVar = new a(eVar.f44044a.a(0));
        this.f44059b = aVar;
        if (!eVar.f44047d) {
            aVar = new a(eVar.f44045b.a(0));
        }
        this.f44060c = aVar;
    }
}
