package sl;

import android.opengl.GLES20;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final String f49765a = "f";

    public static void a(String str) {
        int glGetError = GLES20.glGetError();
        if (glGetError == 0) {
            return;
        }
        String str2 = f49765a;
        Log.e(str2, str + ": glError " + glGetError);
        throw new RuntimeException(str + ": glError " + glGetError);
    }

    public static int b(int i10, int i11) {
        int glCreateProgram = GLES20.glCreateProgram();
        a("glCreateProgram");
        if (glCreateProgram == 0) {
            Log.e(f49765a, "Could not create glProgram");
        }
        GLES20.glAttachShader(glCreateProgram, i10);
        a("glAttachShader");
        GLES20.glAttachShader(glCreateProgram, i11);
        a("glAttachShader");
        GLES20.glLinkProgram(glCreateProgram);
        int[] iArr = new int[1];
        GLES20.glGetProgramiv(glCreateProgram, 35714, iArr, 0);
        if (iArr[0] != 1) {
            String str = f49765a;
            Log.e(str, "Could not link glProgram: ");
            Log.e(str, GLES20.glGetProgramInfoLog(glCreateProgram));
            GLES20.glDeleteProgram(glCreateProgram);
            return 0;
        }
        return glCreateProgram;
    }

    public static int c(int i10, String str) {
        int glCreateShader = GLES20.glCreateShader(i10);
        a("glCreateShader type=" + i10);
        GLES20.glShaderSource(glCreateShader, str);
        GLES20.glCompileShader(glCreateShader);
        int[] iArr = new int[1];
        GLES20.glGetShaderiv(glCreateShader, 35713, iArr, 0);
        if (iArr[0] == 0) {
            String str2 = f49765a;
            Log.e(str2, "Could not compile shader " + i10 + ":");
            StringBuilder sb2 = new StringBuilder();
            sb2.append(" ");
            sb2.append(GLES20.glGetShaderInfoLog(glCreateShader));
            Log.e(str2, sb2.toString());
            GLES20.glDeleteShader(glCreateShader);
            return 0;
        }
        return glCreateShader;
    }
}
