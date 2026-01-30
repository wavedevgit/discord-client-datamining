package qs;

import j$.time.DayOfWeek;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ EnumEntries f47647a = pr.a.a(DayOfWeek.values());
    }

    public static final DayOfWeek a(int i10) {
        if (1 <= i10 && i10 < 8) {
            return (DayOfWeek) a.f47647a.get(i10 - 1);
        }
        throw new IllegalArgumentException(("Expected ISO day-of-week number in 1..7, got " + i10).toString());
    }

    public static final int b(DayOfWeek dayOfWeek) {
        Intrinsics.checkNotNullParameter(dayOfWeek, "<this>");
        return dayOfWeek.ordinal() + 1;
    }
}
