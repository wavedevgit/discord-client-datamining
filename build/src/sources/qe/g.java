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
    private static final float[] f45384j = {1.0f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final float[] f45385k = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45386l = {1.0f, 0.0f, 0.0f, 0.0f, -0.5f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f45387m = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.0f, 1.0f, 1.0f};

    /* renamed from: n  reason: collision with root package name */
    private static final float[] f45388n = {0.5f, 0.0f, 0.0f, 0.0f, -1.0f, 0.0f, 0.5f, 1.0f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private int f45389a;

    /* renamed from: b  reason: collision with root package name */
    private a f45390b;

    /* renamed from: c  reason: collision with root package name */
    private a f45391c;

    /* renamed from: d  reason: collision with root package name */
    private s f45392d;

    /* renamed from: e  reason: collision with root package name */
    private int f45393e;

    /* renamed from: f  reason: collision with root package name */
    private int f45394f;

    /* renamed from: g  reason: collision with root package name */
    private int f45395g;

    /* renamed from: h  reason: collision with root package name */
    private int f45396h;

    /* renamed from: i  reason: collision with root package name */
    private int f45397i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f45398a;

        /* renamed from: b  reason: collision with root package name */
        private final FloatBuffer f45399b;

        /* renamed from: c  reason: collision with root package name */
        private final FloatBuffer f45400c;

        /* renamed from: d  reason: collision with root package name */
        private final int f45401d;

        public a(e.b bVar) {
            this.f45398a = bVar.a();
            this.f45399b = t.e(bVar.f45382c);
            this.f45400c = t.e(bVar.f45383d);
            int i10 = bVar.f45381b;
            if (i10 != 1) {
                if (i10 != 2) {
                    this.f45401d = 4;
                    return;
                } else {
                    this.f45401d = 6;
                    return;
                }
            }
            this.f45401d = 5;
        }
    }

    public static boolean c(e eVar) {
        e.a aVar = eVar.f45375a;
        e.a aVar2 = eVar.f45376b;
        if (aVar.b() != 1 || aVar.a(0).f45380a != 0 || aVar2.b() != 1 || aVar2.a(0).f45380a != 0) {
            return false;
        }
        return true;
    }

    public void a(int i10, float[] fArr, boolean z10) {
        a aVar;
        float[] fArr2;
        if (z10) {
            aVar = this.f45391c;
        } else {
            aVar = this.f45390b;
        }
        a aVar2 = aVar;
        if (aVar2 != null) {
            int i11 = this.f45389a;
            if (i11 == 1) {
                if (z10) {
                    fArr2 = f45386l;
                } else {
                    fArr2 = f45385k;
                }
            } else if (i11 == 2) {
                if (z10) {
                    fArr2 = f45388n;
                } else {
                    fArr2 = f45387m;
                }
            } else {
                fArr2 = f45384j;
            }
            GLES20.glUniformMatrix3fv(this.f45394f, 1, false, fArr2, 0);
            GLES20.glUniformMatrix4fv(this.f45393e, 1, false, fArr, 0);
            GLES20.glActiveTexture(33984);
            GLES20.glBindTexture(36197, i10);
            GLES20.glUniform1i(this.f45397i, 0);
            try {
                t.b();
            } catch (t.a e10) {
                Log.e("ProjectionRenderer", "Failed to bind uniforms", e10);
            }
            GLES20.glVertexAttribPointer(this.f45395g, 3, 5126, false, 12, (Buffer) aVar2.f45399b);
            try {
                t.b();
            } catch (t.a e11) {
                Log.e("ProjectionRenderer", "Failed to load position data", e11);
            }
            GLES20.glVertexAttribPointer(this.f45396h, 2, 5126, false, 8, (Buffer) aVar2.f45400c);
            try {
                t.b();
            } catch (t.a e12) {
                Log.e("ProjectionRenderer", "Failed to load texture data", e12);
            }
            GLES20.glDrawArrays(aVar2.f45401d, 0, aVar2.f45398a);
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
            this.f45392d = sVar;
            this.f45393e = sVar.j("uMvpMatrix");
            this.f45394f = this.f45392d.j("uTexMatrix");
            this.f45395g = this.f45392d.e("aPosition");
            this.f45396h = this.f45392d.e("aTexCoords");
            this.f45397i = this.f45392d.j("uTexture");
        } catch (t.a e10) {
            Log.e("ProjectionRenderer", "Failed to initialize the program", e10);
        }
    }

    public void d(e eVar) {
        if (!c(eVar)) {
            return;
        }
        this.f45389a = eVar.f45377c;
        a aVar = new a(eVar.f45375a.a(0));
        this.f45390b = aVar;
        if (!eVar.f45378d) {
            aVar = new a(eVar.f45376b.a(0));
        }
        this.f45391c = aVar;
    }
}
