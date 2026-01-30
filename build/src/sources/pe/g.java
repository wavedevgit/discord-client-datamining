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
    private static final float[] f45063j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f45064k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45065l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f45066m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f45067n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f45068a;

    /* renamed from: b  reason: collision with root package name */
    private a f45069b;

    /* renamed from: c  reason: collision with root package name */
    private a f45070c;

    /* renamed from: d  reason: collision with root package name */
    private s f45071d;

    /* renamed from: e  reason: collision with root package name */
    private int f45072e;

    /* renamed from: f  reason: collision with root package name */
    private int f45073f;

    /* renamed from: g  reason: collision with root package name */
    private int f45074g;

    /* renamed from: h  reason: collision with root package name */
    private int f45075h;

    /* renamed from: i  reason: collision with root package name */
    private int f45076i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f45077a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f45078b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f45079c;

        /* renamed from: d  reason: collision with root package name */
        private final int f45080d;

        public a(e.b bVar) {
            this.f45077a = bVar.a();
            this.f45078b = t.e(bVar.f45061c);
            this.f45079c = t.e(bVar.f45062d);
            int i10 = bVar.f45060b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f45080d = 4;
                    return;
                } else {
                    this.f45080d = 6;
                    return;
                }
            }
            this.f45080d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f45054a;
        e.a aVar2 = eVar.f45055b;
        if (aVar.b() != 1 || aVar.a(0).f45059a != 0 || aVar2.b() != 1 || aVar2.a(0).f45059a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f45070c;
        } else {
            aVar = this.f45069b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f45068a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f45065l;
                } else {
                    fArr2 = f45064k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f45067n;
                } else {
                    fArr2 = f45066m;
                }
            } else {
                fArr2 = f45063j;
            }
            GLES20.glUniformMatrix3fv(this.f45073f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f45072e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f45076i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f45074g, 3, 5126, false, 12, (Buffer) aVar2.f45078b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f45075h, 2, 5126, false, 8, (Buffer) aVar2.f45079c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f45080d, 0, aVar2.f45077a);
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
            this.f45071d = sVar;
            this.f45072e = sVar.j("uMvpMatrix");
            this.f45073f = this.f45071d.j("uTexMatrix");
            this.f45074g = this.f45071d.e("aPosition");
            this.f45075h = this.f45071d.e("aTexCoords");
            this.f45076i = this.f45071d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f45068a = eVar.f45056c;
        a aVar = new a(eVar.f45054a.a(0));
        this.f45069b = aVar;
        if (!eVar.f45057d) {
            aVar = new a(eVar.f45055b.a(0));
        }
        this.f45070c = aVar;
    }
}
