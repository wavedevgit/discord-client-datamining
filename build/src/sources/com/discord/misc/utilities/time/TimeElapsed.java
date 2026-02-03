package com.discord.misc.utilities.time;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lr.l;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0002\b\b\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u0011\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\t\u0010\u0010\u001a\u00020\u0003HÂ\u0003J\u0013\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001J\t\u0010\u0017\u001a\u00020\fHÖ\u0001R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u001b\u0010\u0006\u001a\u00020\u00038FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\t\u0010\n\u001a\u0004\b\u0007\u0010\bR\u001b\u0010\u000b\u001a\u00020\f8FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\u000f\u0010\n\u001a\u0004\b\r\u0010\u000e¨\u0006\u0018"}, d2 = {"Lcom/discord/misc/utilities/time/TimeElapsed;", "", "startTime", "", "<init>", "(J)V", "durationMillis", "getDurationMillis", "()J", "durationMillis$delegate", "Lkotlin/Lazy;", "duration", "", "getDuration", "()Ljava/lang/String;", "duration$delegate", "component1", "copy", "equals", "", "other", "hashCode", "", "toString", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TimeElapsed {
    @NotNull
    private final Lazy duration$delegate;
    @NotNull
    private final Lazy durationMillis$delegate;
    private final long startTime;

    public TimeElapsed() {
        this(0L, 1, null);
    }

    private final long component1() {
        return this.startTime;
    }

    public static /* synthetic */ TimeElapsed copy$default(TimeElapsed timeElapsed, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = timeElapsed.startTime;
        }
        return timeElapsed.copy(j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final long durationMillis_delegate$lambda$0(TimeElapsed timeElapsed) {
        return System.currentTimeMillis() - timeElapsed.startTime;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String duration_delegate$lambda$1(TimeElapsed timeElapsed) {
        return new SimpleDateFormat("mm:ss:SSS", Locale.getDefault()).format(new Date(timeElapsed.getDurationMillis()));
    }

    @NotNull
    public final TimeElapsed copy(long j10) {
        return new TimeElapsed(j10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof TimeElapsed) && this.startTime == ((TimeElapsed) obj).startTime;
    }

    @NotNull
    public final String getDuration() {
        Object value = this.duration$delegate.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (String) value;
    }

    public final long getDurationMillis() {
        return ((Number) this.durationMillis$delegate.getValue()).longValue();
    }

    public int hashCode() {
        return Long.hashCode(this.startTime);
    }

    @NotNull
    public String toString() {
        long j10 = this.startTime;
        return "TimeElapsed(startTime=" + j10 + ")";
    }

    public TimeElapsed(long j10) {
        this.startTime = j10;
        this.durationMillis$delegate = l.a(new Function0() { // from class: com.discord.misc.utilities.time.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                long durationMillis_delegate$lambda$0;
                durationMillis_delegate$lambda$0 = TimeElapsed.durationMillis_delegate$lambda$0(TimeElapsed.this);
                return Long.valueOf(durationMillis_delegate$lambda$0);
            }
        });
        this.duration$delegate = l.a(new Function0() { // from class: com.discord.misc.utilities.time.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                String duration_delegate$lambda$1;
                duration_delegate$lambda$1 = TimeElapsed.duration_delegate$lambda$1(TimeElapsed.this);
                return duration_delegate$lambda$1;
            }
        });
    }

    public /* synthetic */ TimeElapsed(long j10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? System.currentTimeMillis() : j10);
    }
}
