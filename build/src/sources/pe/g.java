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
    private static final float[] f45047j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f45048k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45049l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f45050m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f45051n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f45052a;

    /* renamed from: b  reason: collision with root package name */
    private a f45053b;

    /* renamed from: c  reason: collision with root package name */
    private a f45054c;

    /* renamed from: d  reason: collision with root package name */
    private s f45055d;

    /* renamed from: e  reason: collision with root package name */
    private int f45056e;

    /* renamed from: f  reason: collision with root package name */
    private int f45057f;

    /* renamed from: g  reason: collision with root package name */
    private int f45058g;

    /* renamed from: h  reason: collision with root package name */
    private int f45059h;

    /* renamed from: i  reason: collision with root package name */
    private int f45060i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f45061a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f45062b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f45063c;

        /* renamed from: d  reason: collision with root package name */
        private final int f45064d;

        public a(e.b bVar) {
            this.f45061a = bVar.a();
            this.f45062b = t.e(bVar.f45045c);
            this.f45063c = t.e(bVar.f45046d);
            int i10 = bVar.f45044b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f45064d = 4;
                    return;
                } else {
                    this.f45064d = 6;
                    return;
                }
            }
            this.f45064d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f45038a;
        e.a aVar2 = eVar.f45039b;
        if (aVar.b() != 1 || aVar.a(0).f45043a != 0 || aVar2.b() != 1 || aVar2.a(0).f45043a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f45054c;
        } else {
            aVar = this.f45053b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f45052a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f45049l;
                } else {
                    fArr2 = f45048k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f45051n;
                } else {
                    fArr2 = f45050m;
                }
            } else {
                fArr2 = f45047j;
            }
            GLES20.glUniformMatrix3fv(this.f45057f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f45056e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f45060i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f45058g, 3, 5126, false, 12, (Buffer) aVar2.f45062b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f45059h, 2, 5126, false, 8, (Buffer) aVar2.f45063c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f45064d, 0, aVar2.f45061a);
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
            this.f45055d = sVar;
            this.f45056e = sVar.j("uMvpMatrix");
            this.f45057f = this.f45055d.j("uTexMatrix");
            this.f45058g = this.f45055d.e("aPosition");
            this.f45059h = this.f45055d.e("aTexCoords");
            this.f45060i = this.f45055d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f45052a = eVar.f45040c;
        a aVar = new a(eVar.f45038a.a(0));
        this.f45053b = aVar;
        if (!eVar.f45041d) {
            aVar = new a(eVar.f45039b.a(0));
        }
        this.f45054c = aVar;
    }
}
