package j$.time;

import j$.time.format.DateTimeFormatterBuilder;
import j$.time.format.w;
import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public abstract class j implements j$.time.temporal.k, j$.time.temporal.l, Comparable, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ int f31378a = 0;

    static {
        DateTimeFormatterBuilder dateTimeFormatterBuilder = new DateTimeFormatterBuilder();
        dateTimeFormatterBuilder.h(j$.time.temporal.a.YEAR, 4, 10, w.EXCEEDS_PAD);
        dateTimeFormatterBuilder.toFormatter();
    }
}
