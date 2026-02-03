package eo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final c f21687d = new c("IdTypeRejected", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final c f21688e = new c("UnableToClassify", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ c[] f21689i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f21690o;

    static {
        c[] a10 = a();
        f21689i = a10;
        f21690o = sr.a.a(a10);
    }

    private c(String str, int i10) {
    }

    private static final /* synthetic */ c[] a() {
        return new c[]{f21687d, f21688e};
    }

    public static c valueOf(String str) {
        return (c) Enum.valueOf(c.class, str);
    }

    public static c[] values() {
        return (c[]) f21689i.clone();
    }
}
