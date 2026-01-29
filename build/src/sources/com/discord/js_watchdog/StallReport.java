package com.discord.js_watchdog;

import at.n2;
import at.v1;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bB7\b\u0010\u0012\u0006\u0010\t\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0007\u0010\fJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0005HÆ\u0003J)\u0010\u0015\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u0016\u001a\u00020\u00172\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001b\u001a\u00020\u0005HÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010¨\u0006&"}, d2 = {"Lcom/discord/js_watchdog/StallReport;", "Lcom/discord/reactevents/ReactEvent;", "stallTime", "", "sessionId", "", SharedPreferencesKey.TRACE, "<init>", "(ILjava/lang/String;Ljava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getStallTime", "()I", "getSessionId", "()Ljava/lang/String;", "getTrace", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$js_watchdog_release", "$serializer", "Companion", "js_watchdog_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StallReport implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String sessionId;
    private final int stallTime;
    private final String trace;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/js_watchdog/StallReport$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/js_watchdog/StallReport;", "js_watchdog_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return StallReport$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ StallReport(int i10, int i11, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, StallReport$$serializer.INSTANCE.getDescriptor());
        }
        this.stallTime = i11;
        this.sessionId = str;
        this.trace = str2;
    }

    public static /* synthetic */ StallReport copy$default(StallReport stallReport, int i10, String str, String str2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = stallReport.stallTime;
        }
        if ((i11 & 2) != 0) {
            str = stallReport.sessionId;
        }
        if ((i11 & 4) != 0) {
            str2 = stallReport.trace;
        }
        return stallReport.copy(i10, str, str2);
    }

    public static final /* synthetic */ void write$Self$js_watchdog_release(StallReport stallReport, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.w(serialDescriptor, 0, stallReport.stallTime);
        compositeEncoder.y(serialDescriptor, 1, stallReport.sessionId);
        compositeEncoder.z(serialDescriptor, 2, n2.f6848a, stallReport.trace);
    }

    public final int component1() {
        return this.stallTime;
    }

    @NotNull
    public final String component2() {
        return this.sessionId;
    }

    public final String component3() {
        return this.trace;
    }

    @NotNull
    public final StallReport copy(int i10, @NotNull String sessionId, String str) {
        Intrinsics.checkNotNullParameter(sessionId, "sessionId");
        return new StallReport(i10, sessionId, str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof StallReport) {
            StallReport stallReport = (StallReport) obj;
            return this.stallTime == stallReport.stallTime && Intrinsics.areEqual(this.sessionId, stallReport.sessionId) && Intrinsics.areEqual(this.trace, stallReport.trace);
        }
        return false;
    }

    @NotNull
    public final String getSessionId() {
        return this.sessionId;
    }

    public final int getStallTime() {
        return this.stallTime;
    }

    public final String getTrace() {
        return this.trace;
    }

    public int hashCode() {
        int hashCode = ((Integer.hashCode(this.stallTime) * 31) + this.sessionId.hashCode()) * 31;
        String str = this.trace;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        int i10 = this.stallTime;
        String str = this.sessionId;
        String str2 = this.trace;
        return "StallReport(stallTime=" + i10 + ", sessionId=" + str + ", trace=" + str2 + ")";
    }

    public StallReport(int i10, @NotNull String sessionId, String str) {
        Intrinsics.checkNotNullParameter(sessionId, "sessionId");
        this.stallTime = i10;
        this.sessionId = sessionId;
        this.trace = str;
    }
}
