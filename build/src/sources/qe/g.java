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
    private static final float[] f44052j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f44053k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f44054l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f44055m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f44056n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f44057a;

    /* renamed from: b  reason: collision with root package name */
    private a f44058b;

    /* renamed from: c  reason: collision with root package name */
    private a f44059c;

    /* renamed from: d  reason: collision with root package name */
    private s f44060d;

    /* renamed from: e  reason: collision with root package name */
    private int f44061e;

    /* renamed from: f  reason: collision with root package name */
    private int f44062f;

    /* renamed from: g  reason: collision with root package name */
    private int f44063g;

    /* renamed from: h  reason: collision with root package name */
    private int f44064h;

    /* renamed from: i  reason: collision with root package name */
    private int f44065i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f44066a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f44067b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f44068c;

        /* renamed from: d  reason: collision with root package name */
        private final int f44069d;

        public a(e.b bVar) {
            this.f44066a = bVar.a();
            this.f44067b = t.e(bVar.f44050c);
            this.f44068c = t.e(bVar.f44051d);
            int i10 = bVar.f44049b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f44069d = 4;
                    return;
                } else {
                    this.f44069d = 6;
                    return;
                }
            }
            this.f44069d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f44043a;
        e.a aVar2 = eVar.f44044b;
        if (aVar.b() != 1 || aVar.a(0).f44048a != 0 || aVar2.b() != 1 || aVar2.a(0).f44048a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f44059c;
        } else {
            aVar = this.f44058b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f44057a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f44054l;
                } else {
                    fArr2 = f44053k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f44056n;
                } else {
                    fArr2 = f44055m;
                }
            } else {
                fArr2 = f44052j;
            }
            GLES20.glUniformMatrix3fv(this.f44062f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f44061e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f44065i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f44063g, 3, 5126, false, 12, (Buffer) aVar2.f44067b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f44064h, 2, 5126, false, 8, (Buffer) aVar2.f44068c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f44069d, 0, aVar2.f44066a);
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
            this.f44060d = sVar;
            this.f44061e = sVar.j("uMvpMatrix");
            this.f44062f = this.f44060d.j("uTexMatrix");
            this.f44063g = this.f44060d.e("aPosition");
            this.f44064h = this.f44060d.e("aTexCoords");
            this.f44065i = this.f44060d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f44057a = eVar.f44045c;
        a aVar = new a(eVar.f44043a.a(0));
        this.f44058b = aVar;
        if (!eVar.f44046d) {
            aVar = new a(eVar.f44044b.a(0));
        }
        this.f44059c = aVar;
    }
}
