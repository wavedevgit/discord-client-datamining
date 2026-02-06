package net.time4j.tz.model;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i {

    /* renamed from: d  reason: collision with root package name */
    public static final i f39615d;

    /* renamed from: e  reason: collision with root package name */
    public static final i f39616e;

    /* renamed from: i  reason: collision with root package name */
    public static final i f39617i;

    /* renamed from: o  reason: collision with root package name */
    static final i[] f39618o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ i[] f39619p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends i {
        a(String str, int i10) {
            super(str, i10, null);
        }
    }

    static {
        a aVar = new a("UTC_TIME", 0);
        f39615d = aVar;
        i iVar = new i("STANDARD_TIME", 1) { // from class: net.time4j.tz.model.i.b
        };
        f39616e = iVar;
        i iVar2 = new i("WALL_TIME", 2) { // from class: net.time4j.tz.model.i.c
        };
        f39617i = iVar2;
        f39619p = new i[]{aVar, iVar, iVar2};
        f39618o = values();
    }

    private i(String str, int i10) {
    }

    public static i valueOf(String str) {
        return (i) Enum.valueOf(i.class, str);
    }

    public static i[] values() {
        return (i[]) f39619p.clone();
    }

    /* synthetic */ i(String str, int i10, a aVar) {
        this(str, i10);
    }
}
