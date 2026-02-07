package ne;

import android.opengl.GLES20;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final int f39035a;

    /* renamed from: b  reason: collision with root package name */
    private final a[] f39036b;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f39037c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f39038d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f39039e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f39040a;

        /* renamed from: b  reason: collision with root package name */
        private final int f39041b;

        /* renamed from: c  reason: collision with root package name */
        private final int f39042c;

        private a(String str, int i10, int i11) {
            this.f39040a = str;
            this.f39041b = i10;
            this.f39042c = i11;
        }

        public static a a(int i10, int i11) {
            int[] iArr = new int[1];
            GLES20.glGetProgramiv(i10, 35722, iArr, 0);
            int i12 = iArr[0];
            byte[] bArr = new byte[i12];
            GLES20.glGetActiveAttrib(i10, i11, i12, new int[1], 0, new int[1], 0, new int[1], 0, bArr, 0);
            String str = new String(bArr, 0, s.h(bArr));
            return new a(str, i11, s.f(i10, str));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final String f39043a;

        /* renamed from: b  reason: collision with root package name */
        private final int f39044b;

        /* renamed from: c  reason: collision with root package name */
        private final int f39045c;

        /* renamed from: d  reason: collision with root package name */
        private final float[] f39046d = new float[16];

        private b(String str, int i10, int i11) {
            this.f39043a = str;
            this.f39044b = i10;
            this.f39045c = i11;
        }

        public static b a(int i10, int i11) {
            int[] iArr = new int[1];
            GLES20.glGetProgramiv(i10, 35719, iArr, 0);
            int[] iArr2 = new int[1];
            int i12 = iArr[0];
            byte[] bArr = new byte[i12];
            GLES20.glGetActiveUniform(i10, i11, i12, new int[1], 0, new int[1], 0, iArr2, 0, bArr, 0);
            String str = new String(bArr, 0, s.h(bArr));
            return new b(str, s.i(i10, str), iArr2[0]);
        }
    }

    public s(String str, String str2) {
        boolean z10;
        int glCreateProgram = GLES20.glCreateProgram();
        this.f39035a = glCreateProgram;
        t.b();
        d(glCreateProgram, 35633, str);
        d(glCreateProgram, 35632, str2);
        GLES20.glLinkProgram(glCreateProgram);
        int[] iArr = {0};
        GLES20.glGetProgramiv(glCreateProgram, 35714, iArr, 0);
        if (iArr[0] == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.c(z10, "Unable to link shader program: \n" + GLES20.glGetProgramInfoLog(glCreateProgram));
        GLES20.glUseProgram(glCreateProgram);
        this.f39038d = new HashMap();
        int[] iArr2 = new int[1];
        GLES20.glGetProgramiv(glCreateProgram, 35721, iArr2, 0);
        this.f39036b = new a[iArr2[0]];
        for (int i10 = 0; i10 < iArr2[0]; i10++) {
            a a10 = a.a(this.f39035a, i10);
            this.f39036b[i10] = a10;
            this.f39038d.put(a10.f39040a, a10);
        }
        this.f39039e = new HashMap();
        int[] iArr3 = new int[1];
        GLES20.glGetProgramiv(this.f39035a, 35718, iArr3, 0);
        this.f39037c = new b[iArr3[0]];
        for (int i11 = 0; i11 < iArr3[0]; i11++) {
            b a11 = b.a(this.f39035a, i11);
            this.f39037c[i11] = a11;
            this.f39039e.put(a11.f39043a, a11);
        }
        t.b();
    }

    private static void d(int i10, int i11, String str) {
        int glCreateShader = GLES20.glCreateShader(i11);
        GLES20.glShaderSource(glCreateShader, str);
        GLES20.glCompileShader(glCreateShader);
        boolean z10 = false;
        int[] iArr = {0};
        GLES20.glGetShaderiv(glCreateShader, 35713, iArr, 0);
        if (iArr[0] == 1) {
            z10 = true;
        }
        t.c(z10, GLES20.glGetShaderInfoLog(glCreateShader) + ", source: " + str);
        GLES20.glAttachShader(i10, glCreateShader);
        GLES20.glDeleteShader(glCreateShader);
        t.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int f(int i10, String str) {
        return GLES20.glGetAttribLocation(i10, str);
    }

    private int g(String str) {
        return f(this.f39035a, str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int h(byte[] bArr) {
        for (int i10 = 0; i10 < bArr.length; i10++) {
            if (bArr[i10] == 0) {
                return i10;
            }
        }
        return bArr.length;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int i(int i10, String str) {
        return GLES20.glGetUniformLocation(i10, str);
    }

    public int e(String str) {
        int g10 = g(str);
        GLES20.glEnableVertexAttribArray(g10);
        t.b();
        return g10;
    }

    public int j(String str) {
        return i(this.f39035a, str);
    }
}
