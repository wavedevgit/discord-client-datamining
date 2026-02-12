package com.appsflyer.internal;

import android.content.Intent;
import android.os.Parcelable;
import com.appsflyer.AFLogger;
import java.util.ConcurrentModificationException;
import kotlin.Function;
import kotlin.Result;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAFIntentWrapper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AFIntentWrapper.kt\ncom/appsflyer/internal/util/AFIntentWrapper\n+ 2 MultiCatch.kt\ncom/appsflyer/internal/util/MultiCatchKt\n*L\n1#1,111:1\n16#2,7:112\n*S KotlinDebug\n*F\n+ 1 AFIntentWrapper.kt\ncom/appsflyer/internal/util/AFIntentWrapper\n*L\n84#1:112,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFj1kSDK {
    @NotNull
    final Intent getCurrencyIso4217Code;

    public AFj1kSDK(@NotNull Intent intent) {
        Intrinsics.checkNotNullParameter(intent, "");
        this.getCurrencyIso4217Code = intent;
    }

    private final <T> T AFAdRevenueData(Function0<? extends T> function0, String str, T t10, boolean z10) {
        Object obj;
        synchronized (this.getCurrencyIso4217Code) {
            try {
                Result.a aVar = Result.f31985e;
                Object b10 = Result.b(function0.invoke());
                KClass[] kClassArr = {Reflection.getOrCreateKotlinClass(ConcurrentModificationException.class), Reflection.getOrCreateKotlinClass(ArrayIndexOutOfBoundsException.class)};
                Throwable e10 = Result.e(b10);
                if (e10 != null) {
                    if (kotlin.collections.i.N(kClassArr, Reflection.getOrCreateKotlinClass(e10.getClass()))) {
                        if (z10) {
                            obj = AFAdRevenueData(function0, str, t10, false);
                        } else {
                            AFLogger.afErrorLog(str, e10, false, false);
                            obj = t10;
                        }
                        b10 = Result.b(obj);
                    } else {
                        throw e10;
                    }
                }
                Throwable e11 = Result.e(b10);
                if (e11 == null) {
                    t10 = b10;
                } else {
                    AFLogger.afErrorLog(str, e11, false, false);
                }
            }
        }
        return t10;
    }

    public final <T extends Parcelable> T H_(@NotNull final String str) {
        Intrinsics.checkNotNullParameter(str, "");
        Function function = new Function0<T>() { // from class: com.appsflyer.internal.AFj1kSDK.4
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            /* JADX WARN: Incorrect return type in method signature: ()TT; */
            @Override // kotlin.jvm.functions.Function0
            /* renamed from: J_ */
            public final Parcelable invoke() {
                return AFj1kSDK.this.getCurrencyIso4217Code.getParcelableExtra(str);
            }
        };
        return (T) AFAdRevenueData(function, "Error while trying to read " + str + " extra from intent", null, true);
    }

    public final Intent I_(@NotNull final String str, final long j10) {
        Intrinsics.checkNotNullParameter(str, "");
        Function0<Intent> function0 = new Function0<Intent>() { // from class: com.appsflyer.internal.AFj1kSDK.2
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: K_ */
            public final Intent invoke() {
                return AFj1kSDK.this.getCurrencyIso4217Code.putExtra(str, j10);
            }
        };
        return (Intent) AFAdRevenueData(function0, "Error while trying to write " + str + " extra to intent", null, true);
    }

    public final String getCurrencyIso4217Code(@NotNull final String str) {
        Intrinsics.checkNotNullParameter(str, "");
        Function0<String> function0 = new Function0<String>() { // from class: com.appsflyer.internal.AFj1kSDK.3
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: getMediationNetwork */
            public final String invoke() {
                return AFj1kSDK.this.getCurrencyIso4217Code.getStringExtra(str);
            }
        };
        return (String) AFAdRevenueData(function0, "Error while trying to read " + str + " extra from intent", null, true);
    }

    public final boolean getRevenue(@NotNull final String str) {
        Intrinsics.checkNotNullParameter(str, "");
        Function0<Boolean> function0 = new Function0<Boolean>() { // from class: com.appsflyer.internal.AFj1kSDK.1
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: getMonetizationNetwork */
            public final Boolean invoke() {
                return Boolean.valueOf(AFj1kSDK.this.getCurrencyIso4217Code.hasExtra(str));
            }
        };
        Boolean bool = (Boolean) AFAdRevenueData(function0, "Error while trying to check presence of " + str + " extra from intent", Boolean.TRUE, true);
        if (bool == null) {
            return true;
        }
        return bool.booleanValue();
    }
}
