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
    private static final float[] f45137j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f45138k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45139l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f45140m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f45141n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f45142a;

    /* renamed from: b  reason: collision with root package name */
    private a f45143b;

    /* renamed from: c  reason: collision with root package name */
    private a f45144c;

    /* renamed from: d  reason: collision with root package name */
    private s f45145d;

    /* renamed from: e  reason: collision with root package name */
    private int f45146e;

    /* renamed from: f  reason: collision with root package name */
    private int f45147f;

    /* renamed from: g  reason: collision with root package name */
    private int f45148g;

    /* renamed from: h  reason: collision with root package name */
    private int f45149h;

    /* renamed from: i  reason: collision with root package name */
    private int f45150i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f45151a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f45152b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f45153c;

        /* renamed from: d  reason: collision with root package name */
        private final int f45154d;

        public a(e.b bVar) {
            this.f45151a = bVar.a();
            this.f45152b = t.e(bVar.f45135c);
            this.f45153c = t.e(bVar.f45136d);
            int i10 = bVar.f45134b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f45154d = 4;
                    return;
                } else {
                    this.f45154d = 6;
                    return;
                }
            }
            this.f45154d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f45128a;
        e.a aVar2 = eVar.f45129b;
        if (aVar.b() != 1 || aVar.a(0).f45133a != 0 || aVar2.b() != 1 || aVar2.a(0).f45133a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f45144c;
        } else {
            aVar = this.f45143b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f45142a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f45139l;
                } else {
                    fArr2 = f45138k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f45141n;
                } else {
                    fArr2 = f45140m;
                }
            } else {
                fArr2 = f45137j;
            }
            GLES20.glUniformMatrix3fv(this.f45147f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f45146e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f45150i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f45148g, 3, 5126, false, 12, (Buffer) aVar2.f45152b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f45149h, 2, 5126, false, 8, (Buffer) aVar2.f45153c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f45154d, 0, aVar2.f45151a);
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
            this.f45145d = sVar;
            this.f45146e = sVar.j("uMvpMatrix");
            this.f45147f = this.f45145d.j("uTexMatrix");
            this.f45148g = this.f45145d.e("aPosition");
            this.f45149h = this.f45145d.e("aTexCoords");
            this.f45150i = this.f45145d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f45142a = eVar.f45130c;
        a aVar = new a(eVar.f45128a.a(0));
        this.f45143b = aVar;
        if (!eVar.f45131d) {
            aVar = new a(eVar.f45129b.a(0));
        }
        this.f45144c = aVar;
    }
}
