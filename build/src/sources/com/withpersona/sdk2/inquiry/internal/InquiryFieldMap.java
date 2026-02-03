package com.withpersona.sdk2.inquiry.internal;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InquiryFieldMap {

    /* renamed from: b  reason: collision with root package name */
    public static final Companion f18292b = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final Map f18293a;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0019\u0010\u0007\u001a\u0004\u0018\u00010\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/InquiryFieldMap;)V", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nInquiryFieldMap.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InquiryFieldMap.kt\ncom/withpersona/sdk2/inquiry/internal/InquiryFieldMap$Companion\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,50:1\n216#2:51\n217#2:54\n13402#3,2:52\n*S KotlinDebug\n*F\n+ 1 InquiryFieldMap.kt\ncom/withpersona/sdk2/inquiry/internal/InquiryFieldMap$Companion\n*L\n27#1:51\n27#1:54\n39#1:52,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion extends com.squareup.moshi.h {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        @Override // com.squareup.moshi.h
        @com.squareup.moshi.f
        public InquiryFieldMap fromJson(@NotNull com.squareup.moshi.m reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            throw new lr.q("An operation is not implemented: Not yet implemented");
        }

        @Override // com.squareup.moshi.h
        @com.squareup.moshi.z
        public void toJson(@NotNull com.squareup.moshi.t writer, InquiryFieldMap inquiryFieldMap) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            if (inquiryFieldMap == null) {
                writer.C0();
                return;
            }
            writer.l();
            for (Map.Entry entry : inquiryFieldMap.a().entrySet()) {
                InquiryField inquiryField = (InquiryField) entry.getValue();
                writer.A0((String) entry.getKey());
                if (inquiryField instanceof InquiryField.StringField) {
                    writer.x1(((InquiryField.StringField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.IntegerField) {
                    writer.e1(((InquiryField.IntegerField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.BooleanField) {
                    writer.Z0(((InquiryField.BooleanField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.DatetimeField) {
                    writer.x1(((InquiryField.DatetimeField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.DateField) {
                    writer.x1(((InquiryField.DateField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.FloatField) {
                    writer.e1(((InquiryField.FloatField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.ChoicesField) {
                    writer.x1(((InquiryField.ChoicesField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.MultiChoicesField) {
                    writer.a();
                    String[] value = ((InquiryField.MultiChoicesField) inquiryField).getValue();
                    if (value != null) {
                        for (String str : value) {
                            writer.x1(str);
                        }
                    }
                    writer.x();
                } else if (inquiryField instanceof InquiryField.Unknown) {
                    throw new IllegalStateException("Attempted to write field with type `Unknown`.");
                } else {
                    throw new lr.p();
                }
            }
            writer.E();
        }
    }

    public InquiryFieldMap(Map fields) {
        Intrinsics.checkNotNullParameter(fields, "fields");
        this.f18293a = fields;
    }

    public final Map a() {
        return this.f18293a;
    }
}
