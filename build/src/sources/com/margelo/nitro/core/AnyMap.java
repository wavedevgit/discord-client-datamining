package com.margelo.nitro.core;

import androidx.annotation.Keep;
import com.facebook.jni.HybridData;
import dalvik.annotation.optimization.FastNative;
import java.util.HashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Keep
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0011\n\u0002\b\t\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0017\b\u0007\u0018\u0000 T2\u00020\u0001:\u0001UB\t\b\u0016¢\u0006\u0004\b\u0002\u0010\u0003B\u0011\b\u0016\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0002\u0010\u0006B\u0011\b\u0012\u0012\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\u0002\u0010\tJ.\u0010\u0010\u001a\u00020\u000f2\u0014\u0010\f\u001a\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u00010\n2\u0006\u0010\u000e\u001a\u00020\rH\u0082 ¢\u0006\u0004\b\u0010\u0010\u0011J\u0018\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0012\u001a\u00020\u000bH\u0082 ¢\u0006\u0004\b\u0014\u0010\u0015J \u0010\u0017\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\u0013H\u0082 ¢\u0006\u0004\b\u0017\u0010\u0018J\u0010\u0010\u0019\u001a\u00020\u0007H\u0082 ¢\u0006\u0004\b\u0019\u0010\u001aJ\u0018\u0010\u0019\u001a\u00020\u00072\u0006\u0010\u0005\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u0019\u0010\u001bJ0\u0010\u001e\u001a\"\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u00010\u001cj\u0010\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u0001`\u001dH\u0086 ¢\u0006\u0004\b\u001e\u0010\u001fJ\u001f\u0010 \u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001¢\u0006\u0004\b \u0010!J\u0017\u0010\"\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u0012\u001a\u00020\u000b¢\u0006\u0004\b\"\u0010#J\u0018\u0010$\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b$\u0010%J\u0018\u0010&\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b&\u0010'J\u0010\u0010(\u001a\u00020\u000fH\u0087 ¢\u0006\u0004\b(\u0010\u0003J\u0016\u0010*\u001a\b\u0012\u0004\u0012\u00020\u000b0)H\u0086 ¢\u0006\u0004\b*\u0010+J\u0018\u0010,\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b,\u0010%J\u0018\u0010-\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b-\u0010%J\u0018\u0010.\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b.\u0010%J\u0018\u0010/\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b/\u0010%J\u0018\u00100\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b0\u0010%J\u0018\u00101\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b1\u0010%J\u0018\u00102\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b2\u0010%J\u0018\u00104\u001a\u0002032\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b4\u00105J\u0018\u00106\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b6\u0010%J\u0018\u00108\u001a\u0002072\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\b8\u00109J\u0018\u0010:\u001a\u00020\u000b2\u0006\u0010\u0012\u001a\u00020\u000bH\u0086 ¢\u0006\u0004\b:\u0010;J\"\u0010=\u001a\f\u0012\u0004\u0012\u00020\u00130)j\u0002`<2\u0006\u0010\u0012\u001a\u00020\u000bH\u0086 ¢\u0006\u0004\b=\u0010>J(\u0010@\u001a\u0012\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00130\nj\u0002`?2\u0006\u0010\u0012\u001a\u00020\u000bH\u0086 ¢\u0006\u0004\b@\u0010AJ\u0018\u0010B\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\bB\u0010'J \u0010C\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u000203H\u0087 ¢\u0006\u0004\bC\u0010DJ \u0010E\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\rH\u0087 ¢\u0006\u0004\bE\u0010FJ \u0010G\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u000207H\u0087 ¢\u0006\u0004\bG\u0010HJ \u0010I\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\u000bH\u0087 ¢\u0006\u0004\bI\u0010JJ*\u0010K\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0010\u0010\u0016\u001a\f\u0012\u0004\u0012\u00020\u00130)j\u0002`<H\u0086 ¢\u0006\u0004\bK\u0010LJ0\u0010M\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u000b2\u0016\u0010\u0016\u001a\u0012\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00130\nj\u0002`?H\u0086 ¢\u0006\u0004\bM\u0010NJ\u0018\u0010P\u001a\u00020\u000f2\u0006\u0010O\u001a\u00020\u0000H\u0086 ¢\u0006\u0004\bP\u0010QR\u0014\u0010R\u001a\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bR\u0010S¨\u0006V"}, d2 = {"Lcom/margelo/nitro/core/AnyMap;", "", "<init>", "()V", "", "preallocatedSize", "(I)V", "Lcom/facebook/jni/HybridData;", "hybridData", "(Lcom/facebook/jni/HybridData;)V", "", "", "map", "", "ignoreIncompatible", "", "fromHashMap", "(Ljava/util/Map;Z)V", "key", "Lcom/margelo/nitro/core/AnyValue;", "getAnyValue", "(Ljava/lang/String;)Lcom/margelo/nitro/core/AnyValue;", "value", "setAnyValue", "(Ljava/lang/String;Lcom/margelo/nitro/core/AnyValue;)V", "initHybrid", "()Lcom/facebook/jni/HybridData;", "(I)Lcom/facebook/jni/HybridData;", "Ljava/util/HashMap;", "Lkotlin/collections/HashMap;", "toHashMap", "()Ljava/util/HashMap;", "setAny", "(Ljava/lang/String;Ljava/lang/Object;)V", "getAny", "(Ljava/lang/String;)Ljava/lang/Object;", "contains", "(Ljava/lang/String;)Z", "remove", "(Ljava/lang/String;)V", "clear", "", "getAllKeys", "()[Ljava/lang/String;", "isNull", "isDouble", "isBoolean", "isBigInt", "isString", "isArray", "isObject", "", "getDouble", "(Ljava/lang/String;)D", "getBoolean", "", "getBigInt", "(Ljava/lang/String;)J", "getString", "(Ljava/lang/String;)Ljava/lang/String;", "Lcom/margelo/nitro/core/AnyArray;", "getAnyArray", "(Ljava/lang/String;)[Lcom/margelo/nitro/core/AnyValue;", "Lcom/margelo/nitro/core/AnyObject;", "getAnyObject", "(Ljava/lang/String;)Ljava/util/Map;", "setNull", "setDouble", "(Ljava/lang/String;D)V", "setBoolean", "(Ljava/lang/String;Z)V", "setBigInt", "(Ljava/lang/String;J)V", "setString", "(Ljava/lang/String;Ljava/lang/String;)V", "setAnyArray", "(Ljava/lang/String;[Lcom/margelo/nitro/core/AnyValue;)V", "setAnyObject", "(Ljava/lang/String;Ljava/util/Map;)V", "other", "merge", "(Lcom/margelo/nitro/core/AnyMap;)V", "mHybridData", "Lcom/facebook/jni/HybridData;", "Companion", "a", "react-native-nitro-modules_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AnyMap {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    private final HybridData mHybridData;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public AnyMap() {
        this.mHybridData = initHybrid();
    }

    private final native void fromHashMap(Map<String, ? extends Object> map, boolean z10);

    @NotNull
    public static final native AnyMap fromMap(@NotNull Map<String, ? extends Object> map, boolean z10);

    private final native AnyValue getAnyValue(String str);

    private final native HybridData initHybrid();

    private final native HybridData initHybrid(int i10);

    private final native void setAnyValue(String str, AnyValue anyValue);

    @FastNative
    public final native void clear();

    @FastNative
    public final native boolean contains(@NotNull String str);

    @NotNull
    public final native String[] getAllKeys();

    public final Object getAny(@NotNull String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return getAnyValue(key).toAny();
    }

    @NotNull
    public final native AnyValue[] getAnyArray(@NotNull String str);

    @NotNull
    public final native Map<String, AnyValue> getAnyObject(@NotNull String str);

    @FastNative
    public final native long getBigInt(@NotNull String str);

    @FastNative
    public final native boolean getBoolean(@NotNull String str);

    @FastNative
    public final native double getDouble(@NotNull String str);

    @NotNull
    public final native String getString(@NotNull String str);

    @FastNative
    public final native boolean isArray(@NotNull String str);

    @FastNative
    public final native boolean isBigInt(@NotNull String str);

    @FastNative
    public final native boolean isBoolean(@NotNull String str);

    @FastNative
    public final native boolean isDouble(@NotNull String str);

    @FastNative
    public final native boolean isNull(@NotNull String str);

    @FastNative
    public final native boolean isObject(@NotNull String str);

    @FastNative
    public final native boolean isString(@NotNull String str);

    public final native void merge(@NotNull AnyMap anyMap);

    @FastNative
    public final native void remove(@NotNull String str);

    public final void setAny(@NotNull String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        setAnyValue(key, AnyValue.Companion.a(obj));
    }

    public final native void setAnyArray(@NotNull String str, @NotNull AnyValue[] anyValueArr);

    public final native void setAnyObject(@NotNull String str, @NotNull Map<String, AnyValue> map);

    @FastNative
    public final native void setBigInt(@NotNull String str, long j10);

    @FastNative
    public final native void setBoolean(@NotNull String str, boolean z10);

    @FastNative
    public final native void setDouble(@NotNull String str, double d10);

    @FastNative
    public final native void setNull(@NotNull String str);

    @FastNative
    public final native void setString(@NotNull String str, @NotNull String str2);

    @NotNull
    public final native HashMap<String, Object> toHashMap();

    public AnyMap(int i10) {
        this.mHybridData = initHybrid(i10);
    }

    private AnyMap(HybridData hybridData) {
        this.mHybridData = hybridData;
    }
}
