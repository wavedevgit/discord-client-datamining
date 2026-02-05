package com.discord.sounds;

import android.annotation.SuppressLint;
import android.content.Context;
import android.webkit.URLUtil;
import com.discord.logging.Log;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.sounds.utils.SoundExtensionsKt;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\b\u001a\u00020\tH\u0016J*\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\t2\b\u0010\r\u001a\u0004\u0018\u00010\t2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0007J\u0010\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000fH\u0007J\u0010\u0010\u0013\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000fH\u0007J\u0010\u0010\u0014\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000fH\u0007J\u0010\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000fH\u0007J\u0018\u0010\u0016\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u0018H\u0007J\u0018\u0010\u0019\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u000fH\u0007J\u0018\u0010\u001a\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u000fH\u0007J\u0018\u0010\u001b\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u000fH\u0007J\u001e\u0010\u001c\u001a\u00020\u000f*\u00020\u001d2\u0006\u0010\f\u001a\u00020\t2\b\b\u0002\u0010\u001e\u001a\u00020\tH\u0003R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001f"}, d2 = {"Lcom/discord/sounds/SoundManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "soundManager", "Lcom/discord/sounds/SoundManager;", "getName", "", "prepare", "", "fileName", "usage", "key", "", "callback", "Lcom/facebook/react/bridge/Callback;", "play", "pause", "stop", "release", "setVolume", "value", "", "setPan", "setNumberOfLoops", "setCurrentTime", "resolveRawResId", "Landroid/content/Context;", "type", "sounds_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSoundManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SoundManagerModule.kt\ncom/discord/sounds/SoundManagerModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,146:1\n1#2:147\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SoundManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    private final SoundManager soundManager;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SoundManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.soundManager = new SoundManager(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prepare$lambda$0(Callback callback, int i10) {
        callback.invoke(null, NativeMapExtensionsKt.nativeMapOf(v.a("duration", Integer.valueOf(i10)), v.a("numberOfChannels", -1)));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prepare$lambda$1(Callback callback, int i10) {
        callback.invoke(null, NativeMapExtensionsKt.nativeMapOf(v.a("duration", Integer.valueOf(i10)), v.a("numberOfChannels", -1)));
        return Unit.f31988a;
    }

    @SuppressLint({"DiscouragedApi"})
    private final int resolveRawResId(Context context, String str, String str2) {
        int identifier = context.getResources().getIdentifier(str, str2, context.getPackageName());
        if (identifier > 0) {
            return identifier;
        }
        String packageName = context.getPackageName();
        throw new IllegalArgumentException(("Failed requirement, resId should not be zero - fileName: " + str + ", type: " + str2 + ", packageName: " + packageName).toString());
    }

    static /* synthetic */ int resolveRawResId$default(SoundManagerModule soundManagerModule, Context context, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = "raw";
        }
        return soundManagerModule.resolveRawResId(context, str, str2);
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "DCDSoundManager";
    }

    @ReactMethod
    public final void pause(int i10) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Pause " + i10, (Throwable) null, 4, (Object) null);
        this.soundManager.pause(i10);
    }

    @ReactMethod
    public final void play(int i10) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Play " + i10, (Throwable) null, 4, (Object) null);
        this.soundManager.play(i10);
    }

    @ReactMethod
    public final void prepare(@NotNull String fileName, String str, int i10, @NotNull final Callback callback) {
        Integer valueOf;
        String str2;
        Intrinsics.checkNotNullParameter(fileName, "fileName");
        Intrinsics.checkNotNullParameter(callback, "callback");
        Log.i$default(Log.INSTANCE, SoundManager.Companion.getLogTag(), "Prepare " + fileName + " with " + i10 + ".", (Throwable) null, 4, (Object) null);
        int i11 = 5;
        if (str != null) {
            switch (str.hashCode()) {
                case 103772132:
                    if (str.equals("media")) {
                        i11 = 1;
                        break;
                    }
                    break;
                case 112386354:
                    if (str.equals("voice")) {
                        i11 = 2;
                        break;
                    }
                    break;
                case 301372961:
                    if (str.equals("ring_tone")) {
                        i11 = 6;
                        break;
                    }
                    break;
                case 595233003:
                    str.equals("notification");
                    break;
            }
        }
        int i12 = i11;
        if (URLUtil.isValidUrl(fileName)) {
            String remoteSoundFilename = SoundExtensionsKt.getRemoteSoundFilename(fileName);
            ReactApplicationContext reactApplicationContext = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
            File file = new File(SoundExtensionsKt.getSoundsCacheDirectory(reactApplicationContext), remoteSoundFilename);
            if (!file.exists()) {
                ReactApplicationContext reactApplicationContext2 = getReactApplicationContext();
                Intrinsics.checkNotNullExpressionValue(reactApplicationContext2, "getReactApplicationContext(...)");
                SoundExtensionsKt.fetchSound(reactApplicationContext2, fileName, this.soundManager, i10, i12, new Function1() { // from class: com.discord.sounds.a
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit prepare$lambda$0;
                        prepare$lambda$0 = SoundManagerModule.prepare$lambda$0(Callback.this, ((Integer) obj).intValue());
                        return prepare$lambda$0;
                    }
                });
                return;
            }
            file.setLastModified(System.currentTimeMillis());
            str2 = file.getAbsolutePath();
            valueOf = null;
        } else {
            ReactApplicationContext reactApplicationContext3 = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext3, "getReactApplicationContext(...)");
            valueOf = Integer.valueOf(resolveRawResId$default(this, reactApplicationContext3, fileName, null, 2, null));
            str2 = null;
        }
        this.soundManager.prepare(i10, i12, valueOf, str2, new Function1() { // from class: com.discord.sounds.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit prepare$lambda$1;
                prepare$lambda$1 = SoundManagerModule.prepare$lambda$1(Callback.this, ((Integer) obj).intValue());
                return prepare$lambda$1;
            }
        });
    }

    @ReactMethod
    public final void release(int i10) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Release " + i10, (Throwable) null, 4, (Object) null);
        this.soundManager.release(i10);
    }

    @ReactMethod
    public final void setCurrentTime(int i10, int i11) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Set current time for " + i10 + " with value " + i11, (Throwable) null, 4, (Object) null);
        this.soundManager.setCurrentTime(i10, i11);
    }

    @ReactMethod
    public final void setNumberOfLoops(int i10, int i11) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Set number of loops for " + i10 + " with value " + i11, (Throwable) null, 4, (Object) null);
        this.soundManager.setNumberOfLoops(i10, i11);
    }

    @ReactMethod
    public final void setPan(int i10, int i11) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Set pan for " + i10 + " with value " + i11, (Throwable) null, 4, (Object) null);
        this.soundManager.setPan(i10, (float) i11);
    }

    @ReactMethod
    public final void setVolume(int i10, float f10) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Set volume for " + i10 + " with value " + f10, (Throwable) null, 4, (Object) null);
        this.soundManager.setVolume(i10, f10);
    }

    @ReactMethod
    public final void stop(int i10) {
        Log log = Log.INSTANCE;
        String logTag = SoundManager.Companion.getLogTag();
        Log.i$default(log, logTag, "Stop " + i10, (Throwable) null, 4, (Object) null);
        this.soundManager.stop(i10);
    }
}
