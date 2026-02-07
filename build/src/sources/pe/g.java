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
    private static final float[] f43870j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f43871k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f43872l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f43873m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f43874n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f43875a;

    /* renamed from: b  reason: collision with root package name */
    private a f43876b;

    /* renamed from: c  reason: collision with root package name */
    private a f43877c;

    /* renamed from: d  reason: collision with root package name */
    private s f43878d;

    /* renamed from: e  reason: collision with root package name */
    private int f43879e;

    /* renamed from: f  reason: collision with root package name */
    private int f43880f;

    /* renamed from: g  reason: collision with root package name */
    private int f43881g;

    /* renamed from: h  reason: collision with root package name */
    private int f43882h;

    /* renamed from: i  reason: collision with root package name */
    private int f43883i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f43884a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f43885b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f43886c;

        /* renamed from: d  reason: collision with root package name */
        private final int f43887d;

        public a(e.b bVar) {
            this.f43884a = bVar.a();
            this.f43885b = t.e(bVar.f43868c);
            this.f43886c = t.e(bVar.f43869d);
            int i10 = bVar.f43867b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f43887d = 4;
                    return;
                } else {
                    this.f43887d = 6;
                    return;
                }
            }
            this.f43887d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f43861a;
        e.a aVar2 = eVar.f43862b;
        if (aVar.b() != 1 || aVar.a(0).f43866a != 0 || aVar2.b() != 1 || aVar2.a(0).f43866a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f43877c;
        } else {
            aVar = this.f43876b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f43875a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f43872l;
                } else {
                    fArr2 = f43871k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f43874n;
                } else {
                    fArr2 = f43873m;
                }
            } else {
                fArr2 = f43870j;
            }
            GLES20.glUniformMatrix3fv(this.f43880f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f43879e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f43883i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f43881g, 3, 5126, false, 12, (Buffer) aVar2.f43885b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f43882h, 2, 5126, false, 8, (Buffer) aVar2.f43886c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f43887d, 0, aVar2.f43884a);
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
            this.f43878d = sVar;
            this.f43879e = sVar.j("uMvpMatrix");
            this.f43880f = this.f43878d.j("uTexMatrix");
            this.f43881g = this.f43878d.e("aPosition");
            this.f43882h = this.f43878d.e("aTexCoords");
            this.f43883i = this.f43878d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f43875a = eVar.f43863c;
        a aVar = new a(eVar.f43861a.a(0));
        this.f43876b = aVar;
        if (!eVar.f43864d) {
            aVar = new a(eVar.f43862b.a(0));
        }
        this.f43877c = aVar;
    }
}
