package oe;

import android.opengl.GLES20;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final int f40686a;

    /* renamed from: b  reason: collision with root package name */
    private final a[] f40687b;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f40688c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f40689d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f40690e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f40691a;

        /* renamed from: b  reason: collision with root package name */
        private final int f40692b;

        /* renamed from: c  reason: collision with root package name */
        private final int f40693c;

        private a(String str, int i10, int i11) {
            this.f40691a = str;
            this.f40692b = i10;
            this.f40693c = i11;
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
        public final String f40694a;

        /* renamed from: b  reason: collision with root package name */
        private final int f40695b;

        /* renamed from: c  reason: collision with root package name */
        private final int f40696c;

        /* renamed from: d  reason: collision with root package name */
        private final float[] f40697d = new float[16];

        private b(String str, int i10, int i11) {
            this.f40694a = str;
            this.f40695b = i10;
            this.f40696c = i11;
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
        this.f40686a = glCreateProgram;
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
        this.f40689d = new HashMap();
        int[] iArr2 = new int[1];
        GLES20.glGetProgramiv(glCreateProgram, 35721, iArr2, 0);
        this.f40687b = new a[iArr2[0]];
        for (int i10 = 0; i10 < iArr2[0]; i10++) {
            a a10 = a.a(this.f40686a, i10);
            this.f40687b[i10] = a10;
            this.f40689d.put(a10.f40691a, a10);
        }
        this.f40690e = new HashMap();
        int[] iArr3 = new int[1];
        GLES20.glGetProgramiv(this.f40686a, 35718, iArr3, 0);
        this.f40688c = new b[iArr3[0]];
        for (int i11 = 0; i11 < iArr3[0]; i11++) {
            b a11 = b.a(this.f40686a, i11);
            this.f40688c[i11] = a11;
            this.f40690e.put(a11.f40694a, a11);
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
        return f(this.f40686a, str);
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
        return i(this.f40686a, str);
    }
}
