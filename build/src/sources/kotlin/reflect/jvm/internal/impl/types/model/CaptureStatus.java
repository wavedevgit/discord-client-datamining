package kotlin.reflect.jvm.internal.impl.types.model;

import kotlin.enums.EnumEntries;
import xr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CaptureStatus {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ CaptureStatus[] f34788d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34789e;
    public static final CaptureStatus FOR_SUBTYPING = new CaptureStatus("FOR_SUBTYPING", 0);
    public static final CaptureStatus FOR_INCORPORATION = new CaptureStatus("FOR_INCORPORATION", 1);
    public static final CaptureStatus FROM_EXPRESSION = new CaptureStatus("FROM_EXPRESSION", 2);

    static {
        CaptureStatus[] a10 = a();
        f34788d = a10;
        f34789e = a.a(a10);
    }

    private CaptureStatus(String str, int i10) {
    }

    private static final /* synthetic */ CaptureStatus[] a() {
        return new CaptureStatus[]{FOR_SUBTYPING, FOR_INCORPORATION, FROM_EXPRESSION};
    }

    public static CaptureStatus valueOf(String str) {
        return (CaptureStatus) Enum.valueOf(CaptureStatus.class, str);
    }

    public static CaptureStatus[] values() {
        return (CaptureStatus[]) f34788d.clone();
    }
}
