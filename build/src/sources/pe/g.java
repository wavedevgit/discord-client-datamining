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
    private static final float[] f43822j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f43823k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f43824l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f43825m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f43826n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f43827a;

    /* renamed from: b  reason: collision with root package name */
    private a f43828b;

    /* renamed from: c  reason: collision with root package name */
    private a f43829c;

    /* renamed from: d  reason: collision with root package name */
    private s f43830d;

    /* renamed from: e  reason: collision with root package name */
    private int f43831e;

    /* renamed from: f  reason: collision with root package name */
    private int f43832f;

    /* renamed from: g  reason: collision with root package name */
    private int f43833g;

    /* renamed from: h  reason: collision with root package name */
    private int f43834h;

    /* renamed from: i  reason: collision with root package name */
    private int f43835i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f43836a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f43837b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f43838c;

        /* renamed from: d  reason: collision with root package name */
        private final int f43839d;

        public a(e.b bVar) {
            this.f43836a = bVar.a();
            this.f43837b = t.e(bVar.f43820c);
            this.f43838c = t.e(bVar.f43821d);
            int i10 = bVar.f43819b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f43839d = 4;
                    return;
                } else {
                    this.f43839d = 6;
                    return;
                }
            }
            this.f43839d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f43813a;
        e.a aVar2 = eVar.f43814b;
        if (aVar.b() != 1 || aVar.a(0).f43818a != 0 || aVar2.b() != 1 || aVar2.a(0).f43818a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f43829c;
        } else {
            aVar = this.f43828b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f43827a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f43824l;
                } else {
                    fArr2 = f43823k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f43826n;
                } else {
                    fArr2 = f43825m;
                }
            } else {
                fArr2 = f43822j;
            }
            GLES20.glUniformMatrix3fv(this.f43832f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f43831e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f43835i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f43833g, 3, 5126, false, 12, (Buffer) aVar2.f43837b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f43834h, 2, 5126, false, 8, (Buffer) aVar2.f43838c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f43839d, 0, aVar2.f43836a);
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
            this.f43830d = sVar;
            this.f43831e = sVar.j("uMvpMatrix");
            this.f43832f = this.f43830d.j("uTexMatrix");
            this.f43833g = this.f43830d.e("aPosition");
            this.f43834h = this.f43830d.e("aTexCoords");
            this.f43835i = this.f43830d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f43827a = eVar.f43815c;
        a aVar = new a(eVar.f43813a.a(0));
        this.f43828b = aVar;
        if (!eVar.f43816d) {
            aVar = new a(eVar.f43814b.a(0));
        }
        this.f43829c = aVar;
    }
}
