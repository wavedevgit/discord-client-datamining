package com.tencent.mmkv;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;
import dalvik.annotation.optimization.FastNative;
import java.util.Arrays;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import rn.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MMKV implements SharedPreferences, SharedPreferences.Editor {

    /* renamed from: a  reason: collision with root package name */
    private static final EnumMap f18424a;

    /* renamed from: b  reason: collision with root package name */
    private static final EnumMap f18425b;

    /* renamed from: c  reason: collision with root package name */
    private static final rn.b[] f18426c;

    /* renamed from: d  reason: collision with root package name */
    private static final Set f18427d;

    /* renamed from: e  reason: collision with root package name */
    private static String f18428e;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f18429f;

    /* renamed from: g  reason: collision with root package name */
    private static final HashMap f18430g;

    /* renamed from: h  reason: collision with root package name */
    private static boolean f18431h;
    private final long nativeHandle;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18432a;

        static {
            int[] iArr = new int[rn.b.values().length];
            f18432a = iArr;
            try {
                iArr[rn.b.LevelDebug.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18432a[rn.b.LevelWarning.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f18432a[rn.b.LevelError.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f18432a[rn.b.LevelNone.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f18432a[rn.b.LevelInfo.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(String str);
    }

    static {
        EnumMap enumMap = new EnumMap(c.class);
        f18424a = enumMap;
        enumMap.put((EnumMap) c.OnErrorDiscard, (c) 0);
        enumMap.put((EnumMap) c.OnErrorRecover, (c) 1);
        EnumMap enumMap2 = new EnumMap(rn.b.class);
        f18425b = enumMap2;
        rn.b bVar = rn.b.LevelDebug;
        enumMap2.put((EnumMap) bVar, (rn.b) 0);
        rn.b bVar2 = rn.b.LevelInfo;
        enumMap2.put((EnumMap) bVar2, (rn.b) 1);
        rn.b bVar3 = rn.b.LevelWarning;
        enumMap2.put((EnumMap) bVar3, (rn.b) 2);
        rn.b bVar4 = rn.b.LevelError;
        enumMap2.put((EnumMap) bVar4, (rn.b) 3);
        rn.b bVar5 = rn.b.LevelNone;
        enumMap2.put((EnumMap) bVar5, (rn.b) 4);
        f18426c = new rn.b[]{bVar, bVar2, bVar3, bVar4, bVar5};
        f18427d = new HashSet();
        f18428e = null;
        f18429f = true;
        f18430g = new HashMap();
        f18431h = false;
    }

    private MMKV(long j10) {
        this.nativeHandle = j10;
    }

    private static MMKV a(long j10, String str, int i10) {
        String str2;
        if (j10 != 0) {
            if (!f18429f) {
                return new MMKV(j10);
            }
            Set set = f18427d;
            synchronized (set) {
                try {
                    if (!set.contains(Long.valueOf(j10))) {
                        if (!checkProcessMode(j10)) {
                            if (i10 == 1) {
                                str2 = "Opening a multi-process MMKV instance [" + str + "] with SINGLE_PROCESS_MODE!";
                            } else {
                                str2 = ("Opening an MMKV instance [" + str + "] with MULTI_PROCESS_MODE, ") + "while it's already been opened with SINGLE_PROCESS_MODE by someone somewhere else!";
                            }
                            throw new IllegalArgumentException(str2);
                        }
                        set.add(Long.valueOf(j10));
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return new MMKV(j10);
        }
        throw new RuntimeException("Fail to create an MMKV instance [" + str + "] in JNI");
    }

    private native long actualSize(long j10);

    private native String[] allKeys(long j10, boolean z10);

    public static native long backupAllToDirectory(String str);

    public static native boolean backupOneToDirectory(String str, String str2, String str3);

    private static native boolean checkProcessMode(long j10);

    private native boolean containsKey(long j10, String str);

    private native long count(long j10, boolean z10);

    private static native long createNB(int i10);

    private native boolean decodeBool(long j10, String str, boolean z10);

    private native byte[] decodeBytes(long j10, String str);

    private native double decodeDouble(long j10, String str, double d10);

    private native float decodeFloat(long j10, String str, float f10);

    private native int decodeInt(long j10, String str, int i10);

    private native long decodeLong(long j10, String str, long j11);

    private native String decodeString(long j10, String str, String str2);

    private native String[] decodeStringSet(long j10, String str);

    private static native void destroyNB(long j10, int i10);

    private native boolean encodeBool(long j10, String str, boolean z10);

    private native boolean encodeBool_2(long j10, String str, boolean z10, int i10);

    private native boolean encodeBytes(long j10, String str, byte[] bArr);

    private native boolean encodeBytes_2(long j10, String str, byte[] bArr, int i10);

    private native boolean encodeDouble(long j10, String str, double d10);

    private native boolean encodeDouble_2(long j10, String str, double d10, int i10);

    private native boolean encodeFloat(long j10, String str, float f10);

    private native boolean encodeFloat_2(long j10, String str, float f10, int i10);

    private native boolean encodeInt(long j10, String str, int i10);

    private native boolean encodeInt_2(long j10, String str, int i10, int i11);

    private native boolean encodeLong(long j10, String str, long j11);

    private native boolean encodeLong_2(long j10, String str, long j11, int i10);

    private native boolean encodeSet(long j10, String str, String[] strArr);

    private native boolean encodeSet_2(long j10, String str, String[] strArr, int i10);

    private native boolean encodeString(long j10, String str, String str2);

    private native boolean encodeString_2(long j10, String str, String str2, int i10);

    public static MMKV f() {
        if (f18428e != null) {
            return a(getDefaultMMKV(1, null), "DefaultMMKV", 1);
        }
        throw new IllegalStateException("You should Call MMKV.initialize() first.");
    }

    public static void g() {
        synchronized (f18427d) {
            f18429f = false;
        }
        Log.i("MMKV", "Disable checkProcessMode()");
    }

    private static native long getDefaultMMKV(int i10, String str);

    private static native long getMMKVWithAshmemFD(String str, int i10, int i11, String str2);

    private static native long getMMKVWithID(String str, int i10, String str2, String str3, long j10);

    private static native long getMMKVWithIDAndSize(String str, int i10, int i11, String str2);

    private static String h(String str, String str2, b bVar, rn.b bVar2, boolean z10) {
        if (bVar != null) {
            bVar.a("mmkv");
        } else {
            System.loadLibrary("mmkv");
        }
        jniInitialize(str, str2, n(bVar2), z10);
        f18428e = str;
        return str;
    }

    public static void i() {
        synchronized (f18427d) {
            f18429f = true;
        }
        Log.i("MMKV", "Enable checkProcessMode()");
    }

    private native boolean isCompareBeforeSetEnabled();

    @FastNative
    private native boolean isEncryptionEnabled();

    @FastNative
    private native boolean isExpirationEnabled();

    public static native boolean isFileValid(String str, String str2);

    private static native void jniInitialize(String str, String str2, int i10, boolean z10);

    public static String l(Context context) {
        return m(context, context.getFilesDir().getAbsolutePath() + "/mmkv", null, rn.b.LevelInfo, null);
    }

    public static String m(Context context, String str, b bVar, rn.b bVar2, rn.a aVar) {
        if ((context.getApplicationInfo().flags & 2) == 0) {
            g();
        } else {
            i();
        }
        return h(str, context.getCacheDir().getAbsolutePath(), bVar, bVar2, f18431h);
    }

    private static void mmkvLogImp(int i10, String str, int i11, String str2, String str3) {
        int i12 = a.f18432a[f18426c[i10].ordinal()];
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 3) {
                    if (i12 != 5) {
                        return;
                    }
                    Log.i("MMKV", str3);
                    return;
                }
                Log.e("MMKV", str3);
                return;
            }
            Log.w("MMKV", str3);
            return;
        }
        Log.d("MMKV", str3);
    }

    private static int n(rn.b bVar) {
        int i10 = a.f18432a[bVar.ordinal()];
        if (i10 != 1) {
            int i11 = 2;
            if (i10 != 2) {
                i11 = 3;
                if (i10 != 3) {
                    i11 = 4;
                    if (i10 != 4) {
                        return 1;
                    }
                }
            }
            return i11;
        }
        return 0;
    }

    @FastNative
    private native void nativeEnableCompareBeforeSet();

    private static void onContentChangedByOuterProcess(String str) {
    }

    public static native void onExit();

    private static int onMMKVCRCCheckFail(String str) {
        c cVar = c.OnErrorDiscard;
        rn.b bVar = rn.b.LevelInfo;
        p(bVar, "Recover strategic for " + str + " is " + cVar);
        Integer num = (Integer) f18424a.get(cVar);
        if (num == null) {
            return 0;
        }
        return num.intValue();
    }

    private static int onMMKVFileLengthError(String str) {
        c cVar = c.OnErrorDiscard;
        rn.b bVar = rn.b.LevelInfo;
        p(bVar, "Recover strategic for " + str + " is " + cVar);
        Integer num = (Integer) f18424a.get(cVar);
        if (num == null) {
            return 0;
        }
        return num.intValue();
    }

    private static void p(rn.b bVar, String str) {
        int intValue;
        StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
        StackTraceElement stackTraceElement = stackTrace[stackTrace.length - 1];
        Integer num = (Integer) f18425b.get(bVar);
        if (num == null) {
            intValue = 0;
        } else {
            intValue = num.intValue();
        }
        mmkvLogImp(intValue, stackTraceElement.getFileName(), stackTraceElement.getLineNumber(), stackTraceElement.getMethodName(), str);
    }

    public static native int pageSize();

    public static native boolean removeStorage(String str, String str2);

    private native void removeValueForKey(long j10, String str);

    public static native long restoreAllFromDirectory(String str);

    public static native boolean restoreOneMMKVFromDirectory(String str, String str2, String str3);

    private static native void setCallbackHandler(boolean z10, boolean z11);

    private static native void setLogLevel(int i10);

    private static native void setWantsContentChangeNotify(boolean z10);

    private native void sync(boolean z10);

    private native long totalSize(long j10);

    private native int valueSize(long j10, String str, boolean z10);

    public static native String version();

    private native int writeValueToNB(long j10, String str, long j11, int i10);

    @Override // android.content.SharedPreferences.Editor
    public void apply() {
        sync(false);
    }

    public native int ashmemFD();

    public native int ashmemMetaFD();

    public boolean b(String str) {
        return containsKey(this.nativeHandle, str);
    }

    public String c(String str, String str2) {
        return decodeString(this.nativeHandle, str, str2);
    }

    public native void checkContentChangedByOuterProcess();

    public native void checkReSetCryptKey(String str);

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor clear() {
        clearAll();
        return this;
    }

    public native void clearAll();

    public native void clearAllWithKeepingSpace();

    public native void clearMemoryCache();

    public native void close();

    @Override // android.content.SharedPreferences.Editor
    public boolean commit() {
        sync(true);
        return true;
    }

    @Override // android.content.SharedPreferences
    public boolean contains(String str) {
        return b(str);
    }

    public native String cryptKey();

    public Set d(String str, Set set) {
        return e(str, set, HashSet.class);
    }

    public native boolean disableAutoKeyExpire();

    public native void disableCompareBeforeSet();

    public Set e(String str, Set set, Class cls) {
        String[] decodeStringSet = decodeStringSet(this.nativeHandle, str);
        if (decodeStringSet != null) {
            try {
                Set set2 = (Set) cls.newInstance();
                set2.addAll(Arrays.asList(decodeStringSet));
                return set2;
            } catch (IllegalAccessException | InstantiationException unused) {
                return set;
            }
        }
        return set;
    }

    @Override // android.content.SharedPreferences
    public SharedPreferences.Editor edit() {
        return this;
    }

    public native boolean enableAutoKeyExpire(int i10);

    @Override // android.content.SharedPreferences
    public Map getAll() {
        throw new UnsupportedOperationException("Intentionally Not Supported. Use allKeys() instead, getAll() not implement because type-erasure inside mmkv");
    }

    @Override // android.content.SharedPreferences
    public boolean getBoolean(String str, boolean z10) {
        return decodeBool(this.nativeHandle, str, z10);
    }

    @Override // android.content.SharedPreferences
    public float getFloat(String str, float f10) {
        return decodeFloat(this.nativeHandle, str, f10);
    }

    @Override // android.content.SharedPreferences
    public int getInt(String str, int i10) {
        return decodeInt(this.nativeHandle, str, i10);
    }

    @Override // android.content.SharedPreferences
    public long getLong(String str, long j10) {
        return decodeLong(this.nativeHandle, str, j10);
    }

    @Override // android.content.SharedPreferences
    public String getString(String str, String str2) {
        return decodeString(this.nativeHandle, str, str2);
    }

    @Override // android.content.SharedPreferences
    public Set getStringSet(String str, Set set) {
        return d(str, set);
    }

    public boolean j(String str, String str2) {
        return encodeString(this.nativeHandle, str, str2);
    }

    public boolean k(String str, Set set) {
        String[] strArr;
        long j10 = this.nativeHandle;
        if (set == null) {
            strArr = null;
        } else {
            strArr = (String[]) set.toArray(new String[0]);
        }
        return encodeSet(j10, str, strArr);
    }

    public native void lock();

    public native String mmapID();

    public void o(String str) {
        removeValueForKey(this.nativeHandle, str);
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor putBoolean(String str, boolean z10) {
        encodeBool(this.nativeHandle, str, z10);
        return this;
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor putFloat(String str, float f10) {
        encodeFloat(this.nativeHandle, str, f10);
        return this;
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor putInt(String str, int i10) {
        encodeInt(this.nativeHandle, str, i10);
        return this;
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor putLong(String str, long j10) {
        encodeLong(this.nativeHandle, str, j10);
        return this;
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor putString(String str, String str2) {
        encodeString(this.nativeHandle, str, str2);
        return this;
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor putStringSet(String str, Set set) {
        k(str, set);
        return this;
    }

    public native boolean reKey(String str);

    @Override // android.content.SharedPreferences
    public void registerOnSharedPreferenceChangeListener(SharedPreferences.OnSharedPreferenceChangeListener onSharedPreferenceChangeListener) {
        throw new UnsupportedOperationException("Intentionally Not implement in MMKV");
    }

    @Override // android.content.SharedPreferences.Editor
    public SharedPreferences.Editor remove(String str) {
        o(str);
        return this;
    }

    public native void removeValuesForKeys(String[] strArr);

    public native void trim();

    public native boolean tryLock();

    public native void unlock();

    @Override // android.content.SharedPreferences
    public void unregisterOnSharedPreferenceChangeListener(SharedPreferences.OnSharedPreferenceChangeListener onSharedPreferenceChangeListener) {
        throw new UnsupportedOperationException("Intentionally Not implement in MMKV");
    }
}
