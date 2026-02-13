package pe;

import android.content.Context;
import android.opengl.GLES20;
import android.opengl.GLSurfaceView;
import android.util.AttributeSet;
import android.util.Log;
import java.nio.Buffer;
import java.nio.FloatBuffer;
import java.util.concurrent.atomic.AtomicReference;
import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;
import oe.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends GLSurfaceView implements k {

    /* renamed from: e  reason: collision with root package name */
    public static final /* synthetic */ int f42234e = 0;

    /* renamed from: d  reason: collision with root package name */
    private final a f42235d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements GLSurfaceView.Renderer {

        /* renamed from: u  reason: collision with root package name */
        private static final float[] f42236u = {1.164f, 1.164f, 1.164f, 0.0f, -0.392f, 2.017f, 1.596f, -0.813f, 0.0f};

        /* renamed from: v  reason: collision with root package name */
        private static final float[] f42237v = {1.164f, 1.164f, 1.164f, 0.0f, -0.213f, 2.112f, 1.793f, -0.533f, 0.0f};

        /* renamed from: w  reason: collision with root package name */
        private static final float[] f42238w = {1.168f, 1.168f, 1.168f, 0.0f, -0.188f, 2.148f, 1.683f, -0.652f, 0.0f};

        /* renamed from: x  reason: collision with root package name */
        private static final String[] f42239x = {"y_tex", "u_tex", "v_tex"};

        /* renamed from: y  reason: collision with root package name */
        private static final FloatBuffer f42240y = oe.t.e(new float[]{-1.0f, 1.0f, -1.0f, -1.0f, 1.0f, 1.0f, 1.0f, -1.0f});

        /* renamed from: d  reason: collision with root package name */
        private final GLSurfaceView f42241d;

        /* renamed from: e  reason: collision with root package name */
        private final int[] f42242e = new int[3];

        /* renamed from: i  reason: collision with root package name */
        private final int[] f42243i = new int[3];

        /* renamed from: o  reason: collision with root package name */
        private final int[] f42244o = new int[3];

        /* renamed from: p  reason: collision with root package name */
        private final int[] f42245p = new int[3];

        /* renamed from: q  reason: collision with root package name */
        private final AtomicReference f42246q = new AtomicReference();

        /* renamed from: r  reason: collision with root package name */
        private final FloatBuffer[] f42247r = new FloatBuffer[3];

        /* renamed from: s  reason: collision with root package name */
        private oe.s f42248s;

        /* renamed from: t  reason: collision with root package name */
        private int f42249t;

        public a(GLSurfaceView gLSurfaceView) {
            this.f42241d = gLSurfaceView;
            for (int i10 = 0; i10 < 3; i10++) {
                int[] iArr = this.f42244o;
                this.f42245p[i10] = -1;
                iArr[i10] = -1;
            }
        }

        private void b() {
            try {
                GLES20.glGenTextures(3, this.f42242e, 0);
                for (int i10 = 0; i10 < 3; i10++) {
                    GLES20.glUniform1i(this.f42248s.j(f42239x[i10]), i10);
                    GLES20.glActiveTexture(33984 + i10);
                    oe.t.a(3553, this.f42242e[i10]);
                }
                oe.t.b();
            } catch (t.a e10) {
                Log.e("VideoDecoderGLSV", "Failed to set up the textures", e10);
            }
        }

        public void a(rc.i iVar) {
            android.support.v4.media.session.b.a(this.f42246q.getAndSet(iVar));
            this.f42241d.requestRender();
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onDrawFrame(GL10 gl10) {
            android.support.v4.media.session.b.a(this.f42246q.getAndSet(null));
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceChanged(GL10 gl10, int i10, int i11) {
            GLES20.glViewport(0, 0, i10, i11);
        }

        @Override // android.opengl.GLSurfaceView.Renderer
        public void onSurfaceCreated(GL10 gl10, EGLConfig eGLConfig) {
            try {
                oe.s sVar = new oe.s("varying vec2 interp_tc_y;\nvarying vec2 interp_tc_u;\nvarying vec2 interp_tc_v;\nattribute vec4 in_pos;\nattribute vec2 in_tc_y;\nattribute vec2 in_tc_u;\nattribute vec2 in_tc_v;\nvoid main() {\n  gl_Position = in_pos;\n  interp_tc_y = in_tc_y;\n  interp_tc_u = in_tc_u;\n  interp_tc_v = in_tc_v;\n}\n", "precision mediump float;\nvarying vec2 interp_tc_y;\nvarying vec2 interp_tc_u;\nvarying vec2 interp_tc_v;\nuniform sampler2D y_tex;\nuniform sampler2D u_tex;\nuniform sampler2D v_tex;\nuniform mat3 mColorConversion;\nvoid main() {\n  vec3 yuv;\n  yuv.x = texture2D(y_tex, interp_tc_y).r - 0.0625;\n  yuv.y = texture2D(u_tex, interp_tc_u).r - 0.5;\n  yuv.z = texture2D(v_tex, interp_tc_v).r - 0.5;\n  gl_FragColor = vec4(mColorConversion * yuv, 1.0);\n}\n");
                this.f42248s = sVar;
                GLES20.glVertexAttribPointer(sVar.e("in_pos"), 2, 5126, false, 0, (Buffer) f42240y);
                this.f42243i[0] = this.f42248s.e("in_tc_y");
                this.f42243i[1] = this.f42248s.e("in_tc_u");
                this.f42243i[2] = this.f42248s.e("in_tc_v");
                this.f42249t = this.f42248s.j("mColorConversion");
                oe.t.b();
                b();
                oe.t.b();
            } catch (t.a e10) {
                Log.e("VideoDecoderGLSV", "Failed to set up the textures and program", e10);
            }
        }
    }

    public j(Context context) {
        this(context, null);
    }

    public void setOutputBuffer(rc.i iVar) {
        this.f42235d.a(iVar);
    }

    public j(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        a aVar = new a(this);
        this.f42235d = aVar;
        setPreserveEGLContextOnPause(true);
        setEGLContextClientVersion(2);
        setRenderer(aVar);
        setRenderMode(0);
    }

    @Deprecated
    public k getVideoDecoderOutputBufferRenderer() {
        return this;
    }
}
