package kotlin.io;

import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import pr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lkotlin/io/FileWalkDirection;", "", "<init>", "(Ljava/lang/String;I)V", "d", "e", "kotlin-stdlib"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FileWalkDirection {

    /* renamed from: d  reason: collision with root package name */
    public static final FileWalkDirection f33364d = new FileWalkDirection("TOP_DOWN", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final FileWalkDirection f33365e = new FileWalkDirection("BOTTOM_UP", 1);

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ FileWalkDirection[] f33366i;

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33367o;

    static {
        FileWalkDirection[] a10 = a();
        f33366i = a10;
        f33367o = a.a(a10);
    }

    private FileWalkDirection(String str, int i10) {
    }

    private static final /* synthetic */ FileWalkDirection[] a() {
        return new FileWalkDirection[]{f33364d, f33365e};
    }

    public static FileWalkDirection valueOf(String str) {
        return (FileWalkDirection) Enum.valueOf(FileWalkDirection.class, str);
    }

    public static FileWalkDirection[] values() {
        return (FileWalkDirection[]) f33366i.clone();
    }
}
