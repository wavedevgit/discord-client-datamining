package com.withpersona.sdk2.inquiry.network.dto;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.f;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.z;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@i(generateAdapter = false)
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0087\u0081\u0002\u0018\u0000 \u00062\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0006B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0007"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "", "<init>", "(Ljava/lang/String;I)V", "TOP", "BOTTOM", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class PendingPageTextPosition {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ PendingPageTextPosition[] $VALUES;
    @NotNull
    public static final Companion Companion;
    public static final PendingPageTextPosition TOP = new PendingPageTextPosition("TOP", 0);
    public static final PendingPageTextPosition BOTTOM = new PendingPageTextPosition("BOTTOM", 1);

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion extends h {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // com.squareup.moshi.h
        @z
        public void toJson(@NotNull t writer, PendingPageTextPosition pendingPageTextPosition) {
            Intrinsics.checkNotNullParameter(writer, "writer");
        }

        private Companion() {
        }

        @Override // com.squareup.moshi.h
        @f
        @NotNull
        public PendingPageTextPosition fromJson(@NotNull m reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            Object V = reader.V();
            return Intrinsics.areEqual(V, ViewProps.START) ? PendingPageTextPosition.TOP : Intrinsics.areEqual(V, ViewProps.END) ? PendingPageTextPosition.BOTTOM : PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
    }

    private static final /* synthetic */ PendingPageTextPosition[] $values() {
        return new PendingPageTextPosition[]{TOP, BOTTOM};
    }

    static {
        PendingPageTextPosition[] $values = $values();
        $VALUES = $values;
        $ENTRIES = vr.a.a($values);
        Companion = new Companion(null);
    }

    private PendingPageTextPosition(String str, int i10) {
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static PendingPageTextPosition valueOf(String str) {
        return (PendingPageTextPosition) Enum.valueOf(PendingPageTextPosition.class, str);
    }

    public static PendingPageTextPosition[] values() {
        return (PendingPageTextPosition[]) $VALUES.clone();
    }
}
