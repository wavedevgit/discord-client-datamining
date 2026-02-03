package io.sentry.android.replay.util;

import android.os.Build;
import jr.p;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    public static final l f29249a = new l();

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ a[] $VALUES;
        public static final a SOC_MODEL = new a("SOC_MODEL", 0);
        public static final a SOC_MANUFACTURER = new a("SOC_MANUFACTURER", 1);

        private static final /* synthetic */ a[] $values() {
            return new a[]{SOC_MODEL, SOC_MANUFACTURER};
        }

        static {
            a[] $values = $values();
            $VALUES = $values;
            $ENTRIES = qr.a.a($values);
        }

        private a(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) $VALUES.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f29250a;

        static {
            int[] iArr = new int[a.values().length];
            try {
                iArr[a.SOC_MODEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a.SOC_MANUFACTURER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f29250a = iArr;
        }
    }

    private l() {
    }

    public static /* synthetic */ String b(l lVar, a aVar, String str, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str = "";
        }
        return lVar.a(aVar, str);
    }

    public final String a(a key, String defaultValue) {
        String str;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(defaultValue, "defaultValue");
        if (Build.VERSION.SDK_INT >= 31) {
            int i10 = b.f29250a[key.ordinal()];
            if (i10 == 1) {
                str = Build.SOC_MODEL;
            } else if (i10 == 2) {
                str = Build.SOC_MANUFACTURER;
            } else {
                throw new p();
            }
            Intrinsics.checkNotNull(str);
            return str;
        }
        return defaultValue;
    }
}
