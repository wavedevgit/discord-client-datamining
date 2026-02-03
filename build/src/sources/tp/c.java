package tp;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f50209d = new c("ROUGH", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c f50210e = new c("PRECISE", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ c[] f50211i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f50212o;

    static {
        c[] a10 = a();
        f50211i = a10;
        f50212o = sr.a.a(a10);
    }

    private c(String str, int i10) {
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f50209d, f50210e};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f50211i.clone();
    }
}
