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
    private static final float[] f44621j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f44622k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f44623l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f44624m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f44625n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f44626a;

    /* renamed from: b  reason: collision with root package name */
    private a f44627b;

    /* renamed from: c  reason: collision with root package name */
    private a f44628c;

    /* renamed from: d  reason: collision with root package name */
    private s f44629d;

    /* renamed from: e  reason: collision with root package name */
    private int f44630e;

    /* renamed from: f  reason: collision with root package name */
    private int f44631f;

    /* renamed from: g  reason: collision with root package name */
    private int f44632g;

    /* renamed from: h  reason: collision with root package name */
    private int f44633h;

    /* renamed from: i  reason: collision with root package name */
    private int f44634i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f44635a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f44636b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f44637c;

        /* renamed from: d  reason: collision with root package name */
        private final int f44638d;

        public a(e.b bVar) {
            this.f44635a = bVar.a();
            this.f44636b = t.e(bVar.f44619c);
            this.f44637c = t.e(bVar.f44620d);
            int i10 = bVar.f44618b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f44638d = 4;
                    return;
                } else {
                    this.f44638d = 6;
                    return;
                }
            }
            this.f44638d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f44612a;
        e.a aVar2 = eVar.f44613b;
        if (aVar.b() != 1 || aVar.a(0).f44617a != 0 || aVar2.b() != 1 || aVar2.a(0).f44617a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f44628c;
        } else {
            aVar = this.f44627b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f44626a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f44623l;
                } else {
                    fArr2 = f44622k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f44625n;
                } else {
                    fArr2 = f44624m;
                }
            } else {
                fArr2 = f44621j;
            }
            GLES20.glUniformMatrix3fv(this.f44631f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f44630e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f44634i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f44632g, 3, 5126, false, 12, (Buffer) aVar2.f44636b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f44633h, 2, 5126, false, 8, (Buffer) aVar2.f44637c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f44638d, 0, aVar2.f44635a);
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
            this.f44629d = sVar;
            this.f44630e = sVar.j("uMvpMatrix");
            this.f44631f = this.f44629d.j("uTexMatrix");
            this.f44632g = this.f44629d.e("aPosition");
            this.f44633h = this.f44629d.e("aTexCoords");
            this.f44634i = this.f44629d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f44626a = eVar.f44614c;
        a aVar = new a(eVar.f44612a.a(0));
        this.f44627b = aVar;
        if (!eVar.f44615d) {
            aVar = new a(eVar.f44613b.a(0));
        }
        this.f44628c = aVar;
    }
}
