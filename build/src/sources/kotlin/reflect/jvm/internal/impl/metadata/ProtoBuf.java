package kotlin.reflect.jvm.internal.impl.metadata;

import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.h;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.events.PointerEventHelper;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractParser;
import kotlin.reflect.jvm.internal.impl.protobuf.ByteString;
import kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.Internal;
import kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException;
import kotlin.reflect.jvm.internal.impl.protobuf.LazyStringArrayList;
import kotlin.reflect.jvm.internal.impl.protobuf.LazyStringList;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder;
import kotlin.reflect.jvm.internal.impl.protobuf.Parser;
import kotlin.reflect.jvm.internal.impl.protobuf.ProtocolStringList;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ProtoBuf {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Annotation extends GeneratedMessageLite implements AnnotationOrBuilder {
        public static Parser<Annotation> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final Annotation f34586s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34587e;

        /* renamed from: i  reason: collision with root package name */
        private int f34588i;

        /* renamed from: o  reason: collision with root package name */
        private int f34589o;

        /* renamed from: p  reason: collision with root package name */
        private List f34590p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34591q;

        /* renamed from: r  reason: collision with root package name */
        private int f34592r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: s  reason: collision with root package name */
            private static final Argument f34593s;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34594e;

            /* renamed from: i  reason: collision with root package name */
            private int f34595i;

            /* renamed from: o  reason: collision with root package name */
            private int f34596o;

            /* renamed from: p  reason: collision with root package name */
            private Value f34597p;

            /* renamed from: q  reason: collision with root package name */
            private byte f34598q;

            /* renamed from: r  reason: collision with root package name */
            private int f34599r;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34600e;

                /* renamed from: i  reason: collision with root package name */
                private int f34601i;

                /* renamed from: o  reason: collision with root package name */
                private Value f34602o = Value.getDefaultInstance();

                private Builder() {
                    d();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                }

                public Argument buildPartial() {
                    Argument argument = new Argument(this);
                    int i10 = this.f34600e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f34596o = this.f34601i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f34597p = this.f34602o;
                    argument.f34595i = i11;
                    return argument;
                }

                public Value getValue() {
                    return this.f34602o;
                }

                public boolean hasNameId() {
                    if ((this.f34600e & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                public boolean hasValue() {
                    if ((this.f34600e & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    if (!hasNameId() || !hasValue() || !getValue().isInitialized()) {
                        return false;
                    }
                    return true;
                }

                public Builder mergeValue(Value value) {
                    if ((this.f34600e & 2) == 2 && this.f34602o != Value.getDefaultInstance()) {
                        this.f34602o = Value.newBuilder(this.f34602o).mergeFrom(value).buildPartial();
                    } else {
                        this.f34602o = value;
                    }
                    this.f34600e |= 2;
                    return this;
                }

                public Builder setNameId(int i10) {
                    this.f34600e |= 1;
                    this.f34601i = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public Argument build() {
                    Argument buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Argument getDefaultInstanceForType() {
                    return Argument.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(Argument argument) {
                    if (argument == Argument.getDefaultInstance()) {
                        return this;
                    }
                    if (argument.hasNameId()) {
                        setNameId(argument.getNameId());
                    }
                    if (argument.hasValue()) {
                        mergeValue(argument.getValue());
                    }
                    setUnknownFields(getUnknownFields().concat(argument.f34594e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Value extends GeneratedMessageLite implements ValueOrBuilder {
                private static final Value B;
                public static Parser<Value> PARSER = new a();
                private int A;

                /* renamed from: e  reason: collision with root package name */
                private final ByteString f34603e;

                /* renamed from: i  reason: collision with root package name */
                private int f34604i;

                /* renamed from: o  reason: collision with root package name */
                private Type f34605o;

                /* renamed from: p  reason: collision with root package name */
                private long f34606p;

                /* renamed from: q  reason: collision with root package name */
                private float f34607q;

                /* renamed from: r  reason: collision with root package name */
                private double f34608r;

                /* renamed from: s  reason: collision with root package name */
                private int f34609s;

                /* renamed from: t  reason: collision with root package name */
                private int f34610t;

                /* renamed from: u  reason: collision with root package name */
                private int f34611u;

                /* renamed from: v  reason: collision with root package name */
                private Annotation f34612v;

                /* renamed from: w  reason: collision with root package name */
                private List f34613w;

                /* renamed from: x  reason: collision with root package name */
                private int f34614x;

                /* renamed from: y  reason: collision with root package name */
                private int f34615y;

                /* renamed from: z  reason: collision with root package name */
                private byte f34616z;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class Builder extends GeneratedMessageLite.Builder<Value, Builder> implements ValueOrBuilder {

                    /* renamed from: e  reason: collision with root package name */
                    private int f34617e;

                    /* renamed from: o  reason: collision with root package name */
                    private long f34619o;

                    /* renamed from: p  reason: collision with root package name */
                    private float f34620p;

                    /* renamed from: q  reason: collision with root package name */
                    private double f34621q;

                    /* renamed from: r  reason: collision with root package name */
                    private int f34622r;

                    /* renamed from: s  reason: collision with root package name */
                    private int f34623s;

                    /* renamed from: t  reason: collision with root package name */
                    private int f34624t;

                    /* renamed from: w  reason: collision with root package name */
                    private int f34627w;

                    /* renamed from: x  reason: collision with root package name */
                    private int f34628x;

                    /* renamed from: i  reason: collision with root package name */
                    private Type f34618i = Type.BYTE;

                    /* renamed from: u  reason: collision with root package name */
                    private Annotation f34625u = Annotation.getDefaultInstance();

                    /* renamed from: v  reason: collision with root package name */
                    private List f34626v = Collections.EMPTY_LIST;

                    private Builder() {
                        e();
                    }

                    static /* synthetic */ Builder b() {
                        return c();
                    }

                    private static Builder c() {
                        return new Builder();
                    }

                    private void d() {
                        if ((this.f34617e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                            this.f34626v = new ArrayList(this.f34626v);
                            this.f34617e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                    }

                    private void e() {
                    }

                    public Value buildPartial() {
                        Value value = new Value(this);
                        int i10 = this.f34617e;
                        int i11 = 1;
                        if ((i10 & 1) != 1) {
                            i11 = 0;
                        }
                        value.f34605o = this.f34618i;
                        if ((i10 & 2) == 2) {
                            i11 |= 2;
                        }
                        value.f34606p = this.f34619o;
                        if ((i10 & 4) == 4) {
                            i11 |= 4;
                        }
                        value.f34607q = this.f34620p;
                        if ((i10 & 8) == 8) {
                            i11 |= 8;
                        }
                        value.f34608r = this.f34621q;
                        if ((i10 & 16) == 16) {
                            i11 |= 16;
                        }
                        value.f34609s = this.f34622r;
                        if ((i10 & 32) == 32) {
                            i11 |= 32;
                        }
                        value.f34610t = this.f34623s;
                        if ((i10 & 64) == 64) {
                            i11 |= 64;
                        }
                        value.f34611u = this.f34624t;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        }
                        value.f34612v = this.f34625u;
                        if ((this.f34617e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                            this.f34626v = Collections.unmodifiableList(this.f34626v);
                            this.f34617e &= -257;
                        }
                        value.f34613w = this.f34626v;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                        value.f34614x = this.f34627w;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        }
                        value.f34615y = this.f34628x;
                        value.f34604i = i11;
                        return value;
                    }

                    public Annotation getAnnotation() {
                        return this.f34625u;
                    }

                    public Value getArrayElement(int i10) {
                        return (Value) this.f34626v.get(i10);
                    }

                    public int getArrayElementCount() {
                        return this.f34626v.size();
                    }

                    public boolean hasAnnotation() {
                        if ((this.f34617e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            return true;
                        }
                        return false;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                    public final boolean isInitialized() {
                        if (hasAnnotation() && !getAnnotation().isInitialized()) {
                            return false;
                        }
                        for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                            if (!getArrayElement(i10).isInitialized()) {
                                return false;
                            }
                        }
                        return true;
                    }

                    public Builder mergeAnnotation(Annotation annotation) {
                        if ((this.f34617e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 && this.f34625u != Annotation.getDefaultInstance()) {
                            this.f34625u = Annotation.newBuilder(this.f34625u).mergeFrom(annotation).buildPartial();
                        } else {
                            this.f34625u = annotation;
                        }
                        this.f34617e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        return this;
                    }

                    public Builder setArrayDimensionCount(int i10) {
                        this.f34617e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        this.f34627w = i10;
                        return this;
                    }

                    public Builder setClassId(int i10) {
                        this.f34617e |= 32;
                        this.f34623s = i10;
                        return this;
                    }

                    public Builder setDoubleValue(double d10) {
                        this.f34617e |= 8;
                        this.f34621q = d10;
                        return this;
                    }

                    public Builder setEnumValueId(int i10) {
                        this.f34617e |= 64;
                        this.f34624t = i10;
                        return this;
                    }

                    public Builder setFlags(int i10) {
                        this.f34617e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        this.f34628x = i10;
                        return this;
                    }

                    public Builder setFloatValue(float f10) {
                        this.f34617e |= 4;
                        this.f34620p = f10;
                        return this;
                    }

                    public Builder setIntValue(long j10) {
                        this.f34617e |= 2;
                        this.f34619o = j10;
                        return this;
                    }

                    public Builder setStringValue(int i10) {
                        this.f34617e |= 16;
                        this.f34622r = i10;
                        return this;
                    }

                    public Builder setType(Type type) {
                        type.getClass();
                        this.f34617e |= 1;
                        this.f34618i = type;
                        return this;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                    public Value build() {
                        Value buildPartial = buildPartial();
                        if (buildPartial.isInitialized()) {
                            return buildPartial;
                        }
                        throw AbstractMessageLite.Builder.a(buildPartial);
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                    public Value getDefaultInstanceForType() {
                        return Value.getDefaultInstance();
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                    public Builder clone() {
                        return c().mergeFrom(buildPartial());
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                    public Builder mergeFrom(Value value) {
                        if (value == Value.getDefaultInstance()) {
                            return this;
                        }
                        if (value.hasType()) {
                            setType(value.getType());
                        }
                        if (value.hasIntValue()) {
                            setIntValue(value.getIntValue());
                        }
                        if (value.hasFloatValue()) {
                            setFloatValue(value.getFloatValue());
                        }
                        if (value.hasDoubleValue()) {
                            setDoubleValue(value.getDoubleValue());
                        }
                        if (value.hasStringValue()) {
                            setStringValue(value.getStringValue());
                        }
                        if (value.hasClassId()) {
                            setClassId(value.getClassId());
                        }
                        if (value.hasEnumValueId()) {
                            setEnumValueId(value.getEnumValueId());
                        }
                        if (value.hasAnnotation()) {
                            mergeAnnotation(value.getAnnotation());
                        }
                        if (!value.f34613w.isEmpty()) {
                            if (this.f34626v.isEmpty()) {
                                this.f34626v = value.f34613w;
                                this.f34617e &= -257;
                            } else {
                                d();
                                this.f34626v.addAll(value.f34613w);
                            }
                        }
                        if (value.hasArrayDimensionCount()) {
                            setArrayDimensionCount(value.getArrayDimensionCount());
                        }
                        if (value.hasFlags()) {
                            setFlags(value.getFlags());
                        }
                        setUnknownFields(getUnknownFields().concat(value.f34603e));
                        return this;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                        /*
                            r2 = this;
                            r0 = 0
                            kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                            java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                            kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                            if (r3 == 0) goto Le
                            r2.mergeFrom(r3)
                        Le:
                            return r2
                        Lf:
                            r3 = move-exception
                            goto L1b
                        L11:
                            r3 = move-exception
                            kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                            kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value) r4     // Catch: java.lang.Throwable -> Lf
                            throw r3     // Catch: java.lang.Throwable -> L19
                        L19:
                            r3 = move-exception
                            r0 = r4
                        L1b:
                            if (r0 == 0) goto L20
                            r2.mergeFrom(r0)
                        L20:
                            throw r3
                        */
                        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value$Builder");
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public enum Type implements Internal.EnumLite {
                    BYTE(0, 0),
                    CHAR(1, 1),
                    SHORT(2, 2),
                    INT(3, 3),
                    LONG(4, 4),
                    FLOAT(5, 5),
                    DOUBLE(6, 6),
                    BOOLEAN(7, 7),
                    STRING(8, 8),
                    CLASS(9, 9),
                    ENUM(10, 10),
                    ANNOTATION(11, 11),
                    ARRAY(12, 12);
                    

                    /* renamed from: e  reason: collision with root package name */
                    private static Internal.EnumLiteMap f34629e = new a();

                    /* renamed from: d  reason: collision with root package name */
                    private final int f34631d;

                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                    static class a implements Internal.EnumLiteMap {
                        a() {
                        }

                        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                        /* renamed from: a */
                        public Type findValueByNumber(int i10) {
                            return Type.valueOf(i10);
                        }
                    }

                    Type(int i10, int i11) {
                        this.f34631d = i11;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                    public final int getNumber() {
                        return this.f34631d;
                    }

                    public static Type valueOf(int i10) {
                        switch (i10) {
                            case 0:
                                return BYTE;
                            case 1:
                                return CHAR;
                            case 2:
                                return SHORT;
                            case 3:
                                return INT;
                            case 4:
                                return LONG;
                            case 5:
                                return FLOAT;
                            case 6:
                                return DOUBLE;
                            case 7:
                                return BOOLEAN;
                            case 8:
                                return STRING;
                            case 9:
                                return CLASS;
                            case 10:
                                return ENUM;
                            case 11:
                                return ANNOTATION;
                            case 12:
                                return ARRAY;
                            default:
                                return null;
                        }
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a extends AbstractParser {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                    /* renamed from: c */
                    public Value parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                        return new Value(codedInputStream, extensionRegistryLite);
                    }
                }

                static {
                    Value value = new Value(true);
                    B = value;
                    value.v();
                }

                public static Value getDefaultInstance() {
                    return B;
                }

                public static Builder newBuilder() {
                    return Builder.b();
                }

                private void v() {
                    this.f34605o = Type.BYTE;
                    this.f34606p = 0L;
                    this.f34607q = 0.0f;
                    this.f34608r = 0.0d;
                    this.f34609s = 0;
                    this.f34610t = 0;
                    this.f34611u = 0;
                    this.f34612v = Annotation.getDefaultInstance();
                    this.f34613w = Collections.EMPTY_LIST;
                    this.f34614x = 0;
                    this.f34615y = 0;
                }

                public Annotation getAnnotation() {
                    return this.f34612v;
                }

                public int getArrayDimensionCount() {
                    return this.f34614x;
                }

                public Value getArrayElement(int i10) {
                    return (Value) this.f34613w.get(i10);
                }

                public int getArrayElementCount() {
                    return this.f34613w.size();
                }

                public List<Value> getArrayElementList() {
                    return this.f34613w;
                }

                public int getClassId() {
                    return this.f34610t;
                }

                public double getDoubleValue() {
                    return this.f34608r;
                }

                public int getEnumValueId() {
                    return this.f34611u;
                }

                public int getFlags() {
                    return this.f34615y;
                }

                public float getFloatValue() {
                    return this.f34607q;
                }

                public long getIntValue() {
                    return this.f34606p;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public Parser<Value> getParserForType() {
                    return PARSER;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public int getSerializedSize() {
                    int i10;
                    int i11 = this.A;
                    if (i11 != -1) {
                        return i11;
                    }
                    if ((this.f34604i & 1) == 1) {
                        i10 = CodedOutputStream.computeEnumSize(1, this.f34605o.getNumber());
                    } else {
                        i10 = 0;
                    }
                    if ((this.f34604i & 2) == 2) {
                        i10 += CodedOutputStream.computeSInt64Size(2, this.f34606p);
                    }
                    if ((this.f34604i & 4) == 4) {
                        i10 += CodedOutputStream.computeFloatSize(3, this.f34607q);
                    }
                    if ((this.f34604i & 8) == 8) {
                        i10 += CodedOutputStream.computeDoubleSize(4, this.f34608r);
                    }
                    if ((this.f34604i & 16) == 16) {
                        i10 += CodedOutputStream.computeInt32Size(5, this.f34609s);
                    }
                    if ((this.f34604i & 32) == 32) {
                        i10 += CodedOutputStream.computeInt32Size(6, this.f34610t);
                    }
                    if ((this.f34604i & 64) == 64) {
                        i10 += CodedOutputStream.computeInt32Size(7, this.f34611u);
                    }
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        i10 += CodedOutputStream.computeMessageSize(8, this.f34612v);
                    }
                    for (int i12 = 0; i12 < this.f34613w.size(); i12++) {
                        i10 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.f34613w.get(i12));
                    }
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        i10 += CodedOutputStream.computeInt32Size(10, this.f34615y);
                    }
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        i10 += CodedOutputStream.computeInt32Size(11, this.f34614x);
                    }
                    int size = i10 + this.f34603e.size();
                    this.A = size;
                    return size;
                }

                public int getStringValue() {
                    return this.f34609s;
                }

                public Type getType() {
                    return this.f34605o;
                }

                public boolean hasAnnotation() {
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        return true;
                    }
                    return false;
                }

                public boolean hasArrayDimensionCount() {
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        return true;
                    }
                    return false;
                }

                public boolean hasClassId() {
                    if ((this.f34604i & 32) == 32) {
                        return true;
                    }
                    return false;
                }

                public boolean hasDoubleValue() {
                    if ((this.f34604i & 8) == 8) {
                        return true;
                    }
                    return false;
                }

                public boolean hasEnumValueId() {
                    if ((this.f34604i & 64) == 64) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFlags() {
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFloatValue() {
                    if ((this.f34604i & 4) == 4) {
                        return true;
                    }
                    return false;
                }

                public boolean hasIntValue() {
                    if ((this.f34604i & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                public boolean hasStringValue() {
                    if ((this.f34604i & 16) == 16) {
                        return true;
                    }
                    return false;
                }

                public boolean hasType() {
                    if ((this.f34604i & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    byte b10 = this.f34616z;
                    if (b10 == 1) {
                        return true;
                    }
                    if (b10 == 0) {
                        return false;
                    }
                    if (hasAnnotation() && !getAnnotation().isInitialized()) {
                        this.f34616z = (byte) 0;
                        return false;
                    }
                    for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                        if (!getArrayElement(i10).isInitialized()) {
                            this.f34616z = (byte) 0;
                            return false;
                        }
                    }
                    this.f34616z = (byte) 1;
                    return true;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public void writeTo(CodedOutputStream codedOutputStream) {
                    getSerializedSize();
                    if ((this.f34604i & 1) == 1) {
                        codedOutputStream.writeEnum(1, this.f34605o.getNumber());
                    }
                    if ((this.f34604i & 2) == 2) {
                        codedOutputStream.writeSInt64(2, this.f34606p);
                    }
                    if ((this.f34604i & 4) == 4) {
                        codedOutputStream.writeFloat(3, this.f34607q);
                    }
                    if ((this.f34604i & 8) == 8) {
                        codedOutputStream.writeDouble(4, this.f34608r);
                    }
                    if ((this.f34604i & 16) == 16) {
                        codedOutputStream.writeInt32(5, this.f34609s);
                    }
                    if ((this.f34604i & 32) == 32) {
                        codedOutputStream.writeInt32(6, this.f34610t);
                    }
                    if ((this.f34604i & 64) == 64) {
                        codedOutputStream.writeInt32(7, this.f34611u);
                    }
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        codedOutputStream.writeMessage(8, this.f34612v);
                    }
                    for (int i10 = 0; i10 < this.f34613w.size(); i10++) {
                        codedOutputStream.writeMessage(9, (MessageLite) this.f34613w.get(i10));
                    }
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        codedOutputStream.writeInt32(10, this.f34615y);
                    }
                    if ((this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        codedOutputStream.writeInt32(11, this.f34614x);
                    }
                    codedOutputStream.writeRawBytes(this.f34603e);
                }

                public static Builder newBuilder(Value value) {
                    return newBuilder().mergeFrom(value);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Value getDefaultInstanceForType() {
                    return B;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public Builder newBuilderForType() {
                    return newBuilder();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public Builder toBuilder() {
                    return newBuilder(this);
                }

                private Value(GeneratedMessageLite.Builder builder) {
                    super(builder);
                    this.f34616z = (byte) -1;
                    this.A = -1;
                    this.f34603e = builder.getUnknownFields();
                }

                private Value(boolean z10) {
                    this.f34616z = (byte) -1;
                    this.A = -1;
                    this.f34603e = ByteString.EMPTY;
                }

                /* JADX WARN: Multi-variable type inference failed */
                /* JADX WARN: Type inference failed for: r5v0 */
                /* JADX WARN: Type inference failed for: r5v1 */
                /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
                private Value(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    this.f34616z = (byte) -1;
                    this.A = -1;
                    v();
                    ByteString.Output newOutput = ByteString.newOutput();
                    CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                    boolean z10 = false;
                    boolean z11 = false;
                    while (true) {
                        ?? r52 = 256;
                        if (!z10) {
                            try {
                                try {
                                    int readTag = codedInputStream.readTag();
                                    switch (readTag) {
                                        case 0:
                                            break;
                                        case 8:
                                            int readEnum = codedInputStream.readEnum();
                                            Type valueOf = Type.valueOf(readEnum);
                                            if (valueOf == null) {
                                                newInstance.writeRawVarint32(readTag);
                                                newInstance.writeRawVarint32(readEnum);
                                            } else {
                                                this.f34604i |= 1;
                                                this.f34605o = valueOf;
                                                continue;
                                            }
                                        case 16:
                                            this.f34604i |= 2;
                                            this.f34606p = codedInputStream.readSInt64();
                                            continue;
                                        case 29:
                                            this.f34604i |= 4;
                                            this.f34607q = codedInputStream.readFloat();
                                            continue;
                                        case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                                            this.f34604i |= 8;
                                            this.f34608r = codedInputStream.readDouble();
                                            continue;
                                        case 40:
                                            this.f34604i |= 16;
                                            this.f34609s = codedInputStream.readInt32();
                                            continue;
                                        case 48:
                                            this.f34604i |= 32;
                                            this.f34610t = codedInputStream.readInt32();
                                            continue;
                                        case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                            this.f34604i |= 64;
                                            this.f34611u = codedInputStream.readInt32();
                                            continue;
                                        case 66:
                                            Builder builder = (this.f34604i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.f34612v.toBuilder() : null;
                                            Annotation annotation = (Annotation) codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite);
                                            this.f34612v = annotation;
                                            if (builder != null) {
                                                builder.mergeFrom(annotation);
                                                this.f34612v = builder.buildPartial();
                                            }
                                            this.f34604i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                            continue;
                                        case 74:
                                            if (!(z11 & true)) {
                                                this.f34613w = new ArrayList();
                                                z11 = true;
                                            }
                                            this.f34613w.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                                            continue;
                                        case 80:
                                            this.f34604i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                            this.f34615y = codedInputStream.readInt32();
                                            continue;
                                        case 88:
                                            this.f34604i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                            this.f34614x = codedInputStream.readInt32();
                                            continue;
                                        default:
                                            r52 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                            if (r52 == 0) {
                                                break;
                                            } else {
                                                continue;
                                            }
                                    }
                                    z10 = true;
                                } catch (Throwable th2) {
                                    if ((z11 & true) == r52) {
                                        this.f34613w = Collections.unmodifiableList(this.f34613w);
                                    }
                                    try {
                                        newInstance.flush();
                                    } catch (IOException unused) {
                                    } catch (Throwable th3) {
                                        this.f34603e = newOutput.toByteString();
                                        throw th3;
                                    }
                                    this.f34603e = newOutput.toByteString();
                                    e();
                                    throw th2;
                                }
                            } catch (InvalidProtocolBufferException e10) {
                                throw e10.setUnfinishedMessage(this);
                            } catch (IOException e11) {
                                throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                            }
                        } else {
                            if (z11 & true) {
                                this.f34613w = Collections.unmodifiableList(this.f34613w);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused2) {
                            } catch (Throwable th4) {
                                this.f34603e = newOutput.toByteString();
                                throw th4;
                            }
                            this.f34603e = newOutput.toByteString();
                            e();
                            return;
                        }
                    }
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public interface ValueOrBuilder extends MessageLiteOrBuilder {
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public Argument parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new Argument(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                Argument argument = new Argument(true);
                f34593s = argument;
                argument.l();
            }

            public static Argument getDefaultInstance() {
                return f34593s;
            }

            private void l() {
                this.f34596o = 0;
                this.f34597p = Value.getDefaultInstance();
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public int getNameId() {
                return this.f34596o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34599r;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34595i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f34596o);
                } else {
                    i10 = 0;
                }
                if ((this.f34595i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f34597p);
                }
                int size = i10 + this.f34594e.size();
                this.f34599r = size;
                return size;
            }

            public Value getValue() {
                return this.f34597p;
            }

            public boolean hasNameId() {
                if ((this.f34595i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasValue() {
                if ((this.f34595i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34598q;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasNameId()) {
                    this.f34598q = (byte) 0;
                    return false;
                } else if (!hasValue()) {
                    this.f34598q = (byte) 0;
                    return false;
                } else if (!getValue().isInitialized()) {
                    this.f34598q = (byte) 0;
                    return false;
                } else {
                    this.f34598q = (byte) 1;
                    return true;
                }
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34595i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f34596o);
                }
                if ((this.f34595i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f34597p);
                }
                codedOutputStream.writeRawBytes(this.f34594e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f34593s;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private Argument(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f34598q = (byte) -1;
                this.f34599r = -1;
                this.f34594e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f34598q = (byte) -1;
                this.f34599r = -1;
                this.f34594e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34598q = (byte) -1;
                this.f34599r = -1;
                l();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                while (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag == 8) {
                                    this.f34595i |= 1;
                                    this.f34596o = codedInputStream.readInt32();
                                } else if (readTag != 18) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    Value.Builder builder = (this.f34595i & 2) == 2 ? this.f34597p.toBuilder() : null;
                                    Value value = (Value) codedInputStream.readMessage(Value.PARSER, extensionRegistryLite);
                                    this.f34597p = value;
                                    if (builder != null) {
                                        builder.mergeFrom(value);
                                        this.f34597p = builder.buildPartial();
                                    }
                                    this.f34595i |= 2;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f34594e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34594e = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34594e = newOutput.toByteString();
                    throw th4;
                }
                this.f34594e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Annotation, Builder> implements AnnotationOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34632e;

            /* renamed from: i  reason: collision with root package name */
            private int f34633i;

            /* renamed from: o  reason: collision with root package name */
            private List f34634o = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34632e & 2) != 2) {
                    this.f34634o = new ArrayList(this.f34634o);
                    this.f34632e |= 2;
                }
            }

            private void e() {
            }

            public Annotation buildPartial() {
                Annotation annotation = new Annotation(this);
                int i10 = 1;
                if ((this.f34632e & 1) != 1) {
                    i10 = 0;
                }
                annotation.f34589o = this.f34633i;
                if ((this.f34632e & 2) == 2) {
                    this.f34634o = Collections.unmodifiableList(this.f34634o);
                    this.f34632e &= -3;
                }
                annotation.f34590p = this.f34634o;
                annotation.f34588i = i10;
                return annotation;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f34634o.get(i10);
            }

            public int getArgumentCount() {
                return this.f34634o.size();
            }

            public boolean hasId() {
                if ((this.f34632e & 1) == 1) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasId()) {
                    return false;
                }
                for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                    if (!getArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            public Builder setId(int i10) {
                this.f34632e |= 1;
                this.f34633i = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Annotation build() {
                Annotation buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Annotation getDefaultInstanceForType() {
                return Annotation.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Annotation annotation) {
                if (annotation == Annotation.getDefaultInstance()) {
                    return this;
                }
                if (annotation.hasId()) {
                    setId(annotation.getId());
                }
                if (!annotation.f34590p.isEmpty()) {
                    if (this.f34634o.isEmpty()) {
                        this.f34634o = annotation.f34590p;
                        this.f34632e &= -3;
                    } else {
                        d();
                        this.f34634o.addAll(annotation.f34590p);
                    }
                }
                setUnknownFields(getUnknownFields().concat(annotation.f34587e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Annotation parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Annotation(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Annotation annotation = new Annotation(true);
            f34586s = annotation;
            annotation.m();
        }

        public static Annotation getDefaultInstance() {
            return f34586s;
        }

        private void m() {
            this.f34589o = 0;
            this.f34590p = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f34590p.get(i10);
        }

        public int getArgumentCount() {
            return this.f34590p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f34590p;
        }

        public int getId() {
            return this.f34589o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Annotation> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34592r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34588i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34589o);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f34590p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f34590p.get(i12));
            }
            int size = i10 + this.f34587e.size();
            this.f34592r = size;
            return size;
        }

        public boolean hasId() {
            if ((this.f34588i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34591q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f34591q = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.f34591q = (byte) 0;
                    return false;
                }
            }
            this.f34591q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34588i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34589o);
            }
            for (int i10 = 0; i10 < this.f34590p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f34590p.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34587e);
        }

        public static Builder newBuilder(Annotation annotation) {
            return newBuilder().mergeFrom(annotation);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Annotation getDefaultInstanceForType() {
            return f34586s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Annotation(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34591q = (byte) -1;
            this.f34592r = -1;
            this.f34587e = builder.getUnknownFields();
        }

        private Annotation(boolean z10) {
            this.f34591q = (byte) -1;
            this.f34592r = -1;
            this.f34587e = ByteString.EMPTY;
        }

        private Annotation(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34591q = (byte) -1;
            this.f34592r = -1;
            m();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34588i |= 1;
                                this.f34589o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f34590p = new ArrayList();
                                    z11 = true;
                                }
                                this.f34590p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f34590p = Collections.unmodifiableList(this.f34590p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34587e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34587e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f34590p = Collections.unmodifiableList(this.f34590p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34587e = newOutput.toByteString();
                throw th4;
            }
            this.f34587e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface AnnotationOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Class extends GeneratedMessageLite.ExtendableMessage<Class> implements ClassOrBuilder {
        public static Parser<Class> PARSER = new a();
        private static final Class W;
        private int A;
        private List B;
        private List C;
        private List D;
        private List E;
        private List F;
        private List G;
        private int H;
        private int I;
        private Type J;
        private int K;
        private List L;
        private int M;
        private List N;
        private List O;
        private int P;
        private TypeTable Q;
        private List R;
        private VersionRequirementTable S;
        private List T;
        private byte U;
        private int V;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34635i;

        /* renamed from: o  reason: collision with root package name */
        private int f34636o;

        /* renamed from: p  reason: collision with root package name */
        private int f34637p;

        /* renamed from: q  reason: collision with root package name */
        private int f34638q;

        /* renamed from: r  reason: collision with root package name */
        private int f34639r;

        /* renamed from: s  reason: collision with root package name */
        private List f34640s;

        /* renamed from: t  reason: collision with root package name */
        private List f34641t;

        /* renamed from: u  reason: collision with root package name */
        private List f34642u;

        /* renamed from: v  reason: collision with root package name */
        private int f34643v;

        /* renamed from: w  reason: collision with root package name */
        private List f34644w;

        /* renamed from: x  reason: collision with root package name */
        private int f34645x;

        /* renamed from: y  reason: collision with root package name */
        private List f34646y;

        /* renamed from: z  reason: collision with root package name */
        private List f34647z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Class, Builder> implements ClassOrBuilder {
            private List A;
            private List B;
            private List C;
            private List D;
            private int E;
            private Type F;
            private int G;
            private List H;
            private List I;
            private List J;
            private TypeTable K;
            private List L;
            private VersionRequirementTable M;
            private List N;

            /* renamed from: o  reason: collision with root package name */
            private int f34648o;

            /* renamed from: p  reason: collision with root package name */
            private int f34649p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f34650q;

            /* renamed from: r  reason: collision with root package name */
            private int f34651r;

            /* renamed from: s  reason: collision with root package name */
            private List f34652s;

            /* renamed from: t  reason: collision with root package name */
            private List f34653t;

            /* renamed from: u  reason: collision with root package name */
            private List f34654u;

            /* renamed from: v  reason: collision with root package name */
            private List f34655v;

            /* renamed from: w  reason: collision with root package name */
            private List f34656w;

            /* renamed from: x  reason: collision with root package name */
            private List f34657x;

            /* renamed from: y  reason: collision with root package name */
            private List f34658y;

            /* renamed from: z  reason: collision with root package name */
            private List f34659z;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34652s = list;
                this.f34653t = list;
                this.f34654u = list;
                this.f34655v = list;
                this.f34656w = list;
                this.f34657x = list;
                this.f34658y = list;
                this.f34659z = list;
                this.A = list;
                this.B = list;
                this.C = list;
                this.D = list;
                this.F = Type.getDefaultInstance();
                this.H = list;
                this.I = list;
                this.J = list;
                this.K = TypeTable.getDefaultInstance();
                this.L = list;
                this.M = VersionRequirementTable.getDefaultInstance();
                this.N = list;
                C();
            }

            private void A() {
                if ((this.f34648o & 8) != 8) {
                    this.f34652s = new ArrayList(this.f34652s);
                    this.f34648o |= 8;
                }
            }

            private void B() {
                if ((this.f34648o & 4194304) != 4194304) {
                    this.L = new ArrayList(this.L);
                    this.f34648o |= 4194304;
                }
            }

            private void C() {
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34648o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 16777216) {
                    this.N = new ArrayList(this.N);
                    this.f34648o |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
                }
            }

            private void k() {
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34658y = new ArrayList(this.f34658y);
                    this.f34648o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34657x = new ArrayList(this.f34657x);
                    this.f34648o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f34656w = new ArrayList(this.f34656w);
                    this.f34648o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void o() {
                if ((this.f34648o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f34648o |= 8192;
                }
            }

            private void p() {
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f34659z = new ArrayList(this.f34659z);
                    this.f34648o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void q() {
                if ((this.f34648o & 262144) != 262144) {
                    this.H = new ArrayList(this.H);
                    this.f34648o |= 262144;
                }
            }

            private void r() {
                if ((this.f34648o & 1048576) != 1048576) {
                    this.J = new ArrayList(this.J);
                    this.f34648o |= 1048576;
                }
            }

            private void s() {
                if ((this.f34648o & 524288) != 524288) {
                    this.I = new ArrayList(this.I);
                    this.f34648o |= 524288;
                }
            }

            private void t() {
                if ((this.f34648o & 64) != 64) {
                    this.f34655v = new ArrayList(this.f34655v);
                    this.f34648o |= 64;
                }
            }

            private void u() {
                if ((this.f34648o & RecyclerView.ItemAnimator.FLAG_MOVED) != 2048) {
                    this.A = new ArrayList(this.A);
                    this.f34648o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
            }

            private void v() {
                if ((this.f34648o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f34648o |= 16384;
                }
            }

            private void w() {
                if ((this.f34648o & 32) != 32) {
                    this.f34654u = new ArrayList(this.f34654u);
                    this.f34648o |= 32;
                }
            }

            private void y() {
                if ((this.f34648o & 16) != 16) {
                    this.f34653t = new ArrayList(this.f34653t);
                    this.f34648o |= 16;
                }
            }

            private void z() {
                if ((this.f34648o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f34648o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            public Class buildPartial() {
                Class r02 = new Class(this);
                int i10 = this.f34648o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                r02.f34637p = this.f34649p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                r02.f34638q = this.f34650q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                r02.f34639r = this.f34651r;
                if ((this.f34648o & 8) == 8) {
                    this.f34652s = Collections.unmodifiableList(this.f34652s);
                    this.f34648o &= -9;
                }
                r02.f34640s = this.f34652s;
                if ((this.f34648o & 16) == 16) {
                    this.f34653t = Collections.unmodifiableList(this.f34653t);
                    this.f34648o &= -17;
                }
                r02.f34641t = this.f34653t;
                if ((this.f34648o & 32) == 32) {
                    this.f34654u = Collections.unmodifiableList(this.f34654u);
                    this.f34648o &= -33;
                }
                r02.f34642u = this.f34654u;
                if ((this.f34648o & 64) == 64) {
                    this.f34655v = Collections.unmodifiableList(this.f34655v);
                    this.f34648o &= -65;
                }
                r02.f34644w = this.f34655v;
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f34656w = Collections.unmodifiableList(this.f34656w);
                    this.f34648o &= -129;
                }
                r02.f34646y = this.f34656w;
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34657x = Collections.unmodifiableList(this.f34657x);
                    this.f34648o &= -257;
                }
                r02.f34647z = this.f34657x;
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34658y = Collections.unmodifiableList(this.f34658y);
                    this.f34648o &= -513;
                }
                r02.B = this.f34658y;
                if ((this.f34648o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f34659z = Collections.unmodifiableList(this.f34659z);
                    this.f34648o &= -1025;
                }
                r02.C = this.f34659z;
                if ((this.f34648o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    this.A = Collections.unmodifiableList(this.A);
                    this.f34648o &= -2049;
                }
                r02.D = this.A;
                if ((this.f34648o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f34648o &= -4097;
                }
                r02.E = this.B;
                if ((this.f34648o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f34648o &= -8193;
                }
                r02.F = this.C;
                if ((this.f34648o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f34648o &= -16385;
                }
                r02.G = this.D;
                if ((i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) == 32768) {
                    i11 |= 8;
                }
                r02.I = this.E;
                if ((i10 & 65536) == 65536) {
                    i11 |= 16;
                }
                r02.J = this.F;
                if ((i10 & 131072) == 131072) {
                    i11 |= 32;
                }
                r02.K = this.G;
                if ((this.f34648o & 262144) == 262144) {
                    this.H = Collections.unmodifiableList(this.H);
                    this.f34648o &= -262145;
                }
                r02.L = this.H;
                if ((this.f34648o & 524288) == 524288) {
                    this.I = Collections.unmodifiableList(this.I);
                    this.f34648o &= -524289;
                }
                r02.N = this.I;
                if ((this.f34648o & 1048576) == 1048576) {
                    this.J = Collections.unmodifiableList(this.J);
                    this.f34648o &= -1048577;
                }
                r02.O = this.J;
                if ((i10 & 2097152) == 2097152) {
                    i11 |= 64;
                }
                r02.Q = this.K;
                if ((this.f34648o & 4194304) == 4194304) {
                    this.L = Collections.unmodifiableList(this.L);
                    this.f34648o &= -4194305;
                }
                r02.R = this.L;
                if ((i10 & 8388608) == 8388608) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                r02.S = this.M;
                if ((this.f34648o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) == 16777216) {
                    this.N = Collections.unmodifiableList(this.N);
                    this.f34648o &= -16777217;
                }
                r02.T = this.N;
                r02.f34636o = i11;
                return r02;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.N.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.N.size();
            }

            public Constructor getConstructor(int i10) {
                return (Constructor) this.f34658y.get(i10);
            }

            public int getConstructorCount() {
                return this.f34658y.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f34656w.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f34656w.size();
            }

            public EnumEntry getEnumEntry(int i10) {
                return (EnumEntry) this.C.get(i10);
            }

            public int getEnumEntryCount() {
                return this.C.size();
            }

            public Function getFunction(int i10) {
                return (Function) this.f34659z.get(i10);
            }

            public int getFunctionCount() {
                return this.f34659z.size();
            }

            public Type getInlineClassUnderlyingType() {
                return this.F;
            }

            public Type getMultiFieldValueClassUnderlyingType(int i10) {
                return (Type) this.I.get(i10);
            }

            public int getMultiFieldValueClassUnderlyingTypeCount() {
                return this.I.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.A.get(i10);
            }

            public int getPropertyCount() {
                return this.A.size();
            }

            public Type getSupertype(int i10) {
                return (Type) this.f34653t.get(i10);
            }

            public int getSupertypeCount() {
                return this.f34653t.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.B.get(i10);
            }

            public int getTypeAliasCount() {
                return this.B.size();
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34652s.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34652s.size();
            }

            public TypeTable getTypeTable() {
                return this.K;
            }

            public boolean hasFqName() {
                if ((this.f34648o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasInlineClassUnderlyingType() {
                if ((this.f34648o & 65536) == 65536) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f34648o & 2097152) == 2097152) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasFqName()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getSupertypeCount(); i11++) {
                    if (!getSupertype(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getContextReceiverTypeCount(); i12++) {
                    if (!getContextReceiverType(i12).isInitialized()) {
                        return false;
                    }
                }
                for (int i13 = 0; i13 < getConstructorCount(); i13++) {
                    if (!getConstructor(i13).isInitialized()) {
                        return false;
                    }
                }
                for (int i14 = 0; i14 < getFunctionCount(); i14++) {
                    if (!getFunction(i14).isInitialized()) {
                        return false;
                    }
                }
                for (int i15 = 0; i15 < getPropertyCount(); i15++) {
                    if (!getProperty(i15).isInitialized()) {
                        return false;
                    }
                }
                for (int i16 = 0; i16 < getTypeAliasCount(); i16++) {
                    if (!getTypeAlias(i16).isInitialized()) {
                        return false;
                    }
                }
                for (int i17 = 0; i17 < getEnumEntryCount(); i17++) {
                    if (!getEnumEntry(i17).isInitialized()) {
                        return false;
                    }
                }
                if (hasInlineClassUnderlyingType() && !getInlineClassUnderlyingType().isInitialized()) {
                    return false;
                }
                for (int i18 = 0; i18 < getMultiFieldValueClassUnderlyingTypeCount(); i18++) {
                    if (!getMultiFieldValueClassUnderlyingType(i18).isInitialized()) {
                        return false;
                    }
                }
                if (hasTypeTable() && !getTypeTable().isInitialized()) {
                    return false;
                }
                for (int i19 = 0; i19 < getCompilerPluginDataCount(); i19++) {
                    if (!getCompilerPluginData(i19).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeInlineClassUnderlyingType(Type type) {
                if ((this.f34648o & 65536) == 65536 && this.F != Type.getDefaultInstance()) {
                    this.F = Type.newBuilder(this.F).mergeFrom(type).buildPartial();
                } else {
                    this.F = type;
                }
                this.f34648o |= 65536;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f34648o & 2097152) == 2097152 && this.K != TypeTable.getDefaultInstance()) {
                    this.K = TypeTable.newBuilder(this.K).mergeFrom(typeTable).buildPartial();
                } else {
                    this.K = typeTable;
                }
                this.f34648o |= 2097152;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f34648o & 8388608) == 8388608 && this.M != VersionRequirementTable.getDefaultInstance()) {
                    this.M = VersionRequirementTable.newBuilder(this.M).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.M = versionRequirementTable;
                }
                this.f34648o |= 8388608;
                return this;
            }

            public Builder setCompanionObjectName(int i10) {
                this.f34648o |= 4;
                this.f34651r = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34648o |= 1;
                this.f34649p = i10;
                return this;
            }

            public Builder setFqName(int i10) {
                this.f34648o |= 2;
                this.f34650q = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingPropertyName(int i10) {
                this.f34648o |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                this.E = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingTypeId(int i10) {
                this.f34648o |= 131072;
                this.G = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Class build() {
                Class buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Class getDefaultInstanceForType() {
                return Class.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Class r32) {
                if (r32 == Class.getDefaultInstance()) {
                    return this;
                }
                if (r32.hasFlags()) {
                    setFlags(r32.getFlags());
                }
                if (r32.hasFqName()) {
                    setFqName(r32.getFqName());
                }
                if (r32.hasCompanionObjectName()) {
                    setCompanionObjectName(r32.getCompanionObjectName());
                }
                if (!r32.f34640s.isEmpty()) {
                    if (this.f34652s.isEmpty()) {
                        this.f34652s = r32.f34640s;
                        this.f34648o &= -9;
                    } else {
                        A();
                        this.f34652s.addAll(r32.f34640s);
                    }
                }
                if (!r32.f34641t.isEmpty()) {
                    if (this.f34653t.isEmpty()) {
                        this.f34653t = r32.f34641t;
                        this.f34648o &= -17;
                    } else {
                        y();
                        this.f34653t.addAll(r32.f34641t);
                    }
                }
                if (!r32.f34642u.isEmpty()) {
                    if (this.f34654u.isEmpty()) {
                        this.f34654u = r32.f34642u;
                        this.f34648o &= -33;
                    } else {
                        w();
                        this.f34654u.addAll(r32.f34642u);
                    }
                }
                if (!r32.f34644w.isEmpty()) {
                    if (this.f34655v.isEmpty()) {
                        this.f34655v = r32.f34644w;
                        this.f34648o &= -65;
                    } else {
                        t();
                        this.f34655v.addAll(r32.f34644w);
                    }
                }
                if (!r32.f34646y.isEmpty()) {
                    if (this.f34656w.isEmpty()) {
                        this.f34656w = r32.f34646y;
                        this.f34648o &= -129;
                    } else {
                        m();
                        this.f34656w.addAll(r32.f34646y);
                    }
                }
                if (!r32.f34647z.isEmpty()) {
                    if (this.f34657x.isEmpty()) {
                        this.f34657x = r32.f34647z;
                        this.f34648o &= -257;
                    } else {
                        l();
                        this.f34657x.addAll(r32.f34647z);
                    }
                }
                if (!r32.B.isEmpty()) {
                    if (this.f34658y.isEmpty()) {
                        this.f34658y = r32.B;
                        this.f34648o &= -513;
                    } else {
                        k();
                        this.f34658y.addAll(r32.B);
                    }
                }
                if (!r32.C.isEmpty()) {
                    if (this.f34659z.isEmpty()) {
                        this.f34659z = r32.C;
                        this.f34648o &= -1025;
                    } else {
                        p();
                        this.f34659z.addAll(r32.C);
                    }
                }
                if (!r32.D.isEmpty()) {
                    if (this.A.isEmpty()) {
                        this.A = r32.D;
                        this.f34648o &= -2049;
                    } else {
                        u();
                        this.A.addAll(r32.D);
                    }
                }
                if (!r32.E.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = r32.E;
                        this.f34648o &= -4097;
                    } else {
                        z();
                        this.B.addAll(r32.E);
                    }
                }
                if (!r32.F.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = r32.F;
                        this.f34648o &= -8193;
                    } else {
                        o();
                        this.C.addAll(r32.F);
                    }
                }
                if (!r32.G.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = r32.G;
                        this.f34648o &= -16385;
                    } else {
                        v();
                        this.D.addAll(r32.G);
                    }
                }
                if (r32.hasInlineClassUnderlyingPropertyName()) {
                    setInlineClassUnderlyingPropertyName(r32.getInlineClassUnderlyingPropertyName());
                }
                if (r32.hasInlineClassUnderlyingType()) {
                    mergeInlineClassUnderlyingType(r32.getInlineClassUnderlyingType());
                }
                if (r32.hasInlineClassUnderlyingTypeId()) {
                    setInlineClassUnderlyingTypeId(r32.getInlineClassUnderlyingTypeId());
                }
                if (!r32.L.isEmpty()) {
                    if (this.H.isEmpty()) {
                        this.H = r32.L;
                        this.f34648o &= -262145;
                    } else {
                        q();
                        this.H.addAll(r32.L);
                    }
                }
                if (!r32.N.isEmpty()) {
                    if (this.I.isEmpty()) {
                        this.I = r32.N;
                        this.f34648o &= -524289;
                    } else {
                        s();
                        this.I.addAll(r32.N);
                    }
                }
                if (!r32.O.isEmpty()) {
                    if (this.J.isEmpty()) {
                        this.J = r32.O;
                        this.f34648o &= -1048577;
                    } else {
                        r();
                        this.J.addAll(r32.O);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (!r32.R.isEmpty()) {
                    if (this.L.isEmpty()) {
                        this.L = r32.R;
                        this.f34648o &= -4194305;
                    } else {
                        B();
                        this.L.addAll(r32.R);
                    }
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                if (!r32.T.isEmpty()) {
                    if (this.N.isEmpty()) {
                        this.N = r32.T;
                        this.f34648o &= -16777217;
                    } else {
                        j();
                        this.N.addAll(r32.T);
                    }
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f34635i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum Kind implements Internal.EnumLite {
            CLASS(0, 0),
            INTERFACE(1, 1),
            ENUM_CLASS(2, 2),
            ENUM_ENTRY(3, 3),
            ANNOTATION_CLASS(4, 4),
            OBJECT(5, 5),
            COMPANION_OBJECT(6, 6);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34660e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34662d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public Kind findValueByNumber(int i10) {
                    return Kind.valueOf(i10);
                }
            }

            Kind(int i10, int i11) {
                this.f34662d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34662d;
            }

            public static Kind valueOf(int i10) {
                switch (i10) {
                    case 0:
                        return CLASS;
                    case 1:
                        return INTERFACE;
                    case 2:
                        return ENUM_CLASS;
                    case 3:
                        return ENUM_ENTRY;
                    case 4:
                        return ANNOTATION_CLASS;
                    case 5:
                        return OBJECT;
                    case 6:
                        return COMPANION_OBJECT;
                    default:
                        return null;
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Class parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Class(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Class r02 = new Class(true);
            W = r02;
            r02.e0();
        }

        private void e0() {
            this.f34637p = 6;
            this.f34638q = 0;
            this.f34639r = 0;
            List list = Collections.EMPTY_LIST;
            this.f34640s = list;
            this.f34641t = list;
            this.f34642u = list;
            this.f34644w = list;
            this.f34646y = list;
            this.f34647z = list;
            this.B = list;
            this.C = list;
            this.D = list;
            this.E = list;
            this.F = list;
            this.G = list;
            this.I = 0;
            this.J = Type.getDefaultInstance();
            this.K = 0;
            this.L = list;
            this.N = list;
            this.O = list;
            this.Q = TypeTable.getDefaultInstance();
            this.R = list;
            this.S = VersionRequirementTable.getDefaultInstance();
            this.T = list;
        }

        public static Class getDefaultInstance() {
            return W;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static Class parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        public int getCompanionObjectName() {
            return this.f34639r;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.T.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.T.size();
        }

        public Constructor getConstructor(int i10) {
            return (Constructor) this.B.get(i10);
        }

        public int getConstructorCount() {
            return this.B.size();
        }

        public List<Constructor> getConstructorList() {
            return this.B;
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f34646y.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f34646y.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f34647z;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f34646y;
        }

        public EnumEntry getEnumEntry(int i10) {
            return (EnumEntry) this.F.get(i10);
        }

        public int getEnumEntryCount() {
            return this.F.size();
        }

        public List<EnumEntry> getEnumEntryList() {
            return this.F;
        }

        public int getFlags() {
            return this.f34637p;
        }

        public int getFqName() {
            return this.f34638q;
        }

        public Function getFunction(int i10) {
            return (Function) this.C.get(i10);
        }

        public int getFunctionCount() {
            return this.C.size();
        }

        public List<Function> getFunctionList() {
            return this.C;
        }

        public int getInlineClassUnderlyingPropertyName() {
            return this.I;
        }

        public Type getInlineClassUnderlyingType() {
            return this.J;
        }

        public int getInlineClassUnderlyingTypeId() {
            return this.K;
        }

        public int getMultiFieldValueClassUnderlyingNameCount() {
            return this.L.size();
        }

        public List<Integer> getMultiFieldValueClassUnderlyingNameList() {
            return this.L;
        }

        public Type getMultiFieldValueClassUnderlyingType(int i10) {
            return (Type) this.N.get(i10);
        }

        public int getMultiFieldValueClassUnderlyingTypeCount() {
            return this.N.size();
        }

        public int getMultiFieldValueClassUnderlyingTypeIdCount() {
            return this.O.size();
        }

        public List<Integer> getMultiFieldValueClassUnderlyingTypeIdList() {
            return this.O;
        }

        public List<Type> getMultiFieldValueClassUnderlyingTypeList() {
            return this.N;
        }

        public List<Integer> getNestedClassNameList() {
            return this.f34644w;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Class> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.D.get(i10);
        }

        public int getPropertyCount() {
            return this.D.size();
        }

        public List<Property> getPropertyList() {
            return this.D;
        }

        public List<Integer> getSealedSubclassFqNameList() {
            return this.G;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.V;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34636o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34637p);
            } else {
                i10 = 0;
            }
            int i12 = 0;
            for (int i13 = 0; i13 < this.f34642u.size(); i13++) {
                i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34642u.get(i13)).intValue());
            }
            int i14 = i10 + i12;
            if (!getSupertypeIdList().isEmpty()) {
                i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
            }
            this.f34643v = i12;
            if ((this.f34636o & 2) == 2) {
                i14 += CodedOutputStream.computeInt32Size(3, this.f34638q);
            }
            if ((this.f34636o & 4) == 4) {
                i14 += CodedOutputStream.computeInt32Size(4, this.f34639r);
            }
            for (int i15 = 0; i15 < this.f34640s.size(); i15++) {
                i14 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f34640s.get(i15));
            }
            for (int i16 = 0; i16 < this.f34641t.size(); i16++) {
                i14 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f34641t.get(i16));
            }
            int i17 = 0;
            for (int i18 = 0; i18 < this.f34644w.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34644w.get(i18)).intValue());
            }
            int i19 = i14 + i17;
            if (!getNestedClassNameList().isEmpty()) {
                i19 = i19 + 1 + CodedOutputStream.computeInt32SizeNoTag(i17);
            }
            this.f34645x = i17;
            for (int i20 = 0; i20 < this.B.size(); i20++) {
                i19 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.B.get(i20));
            }
            for (int i21 = 0; i21 < this.C.size(); i21++) {
                i19 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.C.get(i21));
            }
            for (int i22 = 0; i22 < this.D.size(); i22++) {
                i19 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.D.get(i22));
            }
            for (int i23 = 0; i23 < this.E.size(); i23++) {
                i19 += CodedOutputStream.computeMessageSize(11, (MessageLite) this.E.get(i23));
            }
            for (int i24 = 0; i24 < this.F.size(); i24++) {
                i19 += CodedOutputStream.computeMessageSize(13, (MessageLite) this.F.get(i24));
            }
            int i25 = 0;
            for (int i26 = 0; i26 < this.G.size(); i26++) {
                i25 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.G.get(i26)).intValue());
            }
            int i27 = i19 + i25;
            if (!getSealedSubclassFqNameList().isEmpty()) {
                i27 = i27 + 2 + CodedOutputStream.computeInt32SizeNoTag(i25);
            }
            this.H = i25;
            if ((this.f34636o & 8) == 8) {
                i27 += CodedOutputStream.computeInt32Size(17, this.I);
            }
            if ((this.f34636o & 16) == 16) {
                i27 += CodedOutputStream.computeMessageSize(18, this.J);
            }
            if ((this.f34636o & 32) == 32) {
                i27 += CodedOutputStream.computeInt32Size(19, this.K);
            }
            for (int i28 = 0; i28 < this.f34646y.size(); i28++) {
                i27 += CodedOutputStream.computeMessageSize(20, (MessageLite) this.f34646y.get(i28));
            }
            int i29 = 0;
            for (int i30 = 0; i30 < this.f34647z.size(); i30++) {
                i29 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34647z.get(i30)).intValue());
            }
            int i31 = i27 + i29;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i31 = i31 + 2 + CodedOutputStream.computeInt32SizeNoTag(i29);
            }
            this.A = i29;
            int i32 = 0;
            for (int i33 = 0; i33 < this.L.size(); i33++) {
                i32 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.L.get(i33)).intValue());
            }
            int i34 = i31 + i32;
            if (!getMultiFieldValueClassUnderlyingNameList().isEmpty()) {
                i34 = i34 + 2 + CodedOutputStream.computeInt32SizeNoTag(i32);
            }
            this.M = i32;
            for (int i35 = 0; i35 < this.N.size(); i35++) {
                i34 += CodedOutputStream.computeMessageSize(23, (MessageLite) this.N.get(i35));
            }
            int i36 = 0;
            for (int i37 = 0; i37 < this.O.size(); i37++) {
                i36 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.O.get(i37)).intValue());
            }
            int i38 = i34 + i36;
            if (!getMultiFieldValueClassUnderlyingTypeIdList().isEmpty()) {
                i38 = i38 + 2 + CodedOutputStream.computeInt32SizeNoTag(i36);
            }
            this.P = i36;
            if ((this.f34636o & 64) == 64) {
                i38 += CodedOutputStream.computeMessageSize(30, this.Q);
            }
            int i39 = 0;
            for (int i40 = 0; i40 < this.R.size(); i40++) {
                i39 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.R.get(i40)).intValue());
            }
            int size = i38 + i39 + (getVersionRequirementList().size() * 2);
            if ((this.f34636o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                size += CodedOutputStream.computeMessageSize(32, this.S);
            }
            for (int i41 = 0; i41 < this.T.size(); i41++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.T.get(i41));
            }
            int j10 = size + j() + this.f34635i.size();
            this.V = j10;
            return j10;
        }

        public Type getSupertype(int i10) {
            return (Type) this.f34641t.get(i10);
        }

        public int getSupertypeCount() {
            return this.f34641t.size();
        }

        public List<Integer> getSupertypeIdList() {
            return this.f34642u;
        }

        public List<Type> getSupertypeList() {
            return this.f34641t;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.E.get(i10);
        }

        public int getTypeAliasCount() {
            return this.E.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.E;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34640s.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34640s.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34640s;
        }

        public TypeTable getTypeTable() {
            return this.Q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.R;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.S;
        }

        public boolean hasCompanionObjectName() {
            if ((this.f34636o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34636o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasFqName() {
            if ((this.f34636o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingPropertyName() {
            if ((this.f34636o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingType() {
            if ((this.f34636o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingTypeId() {
            if ((this.f34636o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f34636o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f34636o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.U;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasFqName()) {
                this.U = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getSupertypeCount(); i11++) {
                if (!getSupertype(i11).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getContextReceiverTypeCount(); i12++) {
                if (!getContextReceiverType(i12).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i13 = 0; i13 < getConstructorCount(); i13++) {
                if (!getConstructor(i13).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i14 = 0; i14 < getFunctionCount(); i14++) {
                if (!getFunction(i14).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i15 = 0; i15 < getPropertyCount(); i15++) {
                if (!getProperty(i15).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i16 = 0; i16 < getTypeAliasCount(); i16++) {
                if (!getTypeAlias(i16).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i17 = 0; i17 < getEnumEntryCount(); i17++) {
                if (!getEnumEntry(i17).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            if (hasInlineClassUnderlyingType() && !getInlineClassUnderlyingType().isInitialized()) {
                this.U = (byte) 0;
                return false;
            }
            for (int i18 = 0; i18 < getMultiFieldValueClassUnderlyingTypeCount(); i18++) {
                if (!getMultiFieldValueClassUnderlyingType(i18).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.U = (byte) 0;
                return false;
            }
            for (int i19 = 0; i19 < getCompilerPluginDataCount(); i19++) {
                if (!getCompilerPluginData(i19).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.U = (byte) 0;
                return false;
            }
            this.U = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34636o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34637p);
            }
            if (getSupertypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(18);
                codedOutputStream.writeRawVarint32(this.f34643v);
            }
            for (int i10 = 0; i10 < this.f34642u.size(); i10++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34642u.get(i10)).intValue());
            }
            if ((this.f34636o & 2) == 2) {
                codedOutputStream.writeInt32(3, this.f34638q);
            }
            if ((this.f34636o & 4) == 4) {
                codedOutputStream.writeInt32(4, this.f34639r);
            }
            for (int i11 = 0; i11 < this.f34640s.size(); i11++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f34640s.get(i11));
            }
            for (int i12 = 0; i12 < this.f34641t.size(); i12++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f34641t.get(i12));
            }
            if (getNestedClassNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(58);
                codedOutputStream.writeRawVarint32(this.f34645x);
            }
            for (int i13 = 0; i13 < this.f34644w.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34644w.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.B.size(); i14++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.B.get(i14));
            }
            for (int i15 = 0; i15 < this.C.size(); i15++) {
                codedOutputStream.writeMessage(9, (MessageLite) this.C.get(i15));
            }
            for (int i16 = 0; i16 < this.D.size(); i16++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.D.get(i16));
            }
            for (int i17 = 0; i17 < this.E.size(); i17++) {
                codedOutputStream.writeMessage(11, (MessageLite) this.E.get(i17));
            }
            for (int i18 = 0; i18 < this.F.size(); i18++) {
                codedOutputStream.writeMessage(13, (MessageLite) this.F.get(i18));
            }
            if (getSealedSubclassFqNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(130);
                codedOutputStream.writeRawVarint32(this.H);
            }
            for (int i19 = 0; i19 < this.G.size(); i19++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.G.get(i19)).intValue());
            }
            if ((this.f34636o & 8) == 8) {
                codedOutputStream.writeInt32(17, this.I);
            }
            if ((this.f34636o & 16) == 16) {
                codedOutputStream.writeMessage(18, this.J);
            }
            if ((this.f34636o & 32) == 32) {
                codedOutputStream.writeInt32(19, this.K);
            }
            for (int i20 = 0; i20 < this.f34646y.size(); i20++) {
                codedOutputStream.writeMessage(20, (MessageLite) this.f34646y.get(i20));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(170);
                codedOutputStream.writeRawVarint32(this.A);
            }
            for (int i21 = 0; i21 < this.f34647z.size(); i21++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34647z.get(i21)).intValue());
            }
            if (getMultiFieldValueClassUnderlyingNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(178);
                codedOutputStream.writeRawVarint32(this.M);
            }
            for (int i22 = 0; i22 < this.L.size(); i22++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.L.get(i22)).intValue());
            }
            for (int i23 = 0; i23 < this.N.size(); i23++) {
                codedOutputStream.writeMessage(23, (MessageLite) this.N.get(i23));
            }
            if (getMultiFieldValueClassUnderlyingTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(194);
                codedOutputStream.writeRawVarint32(this.P);
            }
            for (int i24 = 0; i24 < this.O.size(); i24++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.O.get(i24)).intValue());
            }
            if ((this.f34636o & 64) == 64) {
                codedOutputStream.writeMessage(30, this.Q);
            }
            for (int i25 = 0; i25 < this.R.size(); i25++) {
                codedOutputStream.writeInt32(31, ((Integer) this.R.get(i25)).intValue());
            }
            if ((this.f34636o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(32, this.S);
            }
            for (int i26 = 0; i26 < this.T.size(); i26++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.T.get(i26));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34635i);
        }

        public static Builder newBuilder(Class r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Class getDefaultInstanceForType() {
            return W;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Class(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34643v = -1;
            this.f34645x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f34635i = extendableBuilder.getUnknownFields();
        }

        private Class(boolean z10) {
            this.f34643v = -1;
            this.f34645x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f34635i = ByteString.EMPTY;
        }

        /* JADX WARN: Type inference failed for: r4v2 */
        /* JADX WARN: Type inference failed for: r4v4 */
        /* JADX WARN: Type inference failed for: r4v8, types: [boolean] */
        private Class(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            boolean z11;
            this.f34643v = -1;
            this.f34645x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            e0();
            ByteString.Output newOutput = ByteString.newOutput();
            boolean z12 = true;
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z13 = false;
            boolean z14 = false;
            while (true) {
                boolean z15 = z12;
                ?? r42 = 64;
                char c10 = '@';
                if (!z13) {
                    try {
                        int readTag = codedInputStream.readTag();
                        switch (readTag) {
                            case 0:
                                break;
                            case 8:
                                this.f34636o |= 1;
                                this.f34637p = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 16:
                                boolean z16 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z16) {
                                    this.f34642u = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f34642u.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z17 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z17) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34642u = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34642u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                this.f34636o |= 2;
                                this.f34638q = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 32:
                                this.f34636o |= 4;
                                this.f34639r = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 42:
                                boolean z18 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z18) {
                                    this.f34640s = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f34640s.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 50:
                                boolean z19 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z19) {
                                    this.f34641t = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f34641t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                boolean z20 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z20) {
                                    this.f34644w = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f34644w.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 58:
                                int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z21 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z21) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34644w = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34644w.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit2);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 66:
                                boolean z22 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z22) {
                                    this.B = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.B.add(codedInputStream.readMessage(Constructor.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 74:
                                boolean z23 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z23) {
                                    this.C = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.C.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 82:
                                boolean z24 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z24) {
                                    this.D = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.D.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 90:
                                boolean z25 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z25) {
                                    this.E = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.E.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 106:
                                boolean z26 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z26) {
                                    this.F = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.F.add(codedInputStream.readMessage(EnumEntry.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT /* 128 */:
                                boolean z27 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z27) {
                                    this.G = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.G.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 130:
                                int pushLimit3 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z28 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z28) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.G = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.G.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit3);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 136:
                                this.f34636o |= 8;
                                this.I = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                                Type.Builder builder = (this.f34636o & 16) == 16 ? this.J.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.J = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.J = builder.buildPartial();
                                }
                                this.f34636o |= 16;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 152:
                                this.f34636o |= 32;
                                this.K = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 162:
                                boolean z29 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z29) {
                                    this.f34646y = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f34646y.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 168:
                                boolean z30 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z30) {
                                    this.f34647z = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f34647z.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 170:
                                int pushLimit4 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z31 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z31) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34647z = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34647z.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit4);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 176:
                                boolean z32 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z32) {
                                    this.L = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.L.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 178:
                                int pushLimit5 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z33 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z33) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.L = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.L.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit5);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 186:
                                boolean z34 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z34) {
                                    this.N = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.N.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 192:
                                boolean z35 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z35) {
                                    this.O = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.O.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 194:
                                int pushLimit6 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z36 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z36) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.O = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.O.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit6);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 242:
                                TypeTable.Builder builder2 = (this.f34636o & 64) == 64 ? this.Q.toBuilder() : null;
                                TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                this.Q = typeTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(typeTable);
                                    this.Q = builder2.buildPartial();
                                }
                                this.f34636o |= 64;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 248:
                                boolean z37 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z37) {
                                    this.R = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.R.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                int pushLimit7 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z38 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z38) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.R = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.R.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit7);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 258:
                                VersionRequirementTable.Builder builder3 = (this.f34636o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.S.toBuilder() : null;
                                VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                this.S = versionRequirementTable;
                                if (builder3 != null) {
                                    builder3.mergeFrom(versionRequirementTable);
                                    this.S = builder3.buildPartial();
                                }
                                this.f34636o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 266:
                                boolean z39 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z39) {
                                    this.T = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                z10 = true;
                                try {
                                    try {
                                        this.T.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                        continue;
                                        z12 = z15;
                                        z14 = z14;
                                    } catch (Throwable th2) {
                                        th = th2;
                                        z11 = z14;
                                        if (z11 & true) {
                                            this.f34642u = Collections.unmodifiableList(this.f34642u);
                                        }
                                        if (z11 & true) {
                                            this.f34640s = Collections.unmodifiableList(this.f34640s);
                                        }
                                        if (z11 & true) {
                                            this.f34641t = Collections.unmodifiableList(this.f34641t);
                                        }
                                        if ((z11 & true) == c10) {
                                            this.f34644w = Collections.unmodifiableList(this.f34644w);
                                        }
                                        if (z11 & true) {
                                            this.B = Collections.unmodifiableList(this.B);
                                        }
                                        if (z11 & true) {
                                            this.C = Collections.unmodifiableList(this.C);
                                        }
                                        if (z11 & true) {
                                            this.D = Collections.unmodifiableList(this.D);
                                        }
                                        if (z11 & true) {
                                            this.E = Collections.unmodifiableList(this.E);
                                        }
                                        if (z11 & true) {
                                            this.F = Collections.unmodifiableList(this.F);
                                        }
                                        if (z11 & true) {
                                            this.G = Collections.unmodifiableList(this.G);
                                        }
                                        if (z11 & true) {
                                            this.f34646y = Collections.unmodifiableList(this.f34646y);
                                        }
                                        if (z11 & true) {
                                            this.f34647z = Collections.unmodifiableList(this.f34647z);
                                        }
                                        if (z11 & true) {
                                            this.L = Collections.unmodifiableList(this.L);
                                        }
                                        if (z11 & true) {
                                            this.N = Collections.unmodifiableList(this.N);
                                        }
                                        if (z11 & true) {
                                            this.O = Collections.unmodifiableList(this.O);
                                        }
                                        if (z11 & true) {
                                            this.R = Collections.unmodifiableList(this.R);
                                        }
                                        if ((z11 & z10) == z10) {
                                            this.T = Collections.unmodifiableList(this.T);
                                        }
                                        try {
                                            newInstance.flush();
                                        } catch (IOException unused) {
                                        } catch (Throwable th3) {
                                            this.f34635i = newOutput.toByteString();
                                            throw th3;
                                        }
                                        this.f34635i = newOutput.toByteString();
                                        e();
                                        throw th;
                                    }
                                } catch (InvalidProtocolBufferException e10) {
                                    e = e10;
                                    throw e.setUnfinishedMessage(this);
                                } catch (IOException e11) {
                                    e = e11;
                                    throw new InvalidProtocolBufferException(e.getMessage()).setUnfinishedMessage(this);
                                }
                            default:
                                r42 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                if (r42 != 0) {
                                    continue;
                                    z12 = z15;
                                    z14 = z14;
                                }
                                break;
                        }
                        z13 = z15;
                        z12 = z15;
                        z14 = z14;
                    } catch (InvalidProtocolBufferException e12) {
                        e = e12;
                    } catch (IOException e13) {
                        e = e13;
                    } catch (Throwable th4) {
                        th = th4;
                        z10 = true;
                        c10 = r42;
                        z11 = z14;
                    }
                } else {
                    if ((z14 ? 1 : 0) & true) {
                        this.f34642u = Collections.unmodifiableList(this.f34642u);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f34640s = Collections.unmodifiableList(this.f34640s);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f34641t = Collections.unmodifiableList(this.f34641t);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f34644w = Collections.unmodifiableList(this.f34644w);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.B = Collections.unmodifiableList(this.B);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.C = Collections.unmodifiableList(this.C);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.D = Collections.unmodifiableList(this.D);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.E = Collections.unmodifiableList(this.E);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.F = Collections.unmodifiableList(this.F);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.G = Collections.unmodifiableList(this.G);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f34646y = Collections.unmodifiableList(this.f34646y);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f34647z = Collections.unmodifiableList(this.f34647z);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.L = Collections.unmodifiableList(this.L);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.N = Collections.unmodifiableList(this.N);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.O = Collections.unmodifiableList(this.O);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.R = Collections.unmodifiableList(this.R);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.T = Collections.unmodifiableList(this.T);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th5) {
                        this.f34635i = newOutput.toByteString();
                        throw th5;
                    }
                    this.f34635i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ClassOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class CompilerPluginData extends GeneratedMessageLite implements CompilerPluginDataOrBuilder {
        public static Parser<CompilerPluginData> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final CompilerPluginData f34663s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34664e;

        /* renamed from: i  reason: collision with root package name */
        private int f34665i;

        /* renamed from: o  reason: collision with root package name */
        private int f34666o;

        /* renamed from: p  reason: collision with root package name */
        private ByteString f34667p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34668q;

        /* renamed from: r  reason: collision with root package name */
        private int f34669r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<CompilerPluginData, Builder> implements CompilerPluginDataOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34670e;

            /* renamed from: i  reason: collision with root package name */
            private int f34671i;

            /* renamed from: o  reason: collision with root package name */
            private ByteString f34672o = ByteString.EMPTY;

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public CompilerPluginData buildPartial() {
                CompilerPluginData compilerPluginData = new CompilerPluginData(this);
                int i10 = this.f34670e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                compilerPluginData.f34666o = this.f34671i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                compilerPluginData.f34667p = this.f34672o;
                compilerPluginData.f34665i = i11;
                return compilerPluginData;
            }

            public boolean hasData() {
                if ((this.f34670e & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasPluginId() {
                if ((this.f34670e & 1) == 1) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasPluginId() || !hasData()) {
                    return false;
                }
                return true;
            }

            public Builder setData(ByteString byteString) {
                byteString.getClass();
                this.f34670e |= 2;
                this.f34672o = byteString;
                return this;
            }

            public Builder setPluginId(int i10) {
                this.f34670e |= 1;
                this.f34671i = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public CompilerPluginData build() {
                CompilerPluginData buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public CompilerPluginData getDefaultInstanceForType() {
                return CompilerPluginData.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(CompilerPluginData compilerPluginData) {
                if (compilerPluginData == CompilerPluginData.getDefaultInstance()) {
                    return this;
                }
                if (compilerPluginData.hasPluginId()) {
                    setPluginId(compilerPluginData.getPluginId());
                }
                if (compilerPluginData.hasData()) {
                    setData(compilerPluginData.getData());
                }
                setUnknownFields(getUnknownFields().concat(compilerPluginData.f34664e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public CompilerPluginData parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new CompilerPluginData(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            CompilerPluginData compilerPluginData = new CompilerPluginData(true);
            f34663s = compilerPluginData;
            compilerPluginData.l();
        }

        public static CompilerPluginData getDefaultInstance() {
            return f34663s;
        }

        private void l() {
            this.f34666o = 0;
            this.f34667p = ByteString.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public ByteString getData() {
            return this.f34667p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<CompilerPluginData> getParserForType() {
            return PARSER;
        }

        public int getPluginId() {
            return this.f34666o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34669r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34665i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34666o);
            } else {
                i10 = 0;
            }
            if ((this.f34665i & 2) == 2) {
                i10 += CodedOutputStream.computeBytesSize(2, this.f34667p);
            }
            int size = i10 + this.f34664e.size();
            this.f34669r = size;
            return size;
        }

        public boolean hasData() {
            if ((this.f34665i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasPluginId() {
            if ((this.f34665i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34668q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasPluginId()) {
                this.f34668q = (byte) 0;
                return false;
            } else if (!hasData()) {
                this.f34668q = (byte) 0;
                return false;
            } else {
                this.f34668q = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34665i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34666o);
            }
            if ((this.f34665i & 2) == 2) {
                codedOutputStream.writeBytes(2, this.f34667p);
            }
            codedOutputStream.writeRawBytes(this.f34664e);
        }

        public static Builder newBuilder(CompilerPluginData compilerPluginData) {
            return newBuilder().mergeFrom(compilerPluginData);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public CompilerPluginData getDefaultInstanceForType() {
            return f34663s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private CompilerPluginData(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34668q = (byte) -1;
            this.f34669r = -1;
            this.f34664e = builder.getUnknownFields();
        }

        private CompilerPluginData(boolean z10) {
            this.f34668q = (byte) -1;
            this.f34669r = -1;
            this.f34664e = ByteString.EMPTY;
        }

        private CompilerPluginData(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34668q = (byte) -1;
            this.f34669r = -1;
            l();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34665i |= 1;
                                this.f34666o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f34665i |= 2;
                                this.f34667p = codedInputStream.readBytes();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34664e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34664e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34664e = newOutput.toByteString();
                throw th4;
            }
            this.f34664e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface CompilerPluginDataOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Constructor extends GeneratedMessageLite.ExtendableMessage<Constructor> implements ConstructorOrBuilder {
        public static Parser<Constructor> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final Constructor f34673v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34674i;

        /* renamed from: o  reason: collision with root package name */
        private int f34675o;

        /* renamed from: p  reason: collision with root package name */
        private int f34676p;

        /* renamed from: q  reason: collision with root package name */
        private List f34677q;

        /* renamed from: r  reason: collision with root package name */
        private List f34678r;

        /* renamed from: s  reason: collision with root package name */
        private List f34679s;

        /* renamed from: t  reason: collision with root package name */
        private byte f34680t;

        /* renamed from: u  reason: collision with root package name */
        private int f34681u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Constructor, Builder> implements ConstructorOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34682o;

            /* renamed from: p  reason: collision with root package name */
            private int f34683p = 6;

            /* renamed from: q  reason: collision with root package name */
            private List f34684q;

            /* renamed from: r  reason: collision with root package name */
            private List f34685r;

            /* renamed from: s  reason: collision with root package name */
            private List f34686s;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34684q = list;
                this.f34685r = list;
                this.f34686s = list;
                m();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34682o & 8) != 8) {
                    this.f34686s = new ArrayList(this.f34686s);
                    this.f34682o |= 8;
                }
            }

            private void k() {
                if ((this.f34682o & 2) != 2) {
                    this.f34684q = new ArrayList(this.f34684q);
                    this.f34682o |= 2;
                }
            }

            private void l() {
                if ((this.f34682o & 4) != 4) {
                    this.f34685r = new ArrayList(this.f34685r);
                    this.f34682o |= 4;
                }
            }

            private void m() {
            }

            public Constructor buildPartial() {
                Constructor constructor = new Constructor(this);
                int i10 = 1;
                if ((this.f34682o & 1) != 1) {
                    i10 = 0;
                }
                constructor.f34676p = this.f34683p;
                if ((this.f34682o & 2) == 2) {
                    this.f34684q = Collections.unmodifiableList(this.f34684q);
                    this.f34682o &= -3;
                }
                constructor.f34677q = this.f34684q;
                if ((this.f34682o & 4) == 4) {
                    this.f34685r = Collections.unmodifiableList(this.f34685r);
                    this.f34682o &= -5;
                }
                constructor.f34678r = this.f34685r;
                if ((this.f34682o & 8) == 8) {
                    this.f34686s = Collections.unmodifiableList(this.f34686s);
                    this.f34682o &= -9;
                }
                constructor.f34679s = this.f34686s;
                constructor.f34675o = i10;
                return constructor;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f34686s.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f34686s.size();
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f34684q.get(i10);
            }

            public int getValueParameterCount() {
                return this.f34684q.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                    if (!getValueParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                    if (!getCompilerPluginData(i11).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder setFlags(int i10) {
                this.f34682o |= 1;
                this.f34683p = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Constructor build() {
                Constructor buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Constructor getDefaultInstanceForType() {
                return Constructor.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Constructor constructor) {
                if (constructor == Constructor.getDefaultInstance()) {
                    return this;
                }
                if (constructor.hasFlags()) {
                    setFlags(constructor.getFlags());
                }
                if (!constructor.f34677q.isEmpty()) {
                    if (this.f34684q.isEmpty()) {
                        this.f34684q = constructor.f34677q;
                        this.f34682o &= -3;
                    } else {
                        k();
                        this.f34684q.addAll(constructor.f34677q);
                    }
                }
                if (!constructor.f34678r.isEmpty()) {
                    if (this.f34685r.isEmpty()) {
                        this.f34685r = constructor.f34678r;
                        this.f34682o &= -5;
                    } else {
                        l();
                        this.f34685r.addAll(constructor.f34678r);
                    }
                }
                if (!constructor.f34679s.isEmpty()) {
                    if (this.f34686s.isEmpty()) {
                        this.f34686s = constructor.f34679s;
                        this.f34682o &= -9;
                    } else {
                        j();
                        this.f34686s.addAll(constructor.f34679s);
                    }
                }
                f(constructor);
                setUnknownFields(getUnknownFields().concat(constructor.f34674i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Constructor parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Constructor(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Constructor constructor = new Constructor(true);
            f34673v = constructor;
            constructor.v();
        }

        public static Constructor getDefaultInstance() {
            return f34673v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void v() {
            this.f34676p = 6;
            List list = Collections.EMPTY_LIST;
            this.f34677q = list;
            this.f34678r = list;
            this.f34679s = list;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f34679s.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f34679s.size();
        }

        public int getFlags() {
            return this.f34676p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Constructor> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34681u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34675o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34676p);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f34677q.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f34677q.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f34678r.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34678r.get(i14)).intValue());
            }
            int size = i10 + i13 + (getVersionRequirementList().size() * 2);
            for (int i15 = 0; i15 < this.f34679s.size(); i15++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f34679s.get(i15));
            }
            int j10 = size + j() + this.f34674i.size();
            this.f34681u = j10;
            return j10;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.f34677q.get(i10);
        }

        public int getValueParameterCount() {
            return this.f34677q.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.f34677q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f34678r;
        }

        public boolean hasFlags() {
            if ((this.f34675o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34680t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                if (!getValueParameter(i10).isInitialized()) {
                    this.f34680t = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                if (!getCompilerPluginData(i11).isInitialized()) {
                    this.f34680t = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.f34680t = (byte) 0;
                return false;
            }
            this.f34680t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34675o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34676p);
            }
            for (int i10 = 0; i10 < this.f34677q.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f34677q.get(i10));
            }
            for (int i11 = 0; i11 < this.f34678r.size(); i11++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f34678r.get(i11)).intValue());
            }
            for (int i12 = 0; i12 < this.f34679s.size(); i12++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f34679s.get(i12));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34674i);
        }

        public static Builder newBuilder(Constructor constructor) {
            return newBuilder().mergeFrom(constructor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Constructor getDefaultInstanceForType() {
            return f34673v;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Constructor(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34680t = (byte) -1;
            this.f34681u = -1;
            this.f34674i = extendableBuilder.getUnknownFields();
        }

        private Constructor(boolean z10) {
            this.f34680t = (byte) -1;
            this.f34681u = -1;
            this.f34674i = ByteString.EMPTY;
        }

        private Constructor(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34680t = (byte) -1;
            this.f34681u = -1;
            v();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34675o |= 1;
                                this.f34676p = codedInputStream.readInt32();
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f34677q = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34677q.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                            } else if (readTag == 248) {
                                if (!(z11 & true)) {
                                    this.f34678r = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34678r.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag == 250) {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34678r = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34678r.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            } else if (readTag != 258) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f34679s = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34679s.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f34677q = Collections.unmodifiableList(this.f34677q);
                        }
                        if (z11 & true) {
                            this.f34678r = Collections.unmodifiableList(this.f34678r);
                        }
                        if (z11 & true) {
                            this.f34679s = Collections.unmodifiableList(this.f34679s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34674i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34674i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f34677q = Collections.unmodifiableList(this.f34677q);
            }
            if (z11 & true) {
                this.f34678r = Collections.unmodifiableList(this.f34678r);
            }
            if (z11 & true) {
                this.f34679s = Collections.unmodifiableList(this.f34679s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34674i = newOutput.toByteString();
                throw th4;
            }
            this.f34674i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ConstructorOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Contract extends GeneratedMessageLite implements ContractOrBuilder {
        public static Parser<Contract> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final Contract f34687q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34688e;

        /* renamed from: i  reason: collision with root package name */
        private List f34689i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34690o;

        /* renamed from: p  reason: collision with root package name */
        private int f34691p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Contract, Builder> implements ContractOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34692e;

            /* renamed from: i  reason: collision with root package name */
            private List f34693i = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34692e & 1) != 1) {
                    this.f34693i = new ArrayList(this.f34693i);
                    this.f34692e |= 1;
                }
            }

            private void e() {
            }

            public Contract buildPartial() {
                Contract contract = new Contract(this);
                if ((this.f34692e & 1) == 1) {
                    this.f34693i = Collections.unmodifiableList(this.f34693i);
                    this.f34692e &= -2;
                }
                contract.f34689i = this.f34693i;
                return contract;
            }

            public Effect getEffect(int i10) {
                return (Effect) this.f34693i.get(i10);
            }

            public int getEffectCount() {
                return this.f34693i.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getEffectCount(); i10++) {
                    if (!getEffect(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Contract build() {
                Contract buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Contract getDefaultInstanceForType() {
                return Contract.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Contract contract) {
                if (contract == Contract.getDefaultInstance()) {
                    return this;
                }
                if (!contract.f34689i.isEmpty()) {
                    if (this.f34693i.isEmpty()) {
                        this.f34693i = contract.f34689i;
                        this.f34692e &= -2;
                    } else {
                        d();
                        this.f34693i.addAll(contract.f34689i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(contract.f34688e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Contract parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Contract(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Contract contract = new Contract(true);
            f34687q = contract;
            contract.k();
        }

        public static Contract getDefaultInstance() {
            return f34687q;
        }

        private void k() {
            this.f34689i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Effect getEffect(int i10) {
            return (Effect) this.f34689i.get(i10);
        }

        public int getEffectCount() {
            return this.f34689i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Contract> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34691p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34689i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34689i.get(i12));
            }
            int size = i11 + this.f34688e.size();
            this.f34691p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34690o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectCount(); i10++) {
                if (!getEffect(i10).isInitialized()) {
                    this.f34690o = (byte) 0;
                    return false;
                }
            }
            this.f34690o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34689i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34689i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34688e);
        }

        public static Builder newBuilder(Contract contract) {
            return newBuilder().mergeFrom(contract);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Contract getDefaultInstanceForType() {
            return f34687q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Contract(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34690o = (byte) -1;
            this.f34691p = -1;
            this.f34688e = builder.getUnknownFields();
        }

        private Contract(boolean z10) {
            this.f34690o = (byte) -1;
            this.f34691p = -1;
            this.f34688e = ByteString.EMPTY;
        }

        private Contract(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34690o = (byte) -1;
            this.f34691p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    if (!z11) {
                                        this.f34689i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34689i.add(codedInputStream.readMessage(Effect.PARSER, extensionRegistryLite));
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f34689i = Collections.unmodifiableList(this.f34689i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34688e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34688e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34689i = Collections.unmodifiableList(this.f34689i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34688e = newOutput.toByteString();
                throw th4;
            }
            this.f34688e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ContractOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Effect extends GeneratedMessageLite implements EffectOrBuilder {
        public static Parser<Effect> PARSER = new a();

        /* renamed from: u  reason: collision with root package name */
        private static final Effect f34694u;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34695e;

        /* renamed from: i  reason: collision with root package name */
        private int f34696i;

        /* renamed from: o  reason: collision with root package name */
        private EffectType f34697o;

        /* renamed from: p  reason: collision with root package name */
        private List f34698p;

        /* renamed from: q  reason: collision with root package name */
        private Expression f34699q;

        /* renamed from: r  reason: collision with root package name */
        private InvocationKind f34700r;

        /* renamed from: s  reason: collision with root package name */
        private byte f34701s;

        /* renamed from: t  reason: collision with root package name */
        private int f34702t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Effect, Builder> implements EffectOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34703e;

            /* renamed from: i  reason: collision with root package name */
            private EffectType f34704i = EffectType.RETURNS_CONSTANT;

            /* renamed from: o  reason: collision with root package name */
            private List f34705o = Collections.EMPTY_LIST;

            /* renamed from: p  reason: collision with root package name */
            private Expression f34706p = Expression.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private InvocationKind f34707q = InvocationKind.AT_MOST_ONCE;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34703e & 2) != 2) {
                    this.f34705o = new ArrayList(this.f34705o);
                    this.f34703e |= 2;
                }
            }

            private void e() {
            }

            public Effect buildPartial() {
                Effect effect = new Effect(this);
                int i10 = this.f34703e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                effect.f34697o = this.f34704i;
                if ((this.f34703e & 2) == 2) {
                    this.f34705o = Collections.unmodifiableList(this.f34705o);
                    this.f34703e &= -3;
                }
                effect.f34698p = this.f34705o;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                effect.f34699q = this.f34706p;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                effect.f34700r = this.f34707q;
                effect.f34696i = i11;
                return effect;
            }

            public Expression getConclusionOfConditionalEffect() {
                return this.f34706p;
            }

            public Expression getEffectConstructorArgument(int i10) {
                return (Expression) this.f34705o.get(i10);
            }

            public int getEffectConstructorArgumentCount() {
                return this.f34705o.size();
            }

            public boolean hasConclusionOfConditionalEffect() {
                if ((this.f34703e & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                    if (!getEffectConstructorArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                    return false;
                }
                return true;
            }

            public Builder mergeConclusionOfConditionalEffect(Expression expression) {
                if ((this.f34703e & 4) == 4 && this.f34706p != Expression.getDefaultInstance()) {
                    this.f34706p = Expression.newBuilder(this.f34706p).mergeFrom(expression).buildPartial();
                } else {
                    this.f34706p = expression;
                }
                this.f34703e |= 4;
                return this;
            }

            public Builder setEffectType(EffectType effectType) {
                effectType.getClass();
                this.f34703e |= 1;
                this.f34704i = effectType;
                return this;
            }

            public Builder setKind(InvocationKind invocationKind) {
                invocationKind.getClass();
                this.f34703e |= 8;
                this.f34707q = invocationKind;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Effect build() {
                Effect buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Effect getDefaultInstanceForType() {
                return Effect.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Effect effect) {
                if (effect == Effect.getDefaultInstance()) {
                    return this;
                }
                if (effect.hasEffectType()) {
                    setEffectType(effect.getEffectType());
                }
                if (!effect.f34698p.isEmpty()) {
                    if (this.f34705o.isEmpty()) {
                        this.f34705o = effect.f34698p;
                        this.f34703e &= -3;
                    } else {
                        d();
                        this.f34705o.addAll(effect.f34698p);
                    }
                }
                if (effect.hasConclusionOfConditionalEffect()) {
                    mergeConclusionOfConditionalEffect(effect.getConclusionOfConditionalEffect());
                }
                if (effect.hasKind()) {
                    setKind(effect.getKind());
                }
                setUnknownFields(getUnknownFields().concat(effect.f34695e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum EffectType implements Internal.EnumLite {
            RETURNS_CONSTANT(0, 0),
            CALLS(1, 1),
            RETURNS_NOT_NULL(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34708e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34710d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public EffectType findValueByNumber(int i10) {
                    return EffectType.valueOf(i10);
                }
            }

            EffectType(int i10, int i11) {
                this.f34710d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34710d;
            }

            public static EffectType valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return RETURNS_NOT_NULL;
                    }
                    return CALLS;
                }
                return RETURNS_CONSTANT;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum InvocationKind implements Internal.EnumLite {
            AT_MOST_ONCE(0, 0),
            EXACTLY_ONCE(1, 1),
            AT_LEAST_ONCE(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34711e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34713d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public InvocationKind findValueByNumber(int i10) {
                    return InvocationKind.valueOf(i10);
                }
            }

            InvocationKind(int i10, int i11) {
                this.f34713d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34713d;
            }

            public static InvocationKind valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return AT_LEAST_ONCE;
                    }
                    return EXACTLY_ONCE;
                }
                return AT_MOST_ONCE;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Effect parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Effect(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Effect effect = new Effect(true);
            f34694u = effect;
            effect.o();
        }

        public static Effect getDefaultInstance() {
            return f34694u;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f34697o = EffectType.RETURNS_CONSTANT;
            this.f34698p = Collections.EMPTY_LIST;
            this.f34699q = Expression.getDefaultInstance();
            this.f34700r = InvocationKind.AT_MOST_ONCE;
        }

        public Expression getConclusionOfConditionalEffect() {
            return this.f34699q;
        }

        public Expression getEffectConstructorArgument(int i10) {
            return (Expression) this.f34698p.get(i10);
        }

        public int getEffectConstructorArgumentCount() {
            return this.f34698p.size();
        }

        public EffectType getEffectType() {
            return this.f34697o;
        }

        public InvocationKind getKind() {
            return this.f34700r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Effect> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34702t;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34696i & 1) == 1) {
                i10 = CodedOutputStream.computeEnumSize(1, this.f34697o.getNumber());
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f34698p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f34698p.get(i12));
            }
            if ((this.f34696i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34699q);
            }
            if ((this.f34696i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f34700r.getNumber());
            }
            int size = i10 + this.f34695e.size();
            this.f34702t = size;
            return size;
        }

        public boolean hasConclusionOfConditionalEffect() {
            if ((this.f34696i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasEffectType() {
            if ((this.f34696i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasKind() {
            if ((this.f34696i & 4) == 4) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34701s;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                if (!getEffectConstructorArgument(i10).isInitialized()) {
                    this.f34701s = (byte) 0;
                    return false;
                }
            }
            if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                this.f34701s = (byte) 0;
                return false;
            }
            this.f34701s = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34696i & 1) == 1) {
                codedOutputStream.writeEnum(1, this.f34697o.getNumber());
            }
            for (int i10 = 0; i10 < this.f34698p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f34698p.get(i10));
            }
            if ((this.f34696i & 2) == 2) {
                codedOutputStream.writeMessage(3, this.f34699q);
            }
            if ((this.f34696i & 4) == 4) {
                codedOutputStream.writeEnum(4, this.f34700r.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f34695e);
        }

        public static Builder newBuilder(Effect effect) {
            return newBuilder().mergeFrom(effect);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Effect getDefaultInstanceForType() {
            return f34694u;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Effect(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34701s = (byte) -1;
            this.f34702t = -1;
            this.f34695e = builder.getUnknownFields();
        }

        private Effect(boolean z10) {
            this.f34701s = (byte) -1;
            this.f34702t = -1;
            this.f34695e = ByteString.EMPTY;
        }

        private Effect(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34701s = (byte) -1;
            this.f34702t = -1;
            o();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                int readEnum = codedInputStream.readEnum();
                                EffectType valueOf = EffectType.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34696i |= 1;
                                    this.f34697o = valueOf;
                                }
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f34698p = new ArrayList();
                                    z11 = true;
                                }
                                this.f34698p.add(codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite));
                            } else if (readTag == 26) {
                                Expression.Builder builder = (this.f34696i & 2) == 2 ? this.f34699q.toBuilder() : null;
                                Expression expression = (Expression) codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite);
                                this.f34699q = expression;
                                if (builder != null) {
                                    builder.mergeFrom(expression);
                                    this.f34699q = builder.buildPartial();
                                }
                                this.f34696i |= 2;
                            } else if (readTag != 32) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int readEnum2 = codedInputStream.readEnum();
                                InvocationKind valueOf2 = InvocationKind.valueOf(readEnum2);
                                if (valueOf2 == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum2);
                                } else {
                                    this.f34696i |= 4;
                                    this.f34700r = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f34698p = Collections.unmodifiableList(this.f34698p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34695e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34695e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f34698p = Collections.unmodifiableList(this.f34698p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34695e = newOutput.toByteString();
                throw th4;
            }
            this.f34695e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface EffectOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class EnumEntry extends GeneratedMessageLite.ExtendableMessage<EnumEntry> implements EnumEntryOrBuilder {
        public static Parser<EnumEntry> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final EnumEntry f34714s;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34715i;

        /* renamed from: o  reason: collision with root package name */
        private int f34716o;

        /* renamed from: p  reason: collision with root package name */
        private int f34717p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34718q;

        /* renamed from: r  reason: collision with root package name */
        private int f34719r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<EnumEntry, Builder> implements EnumEntryOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34720o;

            /* renamed from: p  reason: collision with root package name */
            private int f34721p;

            private Builder() {
                j();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
            }

            public EnumEntry buildPartial() {
                EnumEntry enumEntry = new EnumEntry(this);
                int i10 = 1;
                if ((this.f34720o & 1) != 1) {
                    i10 = 0;
                }
                enumEntry.f34717p = this.f34721p;
                enumEntry.f34716o = i10;
                return enumEntry;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder setName(int i10) {
                this.f34720o |= 1;
                this.f34721p = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public EnumEntry build() {
                EnumEntry buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public EnumEntry getDefaultInstanceForType() {
                return EnumEntry.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(EnumEntry enumEntry) {
                if (enumEntry == EnumEntry.getDefaultInstance()) {
                    return this;
                }
                if (enumEntry.hasName()) {
                    setName(enumEntry.getName());
                }
                f(enumEntry);
                setUnknownFields(getUnknownFields().concat(enumEntry.f34715i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public EnumEntry parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new EnumEntry(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            EnumEntry enumEntry = new EnumEntry(true);
            f34714s = enumEntry;
            enumEntry.p();
        }

        public static EnumEntry getDefaultInstance() {
            return f34714s;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void p() {
            this.f34717p = 0;
        }

        public int getName() {
            return this.f34717p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<EnumEntry> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34719r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34716o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34717p);
            } else {
                i10 = 0;
            }
            int j10 = i10 + j() + this.f34715i.size();
            this.f34719r = j10;
            return j10;
        }

        public boolean hasName() {
            if ((this.f34716o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34718q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!i()) {
                this.f34718q = (byte) 0;
                return false;
            }
            this.f34718q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34716o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34717p);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34715i);
        }

        public static Builder newBuilder(EnumEntry enumEntry) {
            return newBuilder().mergeFrom(enumEntry);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public EnumEntry getDefaultInstanceForType() {
            return f34714s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private EnumEntry(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34718q = (byte) -1;
            this.f34719r = -1;
            this.f34715i = extendableBuilder.getUnknownFields();
        }

        private EnumEntry(boolean z10) {
            this.f34718q = (byte) -1;
            this.f34719r = -1;
            this.f34715i = ByteString.EMPTY;
        }

        private EnumEntry(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34718q = (byte) -1;
            this.f34719r = -1;
            p();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 8) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f34716o |= 1;
                                    this.f34717p = codedInputStream.readInt32();
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34715i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34715i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34715i = newOutput.toByteString();
                throw th4;
            }
            this.f34715i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface EnumEntryOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Expression extends GeneratedMessageLite implements ExpressionOrBuilder {
        public static Parser<Expression> PARSER = new a();

        /* renamed from: x  reason: collision with root package name */
        private static final Expression f34722x;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34723e;

        /* renamed from: i  reason: collision with root package name */
        private int f34724i;

        /* renamed from: o  reason: collision with root package name */
        private int f34725o;

        /* renamed from: p  reason: collision with root package name */
        private int f34726p;

        /* renamed from: q  reason: collision with root package name */
        private ConstantValue f34727q;

        /* renamed from: r  reason: collision with root package name */
        private Type f34728r;

        /* renamed from: s  reason: collision with root package name */
        private int f34729s;

        /* renamed from: t  reason: collision with root package name */
        private List f34730t;

        /* renamed from: u  reason: collision with root package name */
        private List f34731u;

        /* renamed from: v  reason: collision with root package name */
        private byte f34732v;

        /* renamed from: w  reason: collision with root package name */
        private int f34733w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Expression, Builder> implements ExpressionOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34734e;

            /* renamed from: i  reason: collision with root package name */
            private int f34735i;

            /* renamed from: o  reason: collision with root package name */
            private int f34736o;

            /* renamed from: p  reason: collision with root package name */
            private ConstantValue f34737p = ConstantValue.TRUE;

            /* renamed from: q  reason: collision with root package name */
            private Type f34738q = Type.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private int f34739r;

            /* renamed from: s  reason: collision with root package name */
            private List f34740s;

            /* renamed from: t  reason: collision with root package name */
            private List f34741t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34740s = list;
                this.f34741t = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34734e & 32) != 32) {
                    this.f34740s = new ArrayList(this.f34740s);
                    this.f34734e |= 32;
                }
            }

            private void e() {
                if ((this.f34734e & 64) != 64) {
                    this.f34741t = new ArrayList(this.f34741t);
                    this.f34734e |= 64;
                }
            }

            private void f() {
            }

            public Expression buildPartial() {
                Expression expression = new Expression(this);
                int i10 = this.f34734e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                expression.f34725o = this.f34735i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                expression.f34726p = this.f34736o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                expression.f34727q = this.f34737p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                expression.f34728r = this.f34738q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                expression.f34729s = this.f34739r;
                if ((this.f34734e & 32) == 32) {
                    this.f34740s = Collections.unmodifiableList(this.f34740s);
                    this.f34734e &= -33;
                }
                expression.f34730t = this.f34740s;
                if ((this.f34734e & 64) == 64) {
                    this.f34741t = Collections.unmodifiableList(this.f34741t);
                    this.f34734e &= -65;
                }
                expression.f34731u = this.f34741t;
                expression.f34724i = i11;
                return expression;
            }

            public Expression getAndArgument(int i10) {
                return (Expression) this.f34740s.get(i10);
            }

            public int getAndArgumentCount() {
                return this.f34740s.size();
            }

            public Type getIsInstanceType() {
                return this.f34738q;
            }

            public Expression getOrArgument(int i10) {
                return (Expression) this.f34741t.get(i10);
            }

            public int getOrArgumentCount() {
                return this.f34741t.size();
            }

            public boolean hasIsInstanceType() {
                if ((this.f34734e & 8) == 8) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                    if (!getAndArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                    if (!getOrArgument(i11).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            public Builder mergeIsInstanceType(Type type) {
                if ((this.f34734e & 8) == 8 && this.f34738q != Type.getDefaultInstance()) {
                    this.f34738q = Type.newBuilder(this.f34738q).mergeFrom(type).buildPartial();
                } else {
                    this.f34738q = type;
                }
                this.f34734e |= 8;
                return this;
            }

            public Builder setConstantValue(ConstantValue constantValue) {
                constantValue.getClass();
                this.f34734e |= 4;
                this.f34737p = constantValue;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34734e |= 1;
                this.f34735i = i10;
                return this;
            }

            public Builder setIsInstanceTypeId(int i10) {
                this.f34734e |= 16;
                this.f34739r = i10;
                return this;
            }

            public Builder setValueParameterReference(int i10) {
                this.f34734e |= 2;
                this.f34736o = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Expression build() {
                Expression buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Expression getDefaultInstanceForType() {
                return Expression.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Expression expression) {
                if (expression == Expression.getDefaultInstance()) {
                    return this;
                }
                if (expression.hasFlags()) {
                    setFlags(expression.getFlags());
                }
                if (expression.hasValueParameterReference()) {
                    setValueParameterReference(expression.getValueParameterReference());
                }
                if (expression.hasConstantValue()) {
                    setConstantValue(expression.getConstantValue());
                }
                if (expression.hasIsInstanceType()) {
                    mergeIsInstanceType(expression.getIsInstanceType());
                }
                if (expression.hasIsInstanceTypeId()) {
                    setIsInstanceTypeId(expression.getIsInstanceTypeId());
                }
                if (!expression.f34730t.isEmpty()) {
                    if (this.f34740s.isEmpty()) {
                        this.f34740s = expression.f34730t;
                        this.f34734e &= -33;
                    } else {
                        d();
                        this.f34740s.addAll(expression.f34730t);
                    }
                }
                if (!expression.f34731u.isEmpty()) {
                    if (this.f34741t.isEmpty()) {
                        this.f34741t = expression.f34731u;
                        this.f34734e &= -65;
                    } else {
                        e();
                        this.f34741t.addAll(expression.f34731u);
                    }
                }
                setUnknownFields(getUnknownFields().concat(expression.f34723e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum ConstantValue implements Internal.EnumLite {
            TRUE(0, 0),
            FALSE(1, 1),
            NULL(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34742e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34744d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public ConstantValue findValueByNumber(int i10) {
                    return ConstantValue.valueOf(i10);
                }
            }

            ConstantValue(int i10, int i11) {
                this.f34744d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34744d;
            }

            public static ConstantValue valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return NULL;
                    }
                    return FALSE;
                }
                return TRUE;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Expression parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Expression(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Expression expression = new Expression(true);
            f34722x = expression;
            expression.s();
        }

        public static Expression getDefaultInstance() {
            return f34722x;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void s() {
            this.f34725o = 0;
            this.f34726p = 0;
            this.f34727q = ConstantValue.TRUE;
            this.f34728r = Type.getDefaultInstance();
            this.f34729s = 0;
            List list = Collections.EMPTY_LIST;
            this.f34730t = list;
            this.f34731u = list;
        }

        public Expression getAndArgument(int i10) {
            return (Expression) this.f34730t.get(i10);
        }

        public int getAndArgumentCount() {
            return this.f34730t.size();
        }

        public ConstantValue getConstantValue() {
            return this.f34727q;
        }

        public int getFlags() {
            return this.f34725o;
        }

        public Type getIsInstanceType() {
            return this.f34728r;
        }

        public int getIsInstanceTypeId() {
            return this.f34729s;
        }

        public Expression getOrArgument(int i10) {
            return (Expression) this.f34731u.get(i10);
        }

        public int getOrArgumentCount() {
            return this.f34731u.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Expression> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34733w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34724i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34725o);
            } else {
                i10 = 0;
            }
            if ((this.f34724i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34726p);
            }
            if ((this.f34724i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f34727q.getNumber());
            }
            if ((this.f34724i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34728r);
            }
            if ((this.f34724i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34729s);
            }
            for (int i12 = 0; i12 < this.f34730t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f34730t.get(i12));
            }
            for (int i13 = 0; i13 < this.f34731u.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(7, (MessageLite) this.f34731u.get(i13));
            }
            int size = i10 + this.f34723e.size();
            this.f34733w = size;
            return size;
        }

        public int getValueParameterReference() {
            return this.f34726p;
        }

        public boolean hasConstantValue() {
            if ((this.f34724i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34724i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceType() {
            if ((this.f34724i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceTypeId() {
            if ((this.f34724i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasValueParameterReference() {
            if ((this.f34724i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34732v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                this.f34732v = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                if (!getAndArgument(i10).isInitialized()) {
                    this.f34732v = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                if (!getOrArgument(i11).isInitialized()) {
                    this.f34732v = (byte) 0;
                    return false;
                }
            }
            this.f34732v = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34724i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34725o);
            }
            if ((this.f34724i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34726p);
            }
            if ((this.f34724i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f34727q.getNumber());
            }
            if ((this.f34724i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f34728r);
            }
            if ((this.f34724i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f34729s);
            }
            for (int i10 = 0; i10 < this.f34730t.size(); i10++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f34730t.get(i10));
            }
            for (int i11 = 0; i11 < this.f34731u.size(); i11++) {
                codedOutputStream.writeMessage(7, (MessageLite) this.f34731u.get(i11));
            }
            codedOutputStream.writeRawBytes(this.f34723e);
        }

        public static Builder newBuilder(Expression expression) {
            return newBuilder().mergeFrom(expression);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Expression getDefaultInstanceForType() {
            return f34722x;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Expression(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34732v = (byte) -1;
            this.f34733w = -1;
            this.f34723e = builder.getUnknownFields();
        }

        private Expression(boolean z10) {
            this.f34732v = (byte) -1;
            this.f34733w = -1;
            this.f34723e = ByteString.EMPTY;
        }

        private Expression(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34732v = (byte) -1;
            this.f34733w = -1;
            s();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34724i |= 1;
                                this.f34725o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34724i |= 2;
                                this.f34726p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                ConstantValue valueOf = ConstantValue.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34724i |= 4;
                                    this.f34727q = valueOf;
                                }
                            } else if (readTag == 34) {
                                Type.Builder builder = (this.f34724i & 8) == 8 ? this.f34728r.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.f34728r = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.f34728r = builder.buildPartial();
                                }
                                this.f34724i |= 8;
                            } else if (readTag == 40) {
                                this.f34724i |= 16;
                                this.f34729s = codedInputStream.readInt32();
                            } else if (readTag == 50) {
                                if (!(z11 & true)) {
                                    this.f34730t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34730t.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            } else if (readTag != 58) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f34731u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34731u.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f34730t = Collections.unmodifiableList(this.f34730t);
                        }
                        if (z11 & true) {
                            this.f34731u = Collections.unmodifiableList(this.f34731u);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34723e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34723e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f34730t = Collections.unmodifiableList(this.f34730t);
            }
            if (z11 & true) {
                this.f34731u = Collections.unmodifiableList(this.f34731u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34723e = newOutput.toByteString();
                throw th4;
            }
            this.f34723e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ExpressionOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Function extends GeneratedMessageLite.ExtendableMessage<Function> implements FunctionOrBuilder {
        private static final Function H;
        public static Parser<Function> PARSER = new a();
        private List A;
        private TypeTable B;
        private List C;
        private Contract D;
        private List E;
        private byte F;
        private int G;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34745i;

        /* renamed from: o  reason: collision with root package name */
        private int f34746o;

        /* renamed from: p  reason: collision with root package name */
        private int f34747p;

        /* renamed from: q  reason: collision with root package name */
        private int f34748q;

        /* renamed from: r  reason: collision with root package name */
        private int f34749r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34750s;

        /* renamed from: t  reason: collision with root package name */
        private int f34751t;

        /* renamed from: u  reason: collision with root package name */
        private List f34752u;

        /* renamed from: v  reason: collision with root package name */
        private Type f34753v;

        /* renamed from: w  reason: collision with root package name */
        private int f34754w;

        /* renamed from: x  reason: collision with root package name */
        private List f34755x;

        /* renamed from: y  reason: collision with root package name */
        private List f34756y;

        /* renamed from: z  reason: collision with root package name */
        private int f34757z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Function, Builder> implements FunctionOrBuilder {
            private TypeTable A;
            private List B;
            private Contract C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f34758o;

            /* renamed from: r  reason: collision with root package name */
            private int f34761r;

            /* renamed from: t  reason: collision with root package name */
            private int f34763t;

            /* renamed from: u  reason: collision with root package name */
            private List f34764u;

            /* renamed from: v  reason: collision with root package name */
            private Type f34765v;

            /* renamed from: w  reason: collision with root package name */
            private int f34766w;

            /* renamed from: x  reason: collision with root package name */
            private List f34767x;

            /* renamed from: y  reason: collision with root package name */
            private List f34768y;

            /* renamed from: z  reason: collision with root package name */
            private List f34769z;

            /* renamed from: p  reason: collision with root package name */
            private int f34759p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f34760q = 6;

            /* renamed from: s  reason: collision with root package name */
            private Type f34762s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34764u = list;
                this.f34765v = Type.getDefaultInstance();
                this.f34767x = list;
                this.f34768y = list;
                this.f34769z = list;
                this.A = TypeTable.getDefaultInstance();
                this.B = list;
                this.C = Contract.getDefaultInstance();
                this.D = list;
                q();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34758o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f34758o |= 16384;
                }
            }

            private void k() {
                if ((this.f34758o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34768y = new ArrayList(this.f34768y);
                    this.f34758o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34758o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34767x = new ArrayList(this.f34767x);
                    this.f34758o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f34758o & 32) != 32) {
                    this.f34764u = new ArrayList(this.f34764u);
                    this.f34758o |= 32;
                }
            }

            private void o() {
                if ((this.f34758o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f34769z = new ArrayList(this.f34769z);
                    this.f34758o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void p() {
                if ((this.f34758o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f34758o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            private void q() {
            }

            public Function buildPartial() {
                Function function = new Function(this);
                int i10 = this.f34758o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                function.f34747p = this.f34759p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                function.f34748q = this.f34760q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                function.f34749r = this.f34761r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                function.f34750s = this.f34762s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                function.f34751t = this.f34763t;
                if ((this.f34758o & 32) == 32) {
                    this.f34764u = Collections.unmodifiableList(this.f34764u);
                    this.f34758o &= -33;
                }
                function.f34752u = this.f34764u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                function.f34753v = this.f34765v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                function.f34754w = this.f34766w;
                if ((this.f34758o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34767x = Collections.unmodifiableList(this.f34767x);
                    this.f34758o &= -257;
                }
                function.f34755x = this.f34767x;
                if ((this.f34758o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34768y = Collections.unmodifiableList(this.f34768y);
                    this.f34758o &= -513;
                }
                function.f34756y = this.f34768y;
                if ((this.f34758o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f34769z = Collections.unmodifiableList(this.f34769z);
                    this.f34758o &= -1025;
                }
                function.A = this.f34769z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                function.B = this.A;
                if ((this.f34758o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f34758o &= -4097;
                }
                function.C = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                function.D = this.C;
                if ((this.f34758o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f34758o &= -16385;
                }
                function.E = this.D;
                function.f34746o = i11;
                return function;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f34767x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f34767x.size();
            }

            public Contract getContract() {
                return this.C;
            }

            public Type getReceiverType() {
                return this.f34765v;
            }

            public Type getReturnType() {
                return this.f34762s;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34764u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34764u.size();
            }

            public TypeTable getTypeTable() {
                return this.A;
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f34769z.get(i10);
            }

            public int getValueParameterCount() {
                return this.f34769z.size();
            }

            public boolean hasContract() {
                if ((this.f34758o & 8192) == 8192) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34758o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f34758o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f34758o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f34758o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                if (hasReturnType() && !getReturnType().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getValueParameterCount(); i12++) {
                    if (!getValueParameter(i12).isInitialized()) {
                        return false;
                    }
                }
                if (hasTypeTable() && !getTypeTable().isInitialized()) {
                    return false;
                }
                if (hasContract() && !getContract().isInitialized()) {
                    return false;
                }
                for (int i13 = 0; i13 < getCompilerPluginDataCount(); i13++) {
                    if (!getCompilerPluginData(i13).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeContract(Contract contract) {
                if ((this.f34758o & 8192) == 8192 && this.C != Contract.getDefaultInstance()) {
                    this.C = Contract.newBuilder(this.C).mergeFrom(contract).buildPartial();
                } else {
                    this.C = contract;
                }
                this.f34758o |= 8192;
                return this;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f34758o & 64) == 64 && this.f34765v != Type.getDefaultInstance()) {
                    this.f34765v = Type.newBuilder(this.f34765v).mergeFrom(type).buildPartial();
                } else {
                    this.f34765v = type;
                }
                this.f34758o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f34758o & 8) == 8 && this.f34762s != Type.getDefaultInstance()) {
                    this.f34762s = Type.newBuilder(this.f34762s).mergeFrom(type).buildPartial();
                } else {
                    this.f34762s = type;
                }
                this.f34758o |= 8;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f34758o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != TypeTable.getDefaultInstance()) {
                    this.A = TypeTable.newBuilder(this.A).mergeFrom(typeTable).buildPartial();
                } else {
                    this.A = typeTable;
                }
                this.f34758o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34758o |= 1;
                this.f34759p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34758o |= 4;
                this.f34761r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f34758o |= 2;
                this.f34760q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f34758o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34766w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f34758o |= 16;
                this.f34763t = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Function build() {
                Function buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Function getDefaultInstanceForType() {
                return Function.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Function function) {
                if (function == Function.getDefaultInstance()) {
                    return this;
                }
                if (function.hasFlags()) {
                    setFlags(function.getFlags());
                }
                if (function.hasOldFlags()) {
                    setOldFlags(function.getOldFlags());
                }
                if (function.hasName()) {
                    setName(function.getName());
                }
                if (function.hasReturnType()) {
                    mergeReturnType(function.getReturnType());
                }
                if (function.hasReturnTypeId()) {
                    setReturnTypeId(function.getReturnTypeId());
                }
                if (!function.f34752u.isEmpty()) {
                    if (this.f34764u.isEmpty()) {
                        this.f34764u = function.f34752u;
                        this.f34758o &= -33;
                    } else {
                        m();
                        this.f34764u.addAll(function.f34752u);
                    }
                }
                if (function.hasReceiverType()) {
                    mergeReceiverType(function.getReceiverType());
                }
                if (function.hasReceiverTypeId()) {
                    setReceiverTypeId(function.getReceiverTypeId());
                }
                if (!function.f34755x.isEmpty()) {
                    if (this.f34767x.isEmpty()) {
                        this.f34767x = function.f34755x;
                        this.f34758o &= -257;
                    } else {
                        l();
                        this.f34767x.addAll(function.f34755x);
                    }
                }
                if (!function.f34756y.isEmpty()) {
                    if (this.f34768y.isEmpty()) {
                        this.f34768y = function.f34756y;
                        this.f34758o &= -513;
                    } else {
                        k();
                        this.f34768y.addAll(function.f34756y);
                    }
                }
                if (!function.A.isEmpty()) {
                    if (this.f34769z.isEmpty()) {
                        this.f34769z = function.A;
                        this.f34758o &= -1025;
                    } else {
                        o();
                        this.f34769z.addAll(function.A);
                    }
                }
                if (function.hasTypeTable()) {
                    mergeTypeTable(function.getTypeTable());
                }
                if (!function.C.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = function.C;
                        this.f34758o &= -4097;
                    } else {
                        p();
                        this.B.addAll(function.C);
                    }
                }
                if (function.hasContract()) {
                    mergeContract(function.getContract());
                }
                if (!function.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = function.E;
                        this.f34758o &= -16385;
                    } else {
                        j();
                        this.D.addAll(function.E);
                    }
                }
                f(function);
                setUnknownFields(getUnknownFields().concat(function.f34745i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Function parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Function(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Function function = new Function(true);
            H = function;
            function.J();
        }

        private void J() {
            this.f34747p = 6;
            this.f34748q = 6;
            this.f34749r = 0;
            this.f34750s = Type.getDefaultInstance();
            this.f34751t = 0;
            List list = Collections.EMPTY_LIST;
            this.f34752u = list;
            this.f34753v = Type.getDefaultInstance();
            this.f34754w = 0;
            this.f34755x = list;
            this.f34756y = list;
            this.A = list;
            this.B = TypeTable.getDefaultInstance();
            this.C = list;
            this.D = Contract.getDefaultInstance();
            this.E = list;
        }

        public static Function getDefaultInstance() {
            return H;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static Function parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.E.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.E.size();
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f34755x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f34755x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f34756y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f34755x;
        }

        public Contract getContract() {
            return this.D;
        }

        public int getFlags() {
            return this.f34747p;
        }

        public int getName() {
            return this.f34749r;
        }

        public int getOldFlags() {
            return this.f34748q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Function> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f34753v;
        }

        public int getReceiverTypeId() {
            return this.f34754w;
        }

        public Type getReturnType() {
            return this.f34750s;
        }

        public int getReturnTypeId() {
            return this.f34751t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34746o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34748q);
            } else {
                i10 = 0;
            }
            if ((this.f34746o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34749r);
            }
            if ((this.f34746o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34750s);
            }
            for (int i12 = 0; i12 < this.f34752u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34752u.get(i12));
            }
            if ((this.f34746o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34753v);
            }
            for (int i13 = 0; i13 < this.A.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.A.get(i13));
            }
            if ((this.f34746o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34751t);
            }
            if ((this.f34746o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f34754w);
            }
            if ((this.f34746o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34747p);
            }
            for (int i14 = 0; i14 < this.f34755x.size(); i14++) {
                i10 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.f34755x.get(i14));
            }
            int i15 = 0;
            for (int i16 = 0; i16 < this.f34756y.size(); i16++) {
                i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34756y.get(i16)).intValue());
            }
            int i17 = i10 + i15;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
            }
            this.f34757z = i15;
            if ((this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i17 += CodedOutputStream.computeMessageSize(30, this.B);
            }
            int i18 = 0;
            for (int i19 = 0; i19 < this.C.size(); i19++) {
                i18 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.C.get(i19)).intValue());
            }
            int size = i17 + i18 + (getVersionRequirementList().size() * 2);
            if ((this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                size += CodedOutputStream.computeMessageSize(32, this.D);
            }
            for (int i20 = 0; i20 < this.E.size(); i20++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.E.get(i20));
            }
            int j10 = size + j() + this.f34745i.size();
            this.G = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34752u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34752u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34752u;
        }

        public TypeTable getTypeTable() {
            return this.B;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.A.get(i10);
        }

        public int getValueParameterCount() {
            return this.A.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.A;
        }

        public List<Integer> getVersionRequirementList() {
            return this.C;
        }

        public boolean hasContract() {
            if ((this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34746o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34746o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f34746o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f34746o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f34746o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f34746o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f34746o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.F;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.F = (byte) 0;
                return false;
            } else if (hasReturnType() && !getReturnType().isInitialized()) {
                this.F = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getValueParameterCount(); i12++) {
                    if (!getValueParameter(i12).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasTypeTable() && !getTypeTable().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                } else if (hasContract() && !getContract().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                } else {
                    for (int i13 = 0; i13 < getCompilerPluginDataCount(); i13++) {
                        if (!getCompilerPluginData(i13).isInitialized()) {
                            this.F = (byte) 0;
                            return false;
                        }
                    }
                    if (!i()) {
                        this.F = (byte) 0;
                        return false;
                    }
                    this.F = (byte) 1;
                    return true;
                }
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34746o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f34748q);
            }
            if ((this.f34746o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f34749r);
            }
            if ((this.f34746o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f34750s);
            }
            for (int i10 = 0; i10 < this.f34752u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34752u.get(i10));
            }
            if ((this.f34746o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f34753v);
            }
            for (int i11 = 0; i11 < this.A.size(); i11++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.A.get(i11));
            }
            if ((this.f34746o & 16) == 16) {
                codedOutputStream.writeInt32(7, this.f34751t);
            }
            if ((this.f34746o & 64) == 64) {
                codedOutputStream.writeInt32(8, this.f34754w);
            }
            if ((this.f34746o & 1) == 1) {
                codedOutputStream.writeInt32(9, this.f34747p);
            }
            for (int i12 = 0; i12 < this.f34755x.size(); i12++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.f34755x.get(i12));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(90);
                codedOutputStream.writeRawVarint32(this.f34757z);
            }
            for (int i13 = 0; i13 < this.f34756y.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34756y.get(i13)).intValue());
            }
            if ((this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(30, this.B);
            }
            for (int i14 = 0; i14 < this.C.size(); i14++) {
                codedOutputStream.writeInt32(31, ((Integer) this.C.get(i14)).intValue());
            }
            if ((this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(32, this.D);
            }
            for (int i15 = 0; i15 < this.E.size(); i15++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.E.get(i15));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34745i);
        }

        public static Builder newBuilder(Function function) {
            return newBuilder().mergeFrom(function);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Function getDefaultInstanceForType() {
            return H;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Function(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34757z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34745i = extendableBuilder.getUnknownFields();
        }

        private Function(boolean z10) {
            this.f34757z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34745i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v0 */
        /* JADX WARN: Type inference failed for: r8v1 */
        /* JADX WARN: Type inference failed for: r8v2, types: [boolean] */
        private Function(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            this.f34757z = -1;
            this.F = (byte) -1;
            this.G = -1;
            J();
            ByteString.Output newOutput = ByteString.newOutput();
            boolean z11 = true;
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z12 = false;
            boolean z13 = false;
            while (true) {
                ?? r82 = 1024;
                if (!z12) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    z10 = z11;
                                    z12 = z10;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 8:
                                    z10 = z11;
                                    this.f34746o |= 2;
                                    this.f34748q = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 16:
                                    z10 = z11;
                                    this.f34746o |= 4;
                                    this.f34749r = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    z10 = z11;
                                    Type.Builder builder = (this.f34746o & 8) == 8 ? this.f34750s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34750s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34750s = builder.buildPartial();
                                    }
                                    this.f34746o |= 8;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    z10 = z11;
                                    boolean z14 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z14) {
                                        this.f34752u = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f34752u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 42:
                                    z10 = z11;
                                    Type.Builder builder2 = (this.f34746o & 32) == 32 ? this.f34753v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34753v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f34753v = builder2.buildPartial();
                                    }
                                    this.f34746o |= 32;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 50:
                                    z10 = z11;
                                    boolean z15 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z15) {
                                        this.A = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.A.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    z10 = z11;
                                    this.f34746o |= 16;
                                    this.f34751t = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 64:
                                    z10 = z11;
                                    this.f34746o |= 64;
                                    this.f34754w = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 72:
                                    z10 = z11;
                                    this.f34746o |= 1;
                                    this.f34747p = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 82:
                                    z10 = z11;
                                    boolean z16 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z16) {
                                        this.f34755x = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f34755x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 88:
                                    z10 = z11;
                                    boolean z17 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z17) {
                                        this.f34756y = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f34756y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 90:
                                    z10 = z11;
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z18 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z18) {
                                        z13 = z13;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f34756y = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34756y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 242:
                                    z10 = z11;
                                    TypeTable.Builder builder3 = (this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.B.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.B = typeTable;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(typeTable);
                                        this.B = builder3.buildPartial();
                                    }
                                    this.f34746o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 248:
                                    z10 = z11;
                                    boolean z19 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z19) {
                                        this.C = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.C.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z20 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z20) {
                                        z13 = z13;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.C = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.C.add(Integer.valueOf(codedInputStream.readInt32()));
                                        z11 = z11;
                                    }
                                    z10 = z11;
                                    codedInputStream.popLimit(pushLimit2);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 258:
                                    Contract.Builder builder4 = (this.f34746o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.D.toBuilder() : null;
                                    Contract contract = (Contract) codedInputStream.readMessage(Contract.PARSER, extensionRegistryLite);
                                    this.D = contract;
                                    if (builder4 != null) {
                                        builder4.mergeFrom(contract);
                                        this.D = builder4.buildPartial();
                                    }
                                    this.f34746o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    z13 = z13;
                                    break;
                                case 266:
                                    boolean z21 = (z13 ? 1 : 0) & true;
                                    boolean z22 = z13;
                                    if (!z21) {
                                        this.E = new ArrayList();
                                        z22 = (z13 ? 1 : 0) | true;
                                    }
                                    this.E.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                    z13 = z22;
                                    break;
                                default:
                                    r82 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                    z13 = z13;
                                    if (r82 == 0) {
                                        z12 = z11;
                                        z10 = z12;
                                        continue;
                                        z11 = z10;
                                        z13 = z13;
                                    }
                                    break;
                            }
                            z10 = z11;
                            z11 = z10;
                            z13 = z13;
                        } catch (Throwable th2) {
                            if ((z13 ? 1 : 0) & true) {
                                this.f34752u = Collections.unmodifiableList(this.f34752u);
                            }
                            if (((z13 ? 1 : 0) & true) == r82) {
                                this.A = Collections.unmodifiableList(this.A);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f34755x = Collections.unmodifiableList(this.f34755x);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f34756y = Collections.unmodifiableList(this.f34756y);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.C = Collections.unmodifiableList(this.C);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.E = Collections.unmodifiableList(this.E);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f34745i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34745i = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } else {
                    if ((z13 ? 1 : 0) & true) {
                        this.f34752u = Collections.unmodifiableList(this.f34752u);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.A = Collections.unmodifiableList(this.A);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f34755x = Collections.unmodifiableList(this.f34755x);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f34756y = Collections.unmodifiableList(this.f34756y);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.C = Collections.unmodifiableList(this.C);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.E = Collections.unmodifiableList(this.E);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f34745i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34745i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface FunctionOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum MemberKind implements Internal.EnumLite {
        DECLARATION(0, 0),
        FAKE_OVERRIDE(1, 1),
        DELEGATION(2, 2),
        SYNTHESIZED(3, 3);
        

        /* renamed from: e  reason: collision with root package name */
        private static Internal.EnumLiteMap f34770e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f34772d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements Internal.EnumLiteMap {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
            /* renamed from: a */
            public MemberKind findValueByNumber(int i10) {
                return MemberKind.valueOf(i10);
            }
        }

        MemberKind(int i10, int i11) {
            this.f34772d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f34772d;
        }

        public static MemberKind valueOf(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return SYNTHESIZED;
                    }
                    return DELEGATION;
                }
                return FAKE_OVERRIDE;
            }
            return DECLARATION;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum Modality implements Internal.EnumLite {
        FINAL(0, 0),
        OPEN(1, 1),
        ABSTRACT(2, 2),
        SEALED(3, 3);
        

        /* renamed from: e  reason: collision with root package name */
        private static Internal.EnumLiteMap f34773e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f34775d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements Internal.EnumLiteMap {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
            /* renamed from: a */
            public Modality findValueByNumber(int i10) {
                return Modality.valueOf(i10);
            }
        }

        Modality(int i10, int i11) {
            this.f34775d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f34775d;
        }

        public static Modality valueOf(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return SEALED;
                    }
                    return ABSTRACT;
                }
                return OPEN;
            }
            return FINAL;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Package extends GeneratedMessageLite.ExtendableMessage<Package> implements PackageOrBuilder {
        public static Parser<Package> PARSER = new a();

        /* renamed from: w  reason: collision with root package name */
        private static final Package f34776w;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34777i;

        /* renamed from: o  reason: collision with root package name */
        private int f34778o;

        /* renamed from: p  reason: collision with root package name */
        private List f34779p;

        /* renamed from: q  reason: collision with root package name */
        private List f34780q;

        /* renamed from: r  reason: collision with root package name */
        private List f34781r;

        /* renamed from: s  reason: collision with root package name */
        private TypeTable f34782s;

        /* renamed from: t  reason: collision with root package name */
        private VersionRequirementTable f34783t;

        /* renamed from: u  reason: collision with root package name */
        private byte f34784u;

        /* renamed from: v  reason: collision with root package name */
        private int f34785v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Package, Builder> implements PackageOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34786o;

            /* renamed from: p  reason: collision with root package name */
            private List f34787p;

            /* renamed from: q  reason: collision with root package name */
            private List f34788q;

            /* renamed from: r  reason: collision with root package name */
            private List f34789r;

            /* renamed from: s  reason: collision with root package name */
            private TypeTable f34790s;

            /* renamed from: t  reason: collision with root package name */
            private VersionRequirementTable f34791t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34787p = list;
                this.f34788q = list;
                this.f34789r = list;
                this.f34790s = TypeTable.getDefaultInstance();
                this.f34791t = VersionRequirementTable.getDefaultInstance();
                m();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34786o & 1) != 1) {
                    this.f34787p = new ArrayList(this.f34787p);
                    this.f34786o |= 1;
                }
            }

            private void k() {
                if ((this.f34786o & 2) != 2) {
                    this.f34788q = new ArrayList(this.f34788q);
                    this.f34786o |= 2;
                }
            }

            private void l() {
                if ((this.f34786o & 4) != 4) {
                    this.f34789r = new ArrayList(this.f34789r);
                    this.f34786o |= 4;
                }
            }

            private void m() {
            }

            public Package buildPartial() {
                Package r02 = new Package(this);
                int i10 = this.f34786o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34787p = Collections.unmodifiableList(this.f34787p);
                    this.f34786o &= -2;
                }
                r02.f34779p = this.f34787p;
                if ((this.f34786o & 2) == 2) {
                    this.f34788q = Collections.unmodifiableList(this.f34788q);
                    this.f34786o &= -3;
                }
                r02.f34780q = this.f34788q;
                if ((this.f34786o & 4) == 4) {
                    this.f34789r = Collections.unmodifiableList(this.f34789r);
                    this.f34786o &= -5;
                }
                r02.f34781r = this.f34789r;
                if ((i10 & 8) != 8) {
                    i11 = 0;
                }
                r02.f34782s = this.f34790s;
                if ((i10 & 16) == 16) {
                    i11 |= 2;
                }
                r02.f34783t = this.f34791t;
                r02.f34778o = i11;
                return r02;
            }

            public Function getFunction(int i10) {
                return (Function) this.f34787p.get(i10);
            }

            public int getFunctionCount() {
                return this.f34787p.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.f34788q.get(i10);
            }

            public int getPropertyCount() {
                return this.f34788q.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.f34789r.get(i10);
            }

            public int getTypeAliasCount() {
                return this.f34789r.size();
            }

            public TypeTable getTypeTable() {
                return this.f34790s;
            }

            public boolean hasTypeTable() {
                if ((this.f34786o & 8) == 8) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                    if (!getFunction(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                    if (!getProperty(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                    if (!getTypeAlias(i12).isInitialized()) {
                        return false;
                    }
                }
                if ((hasTypeTable() && !getTypeTable().isInitialized()) || !e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f34786o & 8) == 8 && this.f34790s != TypeTable.getDefaultInstance()) {
                    this.f34790s = TypeTable.newBuilder(this.f34790s).mergeFrom(typeTable).buildPartial();
                } else {
                    this.f34790s = typeTable;
                }
                this.f34786o |= 8;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f34786o & 16) == 16 && this.f34791t != VersionRequirementTable.getDefaultInstance()) {
                    this.f34791t = VersionRequirementTable.newBuilder(this.f34791t).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.f34791t = versionRequirementTable;
                }
                this.f34786o |= 16;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Package build() {
                Package buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Package getDefaultInstanceForType() {
                return Package.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Package r32) {
                if (r32 == Package.getDefaultInstance()) {
                    return this;
                }
                if (!r32.f34779p.isEmpty()) {
                    if (this.f34787p.isEmpty()) {
                        this.f34787p = r32.f34779p;
                        this.f34786o &= -2;
                    } else {
                        j();
                        this.f34787p.addAll(r32.f34779p);
                    }
                }
                if (!r32.f34780q.isEmpty()) {
                    if (this.f34788q.isEmpty()) {
                        this.f34788q = r32.f34780q;
                        this.f34786o &= -3;
                    } else {
                        k();
                        this.f34788q.addAll(r32.f34780q);
                    }
                }
                if (!r32.f34781r.isEmpty()) {
                    if (this.f34789r.isEmpty()) {
                        this.f34789r = r32.f34781r;
                        this.f34786o &= -5;
                    } else {
                        l();
                        this.f34789r.addAll(r32.f34781r);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f34777i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Package parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Package(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Package r02 = new Package(true);
            f34776w = r02;
            r02.w();
        }

        public static Package getDefaultInstance() {
            return f34776w;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static Package parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void w() {
            List list = Collections.EMPTY_LIST;
            this.f34779p = list;
            this.f34780q = list;
            this.f34781r = list;
            this.f34782s = TypeTable.getDefaultInstance();
            this.f34783t = VersionRequirementTable.getDefaultInstance();
        }

        public Function getFunction(int i10) {
            return (Function) this.f34779p.get(i10);
        }

        public int getFunctionCount() {
            return this.f34779p.size();
        }

        public List<Function> getFunctionList() {
            return this.f34779p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Package> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.f34780q.get(i10);
        }

        public int getPropertyCount() {
            return this.f34780q.size();
        }

        public List<Property> getPropertyList() {
            return this.f34780q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34785v;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34779p.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f34779p.get(i12));
            }
            for (int i13 = 0; i13 < this.f34780q.size(); i13++) {
                i11 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34780q.get(i13));
            }
            for (int i14 = 0; i14 < this.f34781r.size(); i14++) {
                i11 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f34781r.get(i14));
            }
            if ((this.f34778o & 1) == 1) {
                i11 += CodedOutputStream.computeMessageSize(30, this.f34782s);
            }
            if ((this.f34778o & 2) == 2) {
                i11 += CodedOutputStream.computeMessageSize(32, this.f34783t);
            }
            int j10 = i11 + j() + this.f34777i.size();
            this.f34785v = j10;
            return j10;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.f34781r.get(i10);
        }

        public int getTypeAliasCount() {
            return this.f34781r.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.f34781r;
        }

        public TypeTable getTypeTable() {
            return this.f34782s;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.f34783t;
        }

        public boolean hasTypeTable() {
            if ((this.f34778o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f34778o & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34784u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                if (!getFunction(i10).isInitialized()) {
                    this.f34784u = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                if (!getProperty(i11).isInitialized()) {
                    this.f34784u = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                if (!getTypeAlias(i12).isInitialized()) {
                    this.f34784u = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.f34784u = (byte) 0;
                return false;
            } else if (!i()) {
                this.f34784u = (byte) 0;
                return false;
            } else {
                this.f34784u = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            for (int i10 = 0; i10 < this.f34779p.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f34779p.get(i10));
            }
            for (int i11 = 0; i11 < this.f34780q.size(); i11++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34780q.get(i11));
            }
            for (int i12 = 0; i12 < this.f34781r.size(); i12++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f34781r.get(i12));
            }
            if ((this.f34778o & 1) == 1) {
                codedOutputStream.writeMessage(30, this.f34782s);
            }
            if ((this.f34778o & 2) == 2) {
                codedOutputStream.writeMessage(32, this.f34783t);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34777i);
        }

        public static Builder newBuilder(Package r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Package getDefaultInstanceForType() {
            return f34776w;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Package(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34784u = (byte) -1;
            this.f34785v = -1;
            this.f34777i = extendableBuilder.getUnknownFields();
        }

        private Package(boolean z10) {
            this.f34784u = (byte) -1;
            this.f34785v = -1;
            this.f34777i = ByteString.EMPTY;
        }

        private Package(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34784u = (byte) -1;
            this.f34785v = -1;
            w();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 26) {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f34779p = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f34779p.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                            } else if (readTag == 34) {
                                boolean z13 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z13) {
                                    this.f34780q = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f34780q.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                            } else if (readTag != 42) {
                                if (readTag == 242) {
                                    TypeTable.Builder builder = (this.f34778o & 1) == 1 ? this.f34782s.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.f34782s = typeTable;
                                    if (builder != null) {
                                        builder.mergeFrom(typeTable);
                                        this.f34782s = builder.buildPartial();
                                    }
                                    this.f34778o |= 1;
                                } else if (readTag != 258) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    VersionRequirementTable.Builder builder2 = (this.f34778o & 2) == 2 ? this.f34783t.toBuilder() : null;
                                    VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                    this.f34783t = versionRequirementTable;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(versionRequirementTable);
                                        this.f34783t = builder2.buildPartial();
                                    }
                                    this.f34778o |= 2;
                                }
                            } else {
                                boolean z14 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z14) {
                                    this.f34781r = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f34781r.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f34779p = Collections.unmodifiableList(this.f34779p);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34780q = Collections.unmodifiableList(this.f34780q);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34781r = Collections.unmodifiableList(this.f34781r);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34777i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34777i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if ((z11 ? 1 : 0) & true) {
                this.f34779p = Collections.unmodifiableList(this.f34779p);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f34780q = Collections.unmodifiableList(this.f34780q);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f34781r = Collections.unmodifiableList(this.f34781r);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34777i = newOutput.toByteString();
                throw th4;
            }
            this.f34777i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PackageFragment extends GeneratedMessageLite.ExtendableMessage<PackageFragment> implements PackageFragmentOrBuilder {
        public static Parser<PackageFragment> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final PackageFragment f34792v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34793i;

        /* renamed from: o  reason: collision with root package name */
        private int f34794o;

        /* renamed from: p  reason: collision with root package name */
        private StringTable f34795p;

        /* renamed from: q  reason: collision with root package name */
        private QualifiedNameTable f34796q;

        /* renamed from: r  reason: collision with root package name */
        private Package f34797r;

        /* renamed from: s  reason: collision with root package name */
        private List f34798s;

        /* renamed from: t  reason: collision with root package name */
        private byte f34799t;

        /* renamed from: u  reason: collision with root package name */
        private int f34800u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<PackageFragment, Builder> implements PackageFragmentOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34801o;

            /* renamed from: p  reason: collision with root package name */
            private StringTable f34802p = StringTable.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private QualifiedNameTable f34803q = QualifiedNameTable.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private Package f34804r = Package.getDefaultInstance();

            /* renamed from: s  reason: collision with root package name */
            private List f34805s = Collections.EMPTY_LIST;

            private Builder() {
                k();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34801o & 8) != 8) {
                    this.f34805s = new ArrayList(this.f34805s);
                    this.f34801o |= 8;
                }
            }

            private void k() {
            }

            public PackageFragment buildPartial() {
                PackageFragment packageFragment = new PackageFragment(this);
                int i10 = this.f34801o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                packageFragment.f34795p = this.f34802p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                packageFragment.f34796q = this.f34803q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                packageFragment.f34797r = this.f34804r;
                if ((this.f34801o & 8) == 8) {
                    this.f34805s = Collections.unmodifiableList(this.f34805s);
                    this.f34801o &= -9;
                }
                packageFragment.f34798s = this.f34805s;
                packageFragment.f34794o = i11;
                return packageFragment;
            }

            public Class getClass_(int i10) {
                return (Class) this.f34805s.get(i10);
            }

            public int getClass_Count() {
                return this.f34805s.size();
            }

            public Package getPackage() {
                return this.f34804r;
            }

            public QualifiedNameTable getQualifiedNames() {
                return this.f34803q;
            }

            public boolean hasPackage() {
                if ((this.f34801o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasQualifiedNames() {
                if ((this.f34801o & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                    return false;
                }
                if (hasPackage() && !getPackage().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergePackage(Package r42) {
                if ((this.f34801o & 4) == 4 && this.f34804r != Package.getDefaultInstance()) {
                    this.f34804r = Package.newBuilder(this.f34804r).mergeFrom(r42).buildPartial();
                } else {
                    this.f34804r = r42;
                }
                this.f34801o |= 4;
                return this;
            }

            public Builder mergeQualifiedNames(QualifiedNameTable qualifiedNameTable) {
                if ((this.f34801o & 2) == 2 && this.f34803q != QualifiedNameTable.getDefaultInstance()) {
                    this.f34803q = QualifiedNameTable.newBuilder(this.f34803q).mergeFrom(qualifiedNameTable).buildPartial();
                } else {
                    this.f34803q = qualifiedNameTable;
                }
                this.f34801o |= 2;
                return this;
            }

            public Builder mergeStrings(StringTable stringTable) {
                if ((this.f34801o & 1) == 1 && this.f34802p != StringTable.getDefaultInstance()) {
                    this.f34802p = StringTable.newBuilder(this.f34802p).mergeFrom(stringTable).buildPartial();
                } else {
                    this.f34802p = stringTable;
                }
                this.f34801o |= 1;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public PackageFragment build() {
                PackageFragment buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public PackageFragment getDefaultInstanceForType() {
                return PackageFragment.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(PackageFragment packageFragment) {
                if (packageFragment == PackageFragment.getDefaultInstance()) {
                    return this;
                }
                if (packageFragment.hasStrings()) {
                    mergeStrings(packageFragment.getStrings());
                }
                if (packageFragment.hasQualifiedNames()) {
                    mergeQualifiedNames(packageFragment.getQualifiedNames());
                }
                if (packageFragment.hasPackage()) {
                    mergePackage(packageFragment.getPackage());
                }
                if (!packageFragment.f34798s.isEmpty()) {
                    if (this.f34805s.isEmpty()) {
                        this.f34805s = packageFragment.f34798s;
                        this.f34801o &= -9;
                    } else {
                        j();
                        this.f34805s.addAll(packageFragment.f34798s);
                    }
                }
                f(packageFragment);
                setUnknownFields(getUnknownFields().concat(packageFragment.f34793i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public PackageFragment parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new PackageFragment(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            PackageFragment packageFragment = new PackageFragment(true);
            f34792v = packageFragment;
            packageFragment.t();
        }

        public static PackageFragment getDefaultInstance() {
            return f34792v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static PackageFragment parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void t() {
            this.f34795p = StringTable.getDefaultInstance();
            this.f34796q = QualifiedNameTable.getDefaultInstance();
            this.f34797r = Package.getDefaultInstance();
            this.f34798s = Collections.EMPTY_LIST;
        }

        public Class getClass_(int i10) {
            return (Class) this.f34798s.get(i10);
        }

        public int getClass_Count() {
            return this.f34798s.size();
        }

        public List<Class> getClass_List() {
            return this.f34798s;
        }

        public Package getPackage() {
            return this.f34797r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<PackageFragment> getParserForType() {
            return PARSER;
        }

        public QualifiedNameTable getQualifiedNames() {
            return this.f34796q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34800u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34794o & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f34795p);
            } else {
                i10 = 0;
            }
            if ((this.f34794o & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f34796q);
            }
            if ((this.f34794o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34797r);
            }
            for (int i12 = 0; i12 < this.f34798s.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34798s.get(i12));
            }
            int j10 = i10 + j() + this.f34793i.size();
            this.f34800u = j10;
            return j10;
        }

        public StringTable getStrings() {
            return this.f34795p;
        }

        public boolean hasPackage() {
            if ((this.f34794o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasQualifiedNames() {
            if ((this.f34794o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasStrings() {
            if ((this.f34794o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34799t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                this.f34799t = (byte) 0;
                return false;
            } else if (hasPackage() && !getPackage().isInitialized()) {
                this.f34799t = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        this.f34799t = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34799t = (byte) 0;
                    return false;
                }
                this.f34799t = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34794o & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f34795p);
            }
            if ((this.f34794o & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f34796q);
            }
            if ((this.f34794o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f34797r);
            }
            for (int i10 = 0; i10 < this.f34798s.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34798s.get(i10));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34793i);
        }

        public static Builder newBuilder(PackageFragment packageFragment) {
            return newBuilder().mergeFrom(packageFragment);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public PackageFragment getDefaultInstanceForType() {
            return f34792v;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private PackageFragment(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34799t = (byte) -1;
            this.f34800u = -1;
            this.f34793i = extendableBuilder.getUnknownFields();
        }

        private PackageFragment(boolean z10) {
            this.f34799t = (byte) -1;
            this.f34800u = -1;
            this.f34793i = ByteString.EMPTY;
        }

        private PackageFragment(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34799t = (byte) -1;
            this.f34800u = -1;
            t();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 10) {
                                StringTable.Builder builder = (this.f34794o & 1) == 1 ? this.f34795p.toBuilder() : null;
                                StringTable stringTable = (StringTable) codedInputStream.readMessage(StringTable.PARSER, extensionRegistryLite);
                                this.f34795p = stringTable;
                                if (builder != null) {
                                    builder.mergeFrom(stringTable);
                                    this.f34795p = builder.buildPartial();
                                }
                                this.f34794o |= 1;
                            } else if (readTag == 18) {
                                QualifiedNameTable.Builder builder2 = (this.f34794o & 2) == 2 ? this.f34796q.toBuilder() : null;
                                QualifiedNameTable qualifiedNameTable = (QualifiedNameTable) codedInputStream.readMessage(QualifiedNameTable.PARSER, extensionRegistryLite);
                                this.f34796q = qualifiedNameTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(qualifiedNameTable);
                                    this.f34796q = builder2.buildPartial();
                                }
                                this.f34794o |= 2;
                            } else if (readTag == 26) {
                                Package.Builder builder3 = (this.f34794o & 4) == 4 ? this.f34797r.toBuilder() : null;
                                Package r62 = (Package) codedInputStream.readMessage(Package.PARSER, extensionRegistryLite);
                                this.f34797r = r62;
                                if (builder3 != null) {
                                    builder3.mergeFrom(r62);
                                    this.f34797r = builder3.buildPartial();
                                }
                                this.f34794o |= 4;
                            } else if (readTag != 34) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f34798s = new ArrayList();
                                    z11 = true;
                                }
                                this.f34798s.add(codedInputStream.readMessage(Class.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f34798s = Collections.unmodifiableList(this.f34798s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34793i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34793i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if ((z11 ? 1 : 0) & true) {
                this.f34798s = Collections.unmodifiableList(this.f34798s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34793i = newOutput.toByteString();
                throw th4;
            }
            this.f34793i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface PackageFragmentOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface PackageOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Property extends GeneratedMessageLite.ExtendableMessage<Property> implements PropertyOrBuilder {
        private static final Property H;
        public static Parser<Property> PARSER = new a();
        private ValueParameter A;
        private int B;
        private int C;
        private List D;
        private List E;
        private byte F;
        private int G;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34806i;

        /* renamed from: o  reason: collision with root package name */
        private int f34807o;

        /* renamed from: p  reason: collision with root package name */
        private int f34808p;

        /* renamed from: q  reason: collision with root package name */
        private int f34809q;

        /* renamed from: r  reason: collision with root package name */
        private int f34810r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34811s;

        /* renamed from: t  reason: collision with root package name */
        private int f34812t;

        /* renamed from: u  reason: collision with root package name */
        private List f34813u;

        /* renamed from: v  reason: collision with root package name */
        private Type f34814v;

        /* renamed from: w  reason: collision with root package name */
        private int f34815w;

        /* renamed from: x  reason: collision with root package name */
        private List f34816x;

        /* renamed from: y  reason: collision with root package name */
        private List f34817y;

        /* renamed from: z  reason: collision with root package name */
        private int f34818z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Property, Builder> implements PropertyOrBuilder {
            private int A;
            private int B;
            private List C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f34819o;

            /* renamed from: r  reason: collision with root package name */
            private int f34822r;

            /* renamed from: t  reason: collision with root package name */
            private int f34824t;

            /* renamed from: u  reason: collision with root package name */
            private List f34825u;

            /* renamed from: v  reason: collision with root package name */
            private Type f34826v;

            /* renamed from: w  reason: collision with root package name */
            private int f34827w;

            /* renamed from: x  reason: collision with root package name */
            private List f34828x;

            /* renamed from: y  reason: collision with root package name */
            private List f34829y;

            /* renamed from: z  reason: collision with root package name */
            private ValueParameter f34830z;

            /* renamed from: p  reason: collision with root package name */
            private int f34820p = 518;

            /* renamed from: q  reason: collision with root package name */
            private int f34821q = 2054;

            /* renamed from: s  reason: collision with root package name */
            private Type f34823s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34825u = list;
                this.f34826v = Type.getDefaultInstance();
                this.f34828x = list;
                this.f34829y = list;
                this.f34830z = ValueParameter.getDefaultInstance();
                this.C = list;
                this.D = list;
                p();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34819o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f34819o |= 16384;
                }
            }

            private void k() {
                if ((this.f34819o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34829y = new ArrayList(this.f34829y);
                    this.f34819o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34819o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34828x = new ArrayList(this.f34828x);
                    this.f34819o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f34819o & 32) != 32) {
                    this.f34825u = new ArrayList(this.f34825u);
                    this.f34819o |= 32;
                }
            }

            private void o() {
                if ((this.f34819o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f34819o |= 8192;
                }
            }

            private void p() {
            }

            public Property buildPartial() {
                Property property = new Property(this);
                int i10 = this.f34819o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                property.f34808p = this.f34820p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                property.f34809q = this.f34821q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                property.f34810r = this.f34822r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                property.f34811s = this.f34823s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                property.f34812t = this.f34824t;
                if ((this.f34819o & 32) == 32) {
                    this.f34825u = Collections.unmodifiableList(this.f34825u);
                    this.f34819o &= -33;
                }
                property.f34813u = this.f34825u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                property.f34814v = this.f34826v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                property.f34815w = this.f34827w;
                if ((this.f34819o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34828x = Collections.unmodifiableList(this.f34828x);
                    this.f34819o &= -257;
                }
                property.f34816x = this.f34828x;
                if ((this.f34819o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34829y = Collections.unmodifiableList(this.f34829y);
                    this.f34819o &= -513;
                }
                property.f34817y = this.f34829y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                property.A = this.f34830z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                property.B = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                property.C = this.B;
                if ((this.f34819o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f34819o &= -8193;
                }
                property.D = this.C;
                if ((this.f34819o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f34819o &= -16385;
                }
                property.E = this.D;
                property.f34807o = i11;
                return property;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f34828x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f34828x.size();
            }

            public Type getReceiverType() {
                return this.f34826v;
            }

            public Type getReturnType() {
                return this.f34823s;
            }

            public ValueParameter getSetterValueParameter() {
                return this.f34830z;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34825u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34825u.size();
            }

            public boolean hasName() {
                if ((this.f34819o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f34819o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f34819o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasSetterValueParameter() {
                if ((this.f34819o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                if (hasReturnType() && !getReturnType().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        return false;
                    }
                }
                if (hasSetterValueParameter() && !getSetterValueParameter().isInitialized()) {
                    return false;
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f34819o & 64) == 64 && this.f34826v != Type.getDefaultInstance()) {
                    this.f34826v = Type.newBuilder(this.f34826v).mergeFrom(type).buildPartial();
                } else {
                    this.f34826v = type;
                }
                this.f34819o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f34819o & 8) == 8 && this.f34823s != Type.getDefaultInstance()) {
                    this.f34823s = Type.newBuilder(this.f34823s).mergeFrom(type).buildPartial();
                } else {
                    this.f34823s = type;
                }
                this.f34819o |= 8;
                return this;
            }

            public Builder mergeSetterValueParameter(ValueParameter valueParameter) {
                if ((this.f34819o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 && this.f34830z != ValueParameter.getDefaultInstance()) {
                    this.f34830z = ValueParameter.newBuilder(this.f34830z).mergeFrom(valueParameter).buildPartial();
                } else {
                    this.f34830z = valueParameter;
                }
                this.f34819o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34819o |= 1;
                this.f34820p = i10;
                return this;
            }

            public Builder setGetterFlags(int i10) {
                this.f34819o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                this.A = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34819o |= 4;
                this.f34822r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f34819o |= 2;
                this.f34821q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f34819o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34827w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f34819o |= 16;
                this.f34824t = i10;
                return this;
            }

            public Builder setSetterFlags(int i10) {
                this.f34819o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Property build() {
                Property buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Property getDefaultInstanceForType() {
                return Property.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Property property) {
                if (property == Property.getDefaultInstance()) {
                    return this;
                }
                if (property.hasFlags()) {
                    setFlags(property.getFlags());
                }
                if (property.hasOldFlags()) {
                    setOldFlags(property.getOldFlags());
                }
                if (property.hasName()) {
                    setName(property.getName());
                }
                if (property.hasReturnType()) {
                    mergeReturnType(property.getReturnType());
                }
                if (property.hasReturnTypeId()) {
                    setReturnTypeId(property.getReturnTypeId());
                }
                if (!property.f34813u.isEmpty()) {
                    if (this.f34825u.isEmpty()) {
                        this.f34825u = property.f34813u;
                        this.f34819o &= -33;
                    } else {
                        m();
                        this.f34825u.addAll(property.f34813u);
                    }
                }
                if (property.hasReceiverType()) {
                    mergeReceiverType(property.getReceiverType());
                }
                if (property.hasReceiverTypeId()) {
                    setReceiverTypeId(property.getReceiverTypeId());
                }
                if (!property.f34816x.isEmpty()) {
                    if (this.f34828x.isEmpty()) {
                        this.f34828x = property.f34816x;
                        this.f34819o &= -257;
                    } else {
                        l();
                        this.f34828x.addAll(property.f34816x);
                    }
                }
                if (!property.f34817y.isEmpty()) {
                    if (this.f34829y.isEmpty()) {
                        this.f34829y = property.f34817y;
                        this.f34819o &= -513;
                    } else {
                        k();
                        this.f34829y.addAll(property.f34817y);
                    }
                }
                if (property.hasSetterValueParameter()) {
                    mergeSetterValueParameter(property.getSetterValueParameter());
                }
                if (property.hasGetterFlags()) {
                    setGetterFlags(property.getGetterFlags());
                }
                if (property.hasSetterFlags()) {
                    setSetterFlags(property.getSetterFlags());
                }
                if (!property.D.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = property.D;
                        this.f34819o &= -8193;
                    } else {
                        o();
                        this.C.addAll(property.D);
                    }
                }
                if (!property.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = property.E;
                        this.f34819o &= -16385;
                    } else {
                        j();
                        this.D.addAll(property.E);
                    }
                }
                f(property);
                setUnknownFields(getUnknownFields().concat(property.f34806i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Property parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Property(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Property property = new Property(true);
            H = property;
            property.I();
        }

        private void I() {
            this.f34808p = 518;
            this.f34809q = 2054;
            this.f34810r = 0;
            this.f34811s = Type.getDefaultInstance();
            this.f34812t = 0;
            List list = Collections.EMPTY_LIST;
            this.f34813u = list;
            this.f34814v = Type.getDefaultInstance();
            this.f34815w = 0;
            this.f34816x = list;
            this.f34817y = list;
            this.A = ValueParameter.getDefaultInstance();
            this.B = 0;
            this.C = 0;
            this.D = list;
            this.E = list;
        }

        public static Property getDefaultInstance() {
            return H;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.E.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.E.size();
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f34816x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f34816x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f34817y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f34816x;
        }

        public int getFlags() {
            return this.f34808p;
        }

        public int getGetterFlags() {
            return this.B;
        }

        public int getName() {
            return this.f34810r;
        }

        public int getOldFlags() {
            return this.f34809q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Property> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f34814v;
        }

        public int getReceiverTypeId() {
            return this.f34815w;
        }

        public Type getReturnType() {
            return this.f34811s;
        }

        public int getReturnTypeId() {
            return this.f34812t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34807o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34809q);
            } else {
                i10 = 0;
            }
            if ((this.f34807o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34810r);
            }
            if ((this.f34807o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34811s);
            }
            for (int i12 = 0; i12 < this.f34813u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34813u.get(i12));
            }
            if ((this.f34807o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34814v);
            }
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeMessageSize(6, this.A);
            }
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeInt32Size(7, this.B);
            }
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(8, this.C);
            }
            if ((this.f34807o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34812t);
            }
            if ((this.f34807o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(10, this.f34815w);
            }
            if ((this.f34807o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f34808p);
            }
            for (int i13 = 0; i13 < this.f34816x.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(12, (MessageLite) this.f34816x.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f34817y.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34817y.get(i15)).intValue());
            }
            int i16 = i10 + i14;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i16 = i16 + 1 + CodedOutputStream.computeInt32SizeNoTag(i14);
            }
            this.f34818z = i14;
            int i17 = 0;
            for (int i18 = 0; i18 < this.D.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.D.get(i18)).intValue());
            }
            int size = i16 + i17 + (getVersionRequirementList().size() * 2);
            for (int i19 = 0; i19 < this.E.size(); i19++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.E.get(i19));
            }
            int j10 = size + j() + this.f34806i.size();
            this.G = j10;
            return j10;
        }

        public int getSetterFlags() {
            return this.C;
        }

        public ValueParameter getSetterValueParameter() {
            return this.A;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34813u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34813u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34813u;
        }

        public List<Integer> getVersionRequirementList() {
            return this.D;
        }

        public boolean hasFlags() {
            if ((this.f34807o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetterFlags() {
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34807o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f34807o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f34807o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f34807o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f34807o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f34807o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasSetterFlags() {
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasSetterValueParameter() {
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.F;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.F = (byte) 0;
                return false;
            } else if (hasReturnType() && !getReturnType().isInitialized()) {
                this.F = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasSetterValueParameter() && !getSetterValueParameter().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.F = (byte) 0;
                    return false;
                }
                this.F = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34807o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f34809q);
            }
            if ((this.f34807o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f34810r);
            }
            if ((this.f34807o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f34811s);
            }
            for (int i10 = 0; i10 < this.f34813u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34813u.get(i10));
            }
            if ((this.f34807o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f34814v);
            }
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(6, this.A);
            }
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeInt32(7, this.B);
            }
            if ((this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(8, this.C);
            }
            if ((this.f34807o & 16) == 16) {
                codedOutputStream.writeInt32(9, this.f34812t);
            }
            if ((this.f34807o & 64) == 64) {
                codedOutputStream.writeInt32(10, this.f34815w);
            }
            if ((this.f34807o & 1) == 1) {
                codedOutputStream.writeInt32(11, this.f34808p);
            }
            for (int i11 = 0; i11 < this.f34816x.size(); i11++) {
                codedOutputStream.writeMessage(12, (MessageLite) this.f34816x.get(i11));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(106);
                codedOutputStream.writeRawVarint32(this.f34818z);
            }
            for (int i12 = 0; i12 < this.f34817y.size(); i12++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34817y.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.D.size(); i13++) {
                codedOutputStream.writeInt32(31, ((Integer) this.D.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.E.size(); i14++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.E.get(i14));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34806i);
        }

        public static Builder newBuilder(Property property) {
            return newBuilder().mergeFrom(property);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Property getDefaultInstanceForType() {
            return H;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Property(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34818z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34806i = extendableBuilder.getUnknownFields();
        }

        private Property(boolean z10) {
            this.f34818z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34806i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private Property(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34818z = -1;
            this.F = (byte) -1;
            this.G = -1;
            I();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (true) {
                ?? r52 = 16384;
                if (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    break;
                                case 8:
                                    this.f34807o |= 2;
                                    this.f34809q = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f34807o |= 4;
                                    this.f34810r = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    Type.Builder builder = (this.f34807o & 8) == 8 ? this.f34811s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34811s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34811s = builder.buildPartial();
                                    }
                                    this.f34807o |= 8;
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    boolean z12 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z12) {
                                        this.f34813u = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f34813u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case 42:
                                    Type.Builder builder2 = (this.f34807o & 32) == 32 ? this.f34814v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34814v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f34814v = builder2.buildPartial();
                                    }
                                    this.f34807o |= 32;
                                    continue;
                                case 50:
                                    ValueParameter.Builder builder3 = (this.f34807o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.A.toBuilder() : null;
                                    ValueParameter valueParameter = (ValueParameter) codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite);
                                    this.A = valueParameter;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(valueParameter);
                                        this.A = builder3.buildPartial();
                                    }
                                    this.f34807o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34807o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f34807o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f34807o |= 16;
                                    this.f34812t = codedInputStream.readInt32();
                                    continue;
                                case 80:
                                    this.f34807o |= 64;
                                    this.f34815w = codedInputStream.readInt32();
                                    continue;
                                case 88:
                                    this.f34807o |= 1;
                                    this.f34808p = codedInputStream.readInt32();
                                    continue;
                                case 98:
                                    boolean z13 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z13) {
                                        this.f34816x = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f34816x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                case 104:
                                    boolean z14 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z14) {
                                        this.f34817y = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f34817y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case 106:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z15 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z15) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f34817y = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34817y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                case 248:
                                    boolean z16 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z16) {
                                        this.D = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.D.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z17 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z17) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.D = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.D.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit2);
                                    continue;
                                case 258:
                                    boolean z18 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z18) {
                                        this.E = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.E.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                    continue;
                                default:
                                    r52 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                    if (r52 == 0) {
                                        break;
                                    } else {
                                        continue;
                                    }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        } catch (IOException e11) {
                            throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                        }
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f34813u = Collections.unmodifiableList(this.f34813u);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34816x = Collections.unmodifiableList(this.f34816x);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34817y = Collections.unmodifiableList(this.f34817y);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.D = Collections.unmodifiableList(this.D);
                        }
                        if (((z11 ? 1 : 0) & true) == r52) {
                            this.E = Collections.unmodifiableList(this.E);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34806i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34806i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } else {
                    if ((z11 ? 1 : 0) & true) {
                        this.f34813u = Collections.unmodifiableList(this.f34813u);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f34816x = Collections.unmodifiableList(this.f34816x);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f34817y = Collections.unmodifiableList(this.f34817y);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.D = Collections.unmodifiableList(this.D);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.E = Collections.unmodifiableList(this.E);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f34806i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34806i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface PropertyOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class QualifiedNameTable extends GeneratedMessageLite implements QualifiedNameTableOrBuilder {
        public static Parser<QualifiedNameTable> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final QualifiedNameTable f34831q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34832e;

        /* renamed from: i  reason: collision with root package name */
        private List f34833i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34834o;

        /* renamed from: p  reason: collision with root package name */
        private int f34835p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<QualifiedNameTable, Builder> implements QualifiedNameTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34836e;

            /* renamed from: i  reason: collision with root package name */
            private List f34837i = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34836e & 1) != 1) {
                    this.f34837i = new ArrayList(this.f34837i);
                    this.f34836e |= 1;
                }
            }

            private void e() {
            }

            public QualifiedNameTable buildPartial() {
                QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(this);
                if ((this.f34836e & 1) == 1) {
                    this.f34837i = Collections.unmodifiableList(this.f34837i);
                    this.f34836e &= -2;
                }
                qualifiedNameTable.f34833i = this.f34837i;
                return qualifiedNameTable;
            }

            public QualifiedName getQualifiedName(int i10) {
                return (QualifiedName) this.f34837i.get(i10);
            }

            public int getQualifiedNameCount() {
                return this.f34837i.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                    if (!getQualifiedName(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public QualifiedNameTable build() {
                QualifiedNameTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedNameTable getDefaultInstanceForType() {
                return QualifiedNameTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(QualifiedNameTable qualifiedNameTable) {
                if (qualifiedNameTable == QualifiedNameTable.getDefaultInstance()) {
                    return this;
                }
                if (!qualifiedNameTable.f34833i.isEmpty()) {
                    if (this.f34837i.isEmpty()) {
                        this.f34837i = qualifiedNameTable.f34833i;
                        this.f34836e &= -2;
                    } else {
                        d();
                        this.f34837i.addAll(qualifiedNameTable.f34833i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(qualifiedNameTable.f34832e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class QualifiedName extends GeneratedMessageLite implements QualifiedNameOrBuilder {
            public static Parser<QualifiedName> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final QualifiedName f34838t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34839e;

            /* renamed from: i  reason: collision with root package name */
            private int f34840i;

            /* renamed from: o  reason: collision with root package name */
            private int f34841o;

            /* renamed from: p  reason: collision with root package name */
            private int f34842p;

            /* renamed from: q  reason: collision with root package name */
            private Kind f34843q;

            /* renamed from: r  reason: collision with root package name */
            private byte f34844r;

            /* renamed from: s  reason: collision with root package name */
            private int f34845s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<QualifiedName, Builder> implements QualifiedNameOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34846e;

                /* renamed from: o  reason: collision with root package name */
                private int f34848o;

                /* renamed from: i  reason: collision with root package name */
                private int f34847i = -1;

                /* renamed from: p  reason: collision with root package name */
                private Kind f34849p = Kind.PACKAGE;

                private Builder() {
                    d();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                }

                public QualifiedName buildPartial() {
                    QualifiedName qualifiedName = new QualifiedName(this);
                    int i10 = this.f34846e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    qualifiedName.f34841o = this.f34847i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    qualifiedName.f34842p = this.f34848o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    qualifiedName.f34843q = this.f34849p;
                    qualifiedName.f34840i = i11;
                    return qualifiedName;
                }

                public boolean hasShortName() {
                    if ((this.f34846e & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    if (!hasShortName()) {
                        return false;
                    }
                    return true;
                }

                public Builder setKind(Kind kind) {
                    kind.getClass();
                    this.f34846e |= 4;
                    this.f34849p = kind;
                    return this;
                }

                public Builder setParentQualifiedName(int i10) {
                    this.f34846e |= 1;
                    this.f34847i = i10;
                    return this;
                }

                public Builder setShortName(int i10) {
                    this.f34846e |= 2;
                    this.f34848o = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public QualifiedName build() {
                    QualifiedName buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public QualifiedName getDefaultInstanceForType() {
                    return QualifiedName.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(QualifiedName qualifiedName) {
                    if (qualifiedName == QualifiedName.getDefaultInstance()) {
                        return this;
                    }
                    if (qualifiedName.hasParentQualifiedName()) {
                        setParentQualifiedName(qualifiedName.getParentQualifiedName());
                    }
                    if (qualifiedName.hasShortName()) {
                        setShortName(qualifiedName.getShortName());
                    }
                    if (qualifiedName.hasKind()) {
                        setKind(qualifiedName.getKind());
                    }
                    setUnknownFields(getUnknownFields().concat(qualifiedName.f34839e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public enum Kind implements Internal.EnumLite {
                CLASS(0, 0),
                PACKAGE(1, 1),
                LOCAL(2, 2);
                

                /* renamed from: e  reason: collision with root package name */
                private static Internal.EnumLiteMap f34850e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34852d;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a implements Internal.EnumLiteMap {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                    /* renamed from: a */
                    public Kind findValueByNumber(int i10) {
                        return Kind.valueOf(i10);
                    }
                }

                Kind(int i10, int i11) {
                    this.f34852d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34852d;
                }

                public static Kind valueOf(int i10) {
                    if (i10 != 0) {
                        if (i10 != 1) {
                            if (i10 != 2) {
                                return null;
                            }
                            return LOCAL;
                        }
                        return PACKAGE;
                    }
                    return CLASS;
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public QualifiedName parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new QualifiedName(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                QualifiedName qualifiedName = new QualifiedName(true);
                f34838t = qualifiedName;
                qualifiedName.m();
            }

            public static QualifiedName getDefaultInstance() {
                return f34838t;
            }

            private void m() {
                this.f34841o = -1;
                this.f34842p = 0;
                this.f34843q = Kind.PACKAGE;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public Kind getKind() {
                return this.f34843q;
            }

            public int getParentQualifiedName() {
                return this.f34841o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<QualifiedName> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34845s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34840i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f34841o);
                } else {
                    i10 = 0;
                }
                if ((this.f34840i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f34842p);
                }
                if ((this.f34840i & 4) == 4) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f34843q.getNumber());
                }
                int size = i10 + this.f34839e.size();
                this.f34845s = size;
                return size;
            }

            public int getShortName() {
                return this.f34842p;
            }

            public boolean hasKind() {
                if ((this.f34840i & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasParentQualifiedName() {
                if ((this.f34840i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasShortName() {
                if ((this.f34840i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34844r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasShortName()) {
                    this.f34844r = (byte) 0;
                    return false;
                }
                this.f34844r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34840i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f34841o);
                }
                if ((this.f34840i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f34842p);
                }
                if ((this.f34840i & 4) == 4) {
                    codedOutputStream.writeEnum(3, this.f34843q.getNumber());
                }
                codedOutputStream.writeRawBytes(this.f34839e);
            }

            public static Builder newBuilder(QualifiedName qualifiedName) {
                return newBuilder().mergeFrom(qualifiedName);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedName getDefaultInstanceForType() {
                return f34838t;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private QualifiedName(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f34844r = (byte) -1;
                this.f34845s = -1;
                this.f34839e = builder.getUnknownFields();
            }

            private QualifiedName(boolean z10) {
                this.f34844r = (byte) -1;
                this.f34845s = -1;
                this.f34839e = ByteString.EMPTY;
            }

            private QualifiedName(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34844r = (byte) -1;
                this.f34845s = -1;
                m();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                while (!z10) {
                    try {
                        try {
                            try {
                                int readTag = codedInputStream.readTag();
                                if (readTag != 0) {
                                    if (readTag == 8) {
                                        this.f34840i |= 1;
                                        this.f34841o = codedInputStream.readInt32();
                                    } else if (readTag == 16) {
                                        this.f34840i |= 2;
                                        this.f34842p = codedInputStream.readInt32();
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        int readEnum = codedInputStream.readEnum();
                                        Kind valueOf = Kind.valueOf(readEnum);
                                        if (valueOf == null) {
                                            newInstance.writeRawVarint32(readTag);
                                            newInstance.writeRawVarint32(readEnum);
                                        } else {
                                            this.f34840i |= 4;
                                            this.f34843q = valueOf;
                                        }
                                    }
                                }
                                z10 = true;
                            } catch (InvalidProtocolBufferException e10) {
                                throw e10.setUnfinishedMessage(this);
                            }
                        } catch (IOException e11) {
                            throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                        }
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34839e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34839e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34839e = newOutput.toByteString();
                    throw th4;
                }
                this.f34839e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface QualifiedNameOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public QualifiedNameTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new QualifiedNameTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(true);
            f34831q = qualifiedNameTable;
            qualifiedNameTable.k();
        }

        public static QualifiedNameTable getDefaultInstance() {
            return f34831q;
        }

        private void k() {
            this.f34833i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<QualifiedNameTable> getParserForType() {
            return PARSER;
        }

        public QualifiedName getQualifiedName(int i10) {
            return (QualifiedName) this.f34833i.get(i10);
        }

        public int getQualifiedNameCount() {
            return this.f34833i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34835p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34833i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34833i.get(i12));
            }
            int size = i11 + this.f34832e.size();
            this.f34835p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34834o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                if (!getQualifiedName(i10).isInitialized()) {
                    this.f34834o = (byte) 0;
                    return false;
                }
            }
            this.f34834o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34833i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34833i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34832e);
        }

        public static Builder newBuilder(QualifiedNameTable qualifiedNameTable) {
            return newBuilder().mergeFrom(qualifiedNameTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public QualifiedNameTable getDefaultInstanceForType() {
            return f34831q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private QualifiedNameTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34834o = (byte) -1;
            this.f34835p = -1;
            this.f34832e = builder.getUnknownFields();
        }

        private QualifiedNameTable(boolean z10) {
            this.f34834o = (byte) -1;
            this.f34835p = -1;
            this.f34832e = ByteString.EMPTY;
        }

        private QualifiedNameTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34834o = (byte) -1;
            this.f34835p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    if (!z11) {
                                        this.f34833i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34833i.add(codedInputStream.readMessage(QualifiedName.PARSER, extensionRegistryLite));
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f34833i = Collections.unmodifiableList(this.f34833i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34832e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34832e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34833i = Collections.unmodifiableList(this.f34833i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34832e = newOutput.toByteString();
                throw th4;
            }
            this.f34832e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface QualifiedNameTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class StringTable extends GeneratedMessageLite implements StringTableOrBuilder {
        public static Parser<StringTable> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final StringTable f34853q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34854e;

        /* renamed from: i  reason: collision with root package name */
        private LazyStringList f34855i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34856o;

        /* renamed from: p  reason: collision with root package name */
        private int f34857p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTable, Builder> implements StringTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34858e;

            /* renamed from: i  reason: collision with root package name */
            private LazyStringList f34859i = LazyStringArrayList.EMPTY;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34858e & 1) != 1) {
                    this.f34859i = new LazyStringArrayList(this.f34859i);
                    this.f34858e |= 1;
                }
            }

            private void e() {
            }

            public StringTable buildPartial() {
                StringTable stringTable = new StringTable(this);
                if ((this.f34858e & 1) == 1) {
                    this.f34859i = this.f34859i.getUnmodifiableView();
                    this.f34858e &= -2;
                }
                stringTable.f34855i = this.f34859i;
                return stringTable;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public StringTable build() {
                StringTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public StringTable getDefaultInstanceForType() {
                return StringTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(StringTable stringTable) {
                if (stringTable == StringTable.getDefaultInstance()) {
                    return this;
                }
                if (!stringTable.f34855i.isEmpty()) {
                    if (this.f34859i.isEmpty()) {
                        this.f34859i = stringTable.f34855i;
                        this.f34858e &= -2;
                    } else {
                        d();
                        this.f34859i.addAll(stringTable.f34855i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTable.f34854e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public StringTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new StringTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            StringTable stringTable = new StringTable(true);
            f34853q = stringTable;
            stringTable.k();
        }

        public static StringTable getDefaultInstance() {
            return f34853q;
        }

        private void k() {
            this.f34855i = LazyStringArrayList.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<StringTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34857p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34855i.size(); i12++) {
                i11 += CodedOutputStream.computeBytesSizeNoTag(this.f34855i.getByteString(i12));
            }
            int size = i11 + getStringList().size() + this.f34854e.size();
            this.f34857p = size;
            return size;
        }

        public String getString(int i10) {
            return this.f34855i.get(i10);
        }

        public ProtocolStringList getStringList() {
            return this.f34855i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34856o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34856o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34855i.size(); i10++) {
                codedOutputStream.writeBytes(1, this.f34855i.getByteString(i10));
            }
            codedOutputStream.writeRawBytes(this.f34854e);
        }

        public static Builder newBuilder(StringTable stringTable) {
            return newBuilder().mergeFrom(stringTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTable getDefaultInstanceForType() {
            return f34853q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private StringTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34856o = (byte) -1;
            this.f34857p = -1;
            this.f34854e = builder.getUnknownFields();
        }

        private StringTable(boolean z10) {
            this.f34856o = (byte) -1;
            this.f34857p = -1;
            this.f34854e = ByteString.EMPTY;
        }

        private StringTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34856o = (byte) -1;
            this.f34857p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    ByteString readBytes = codedInputStream.readBytes();
                                    if (!z11) {
                                        this.f34855i = new LazyStringArrayList();
                                        z11 = true;
                                    }
                                    this.f34855i.add(readBytes);
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f34855i = this.f34855i.getUnmodifiableView();
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34854e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34854e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34855i = this.f34855i.getUnmodifiableView();
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34854e = newOutput.toByteString();
                throw th4;
            }
            this.f34854e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface StringTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Type extends GeneratedMessageLite.ExtendableMessage<Type> implements TypeOrBuilder {
        private static final Type F;
        public static Parser<Type> PARSER = new a();
        private Type A;
        private int B;
        private int C;
        private byte D;
        private int E;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34860i;

        /* renamed from: o  reason: collision with root package name */
        private int f34861o;

        /* renamed from: p  reason: collision with root package name */
        private List f34862p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f34863q;

        /* renamed from: r  reason: collision with root package name */
        private int f34864r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34865s;

        /* renamed from: t  reason: collision with root package name */
        private int f34866t;

        /* renamed from: u  reason: collision with root package name */
        private int f34867u;

        /* renamed from: v  reason: collision with root package name */
        private int f34868v;

        /* renamed from: w  reason: collision with root package name */
        private int f34869w;

        /* renamed from: x  reason: collision with root package name */
        private int f34870x;

        /* renamed from: y  reason: collision with root package name */
        private Type f34871y;

        /* renamed from: z  reason: collision with root package name */
        private int f34872z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final Argument f34873t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34874e;

            /* renamed from: i  reason: collision with root package name */
            private int f34875i;

            /* renamed from: o  reason: collision with root package name */
            private Projection f34876o;

            /* renamed from: p  reason: collision with root package name */
            private Type f34877p;

            /* renamed from: q  reason: collision with root package name */
            private int f34878q;

            /* renamed from: r  reason: collision with root package name */
            private byte f34879r;

            /* renamed from: s  reason: collision with root package name */
            private int f34880s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34881e;

                /* renamed from: i  reason: collision with root package name */
                private Projection f34882i = Projection.INV;

                /* renamed from: o  reason: collision with root package name */
                private Type f34883o = Type.getDefaultInstance();

                /* renamed from: p  reason: collision with root package name */
                private int f34884p;

                private Builder() {
                    d();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                }

                public Argument buildPartial() {
                    Argument argument = new Argument(this);
                    int i10 = this.f34881e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f34876o = this.f34882i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f34877p = this.f34883o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    argument.f34878q = this.f34884p;
                    argument.f34875i = i11;
                    return argument;
                }

                public Type getType() {
                    return this.f34883o;
                }

                public boolean hasType() {
                    if ((this.f34881e & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    if (hasType() && !getType().isInitialized()) {
                        return false;
                    }
                    return true;
                }

                public Builder mergeType(Type type) {
                    if ((this.f34881e & 2) == 2 && this.f34883o != Type.getDefaultInstance()) {
                        this.f34883o = Type.newBuilder(this.f34883o).mergeFrom(type).buildPartial();
                    } else {
                        this.f34883o = type;
                    }
                    this.f34881e |= 2;
                    return this;
                }

                public Builder setProjection(Projection projection) {
                    projection.getClass();
                    this.f34881e |= 1;
                    this.f34882i = projection;
                    return this;
                }

                public Builder setTypeId(int i10) {
                    this.f34881e |= 4;
                    this.f34884p = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public Argument build() {
                    Argument buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Argument getDefaultInstanceForType() {
                    return Argument.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(Argument argument) {
                    if (argument == Argument.getDefaultInstance()) {
                        return this;
                    }
                    if (argument.hasProjection()) {
                        setProjection(argument.getProjection());
                    }
                    if (argument.hasType()) {
                        mergeType(argument.getType());
                    }
                    if (argument.hasTypeId()) {
                        setTypeId(argument.getTypeId());
                    }
                    setUnknownFields(getUnknownFields().concat(argument.f34874e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public enum Projection implements Internal.EnumLite {
                IN(0, 0),
                OUT(1, 1),
                INV(2, 2),
                STAR(3, 3);
                

                /* renamed from: e  reason: collision with root package name */
                private static Internal.EnumLiteMap f34885e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34887d;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a implements Internal.EnumLiteMap {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                    /* renamed from: a */
                    public Projection findValueByNumber(int i10) {
                        return Projection.valueOf(i10);
                    }
                }

                Projection(int i10, int i11) {
                    this.f34887d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34887d;
                }

                public static Projection valueOf(int i10) {
                    if (i10 != 0) {
                        if (i10 != 1) {
                            if (i10 != 2) {
                                if (i10 != 3) {
                                    return null;
                                }
                                return STAR;
                            }
                            return INV;
                        }
                        return OUT;
                    }
                    return IN;
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public Argument parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new Argument(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                Argument argument = new Argument(true);
                f34873t = argument;
                argument.m();
            }

            public static Argument getDefaultInstance() {
                return f34873t;
            }

            private void m() {
                this.f34876o = Projection.INV;
                this.f34877p = Type.getDefaultInstance();
                this.f34878q = 0;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            public Projection getProjection() {
                return this.f34876o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34880s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34875i & 1) == 1) {
                    i10 = CodedOutputStream.computeEnumSize(1, this.f34876o.getNumber());
                } else {
                    i10 = 0;
                }
                if ((this.f34875i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f34877p);
                }
                if ((this.f34875i & 4) == 4) {
                    i10 += CodedOutputStream.computeInt32Size(3, this.f34878q);
                }
                int size = i10 + this.f34874e.size();
                this.f34880s = size;
                return size;
            }

            public Type getType() {
                return this.f34877p;
            }

            public int getTypeId() {
                return this.f34878q;
            }

            public boolean hasProjection() {
                if ((this.f34875i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f34875i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeId() {
                if ((this.f34875i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34879r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    this.f34879r = (byte) 0;
                    return false;
                }
                this.f34879r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34875i & 1) == 1) {
                    codedOutputStream.writeEnum(1, this.f34876o.getNumber());
                }
                if ((this.f34875i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f34877p);
                }
                if ((this.f34875i & 4) == 4) {
                    codedOutputStream.writeInt32(3, this.f34878q);
                }
                codedOutputStream.writeRawBytes(this.f34874e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f34873t;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private Argument(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f34879r = (byte) -1;
                this.f34880s = -1;
                this.f34874e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f34879r = (byte) -1;
                this.f34880s = -1;
                this.f34874e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34879r = (byte) -1;
                this.f34880s = -1;
                m();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                while (!z10) {
                    try {
                        try {
                            try {
                                int readTag = codedInputStream.readTag();
                                if (readTag != 0) {
                                    if (readTag == 8) {
                                        int readEnum = codedInputStream.readEnum();
                                        Projection valueOf = Projection.valueOf(readEnum);
                                        if (valueOf == null) {
                                            newInstance.writeRawVarint32(readTag);
                                            newInstance.writeRawVarint32(readEnum);
                                        } else {
                                            this.f34875i |= 1;
                                            this.f34876o = valueOf;
                                        }
                                    } else if (readTag == 18) {
                                        Builder builder = (this.f34875i & 2) == 2 ? this.f34877p.toBuilder() : null;
                                        Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                        this.f34877p = type;
                                        if (builder != null) {
                                            builder.mergeFrom(type);
                                            this.f34877p = builder.buildPartial();
                                        }
                                        this.f34875i |= 2;
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        this.f34875i |= 4;
                                        this.f34878q = codedInputStream.readInt32();
                                    }
                                }
                                z10 = true;
                            } catch (InvalidProtocolBufferException e10) {
                                throw e10.setUnfinishedMessage(this);
                            }
                        } catch (IOException e11) {
                            throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                        }
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34874e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34874e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34874e = newOutput.toByteString();
                    throw th4;
                }
                this.f34874e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Type, Builder> implements TypeOrBuilder {
            private int B;
            private int C;

            /* renamed from: o  reason: collision with root package name */
            private int f34888o;

            /* renamed from: q  reason: collision with root package name */
            private boolean f34890q;

            /* renamed from: r  reason: collision with root package name */
            private int f34891r;

            /* renamed from: t  reason: collision with root package name */
            private int f34893t;

            /* renamed from: u  reason: collision with root package name */
            private int f34894u;

            /* renamed from: v  reason: collision with root package name */
            private int f34895v;

            /* renamed from: w  reason: collision with root package name */
            private int f34896w;

            /* renamed from: x  reason: collision with root package name */
            private int f34897x;

            /* renamed from: z  reason: collision with root package name */
            private int f34899z;

            /* renamed from: p  reason: collision with root package name */
            private List f34889p = Collections.EMPTY_LIST;

            /* renamed from: s  reason: collision with root package name */
            private Type f34892s = Type.getDefaultInstance();

            /* renamed from: y  reason: collision with root package name */
            private Type f34898y = Type.getDefaultInstance();
            private Type A = Type.getDefaultInstance();

            private Builder() {
                k();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34888o & 1) != 1) {
                    this.f34889p = new ArrayList(this.f34889p);
                    this.f34888o |= 1;
                }
            }

            private void k() {
            }

            public Type buildPartial() {
                Type type = new Type(this);
                int i10 = this.f34888o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34889p = Collections.unmodifiableList(this.f34889p);
                    this.f34888o &= -2;
                }
                type.f34862p = this.f34889p;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                type.f34863q = this.f34890q;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                type.f34864r = this.f34891r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                type.f34865s = this.f34892s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                type.f34866t = this.f34893t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                type.f34867u = this.f34894u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                type.f34868v = this.f34895v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                type.f34869w = this.f34896w;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                type.f34870x = this.f34897x;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                type.f34871y = this.f34898y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                type.f34872z = this.f34899z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
                type.A = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
                type.B = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
                type.C = this.C;
                type.f34861o = i11;
                return type;
            }

            public Type getAbbreviatedType() {
                return this.A;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f34889p.get(i10);
            }

            public int getArgumentCount() {
                return this.f34889p.size();
            }

            public Type getFlexibleUpperBound() {
                return this.f34892s;
            }

            public Type getOuterType() {
                return this.f34898y;
            }

            public boolean hasAbbreviatedType() {
                if ((this.f34888o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            public boolean hasFlexibleUpperBound() {
                if ((this.f34888o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasOuterType() {
                if ((this.f34888o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                    if (!getArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasFlexibleUpperBound() && !getFlexibleUpperBound().isInitialized()) {
                    return false;
                }
                if (hasOuterType() && !getOuterType().isInitialized()) {
                    return false;
                }
                if ((hasAbbreviatedType() && !getAbbreviatedType().isInitialized()) || !e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeAbbreviatedType(Type type) {
                if ((this.f34888o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != Type.getDefaultInstance()) {
                    this.A = Type.newBuilder(this.A).mergeFrom(type).buildPartial();
                } else {
                    this.A = type;
                }
                this.f34888o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder mergeFlexibleUpperBound(Type type) {
                if ((this.f34888o & 8) == 8 && this.f34892s != Type.getDefaultInstance()) {
                    this.f34892s = Type.newBuilder(this.f34892s).mergeFrom(type).buildPartial();
                } else {
                    this.f34892s = type;
                }
                this.f34888o |= 8;
                return this;
            }

            public Builder mergeOuterType(Type type) {
                if ((this.f34888o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512 && this.f34898y != Type.getDefaultInstance()) {
                    this.f34898y = Type.newBuilder(this.f34898y).mergeFrom(type).buildPartial();
                } else {
                    this.f34898y = type;
                }
                this.f34888o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                return this;
            }

            public Builder setAbbreviatedTypeId(int i10) {
                this.f34888o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            public Builder setClassName(int i10) {
                this.f34888o |= 32;
                this.f34894u = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34888o |= 8192;
                this.C = i10;
                return this;
            }

            public Builder setFlexibleTypeCapabilitiesId(int i10) {
                this.f34888o |= 4;
                this.f34891r = i10;
                return this;
            }

            public Builder setFlexibleUpperBoundId(int i10) {
                this.f34888o |= 16;
                this.f34893t = i10;
                return this;
            }

            public Builder setNullable(boolean z10) {
                this.f34888o |= 2;
                this.f34890q = z10;
                return this;
            }

            public Builder setOuterTypeId(int i10) {
                this.f34888o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                this.f34899z = i10;
                return this;
            }

            public Builder setTypeAliasName(int i10) {
                this.f34888o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                this.f34897x = i10;
                return this;
            }

            public Builder setTypeParameter(int i10) {
                this.f34888o |= 64;
                this.f34895v = i10;
                return this;
            }

            public Builder setTypeParameterName(int i10) {
                this.f34888o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34896w = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Type build() {
                Type buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Type getDefaultInstanceForType() {
                return Type.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Type type) {
                if (type == Type.getDefaultInstance()) {
                    return this;
                }
                if (!type.f34862p.isEmpty()) {
                    if (this.f34889p.isEmpty()) {
                        this.f34889p = type.f34862p;
                        this.f34888o &= -2;
                    } else {
                        j();
                        this.f34889p.addAll(type.f34862p);
                    }
                }
                if (type.hasNullable()) {
                    setNullable(type.getNullable());
                }
                if (type.hasFlexibleTypeCapabilitiesId()) {
                    setFlexibleTypeCapabilitiesId(type.getFlexibleTypeCapabilitiesId());
                }
                if (type.hasFlexibleUpperBound()) {
                    mergeFlexibleUpperBound(type.getFlexibleUpperBound());
                }
                if (type.hasFlexibleUpperBoundId()) {
                    setFlexibleUpperBoundId(type.getFlexibleUpperBoundId());
                }
                if (type.hasClassName()) {
                    setClassName(type.getClassName());
                }
                if (type.hasTypeParameter()) {
                    setTypeParameter(type.getTypeParameter());
                }
                if (type.hasTypeParameterName()) {
                    setTypeParameterName(type.getTypeParameterName());
                }
                if (type.hasTypeAliasName()) {
                    setTypeAliasName(type.getTypeAliasName());
                }
                if (type.hasOuterType()) {
                    mergeOuterType(type.getOuterType());
                }
                if (type.hasOuterTypeId()) {
                    setOuterTypeId(type.getOuterTypeId());
                }
                if (type.hasAbbreviatedType()) {
                    mergeAbbreviatedType(type.getAbbreviatedType());
                }
                if (type.hasAbbreviatedTypeId()) {
                    setAbbreviatedTypeId(type.getAbbreviatedTypeId());
                }
                if (type.hasFlags()) {
                    setFlags(type.getFlags());
                }
                f(type);
                setUnknownFields(getUnknownFields().concat(type.f34860i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Type parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Type(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Type type = new Type(true);
            F = type;
            type.D();
        }

        private void D() {
            this.f34862p = Collections.EMPTY_LIST;
            this.f34863q = false;
            this.f34864r = 0;
            this.f34865s = getDefaultInstance();
            this.f34866t = 0;
            this.f34867u = 0;
            this.f34868v = 0;
            this.f34869w = 0;
            this.f34870x = 0;
            this.f34871y = getDefaultInstance();
            this.f34872z = 0;
            this.A = getDefaultInstance();
            this.B = 0;
            this.C = 0;
        }

        public static Type getDefaultInstance() {
            return F;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public Type getAbbreviatedType() {
            return this.A;
        }

        public int getAbbreviatedTypeId() {
            return this.B;
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f34862p.get(i10);
        }

        public int getArgumentCount() {
            return this.f34862p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f34862p;
        }

        public int getClassName() {
            return this.f34867u;
        }

        public int getFlags() {
            return this.C;
        }

        public int getFlexibleTypeCapabilitiesId() {
            return this.f34864r;
        }

        public Type getFlexibleUpperBound() {
            return this.f34865s;
        }

        public int getFlexibleUpperBoundId() {
            return this.f34866t;
        }

        public boolean getNullable() {
            return this.f34863q;
        }

        public Type getOuterType() {
            return this.f34871y;
        }

        public int getOuterTypeId() {
            return this.f34872z;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Type> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.E;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34861o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                i10 = CodedOutputStream.computeInt32Size(1, this.C);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f34862p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f34862p.get(i12));
            }
            if ((this.f34861o & 1) == 1) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f34863q);
            }
            if ((this.f34861o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f34864r);
            }
            if ((this.f34861o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34865s);
            }
            if ((this.f34861o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f34867u);
            }
            if ((this.f34861o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34868v);
            }
            if ((this.f34861o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f34866t);
            }
            if ((this.f34861o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34869w);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeMessageSize(10, this.f34871y);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f34872z);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeInt32Size(12, this.f34870x);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                i10 += CodedOutputStream.computeMessageSize(13, this.A);
            }
            if ((this.f34861o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                i10 += CodedOutputStream.computeInt32Size(14, this.B);
            }
            int j10 = i10 + j() + this.f34860i.size();
            this.E = j10;
            return j10;
        }

        public int getTypeAliasName() {
            return this.f34870x;
        }

        public int getTypeParameter() {
            return this.f34868v;
        }

        public int getTypeParameterName() {
            return this.f34869w;
        }

        public boolean hasAbbreviatedType() {
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                return true;
            }
            return false;
        }

        public boolean hasAbbreviatedTypeId() {
            if ((this.f34861o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                return true;
            }
            return false;
        }

        public boolean hasClassName() {
            if ((this.f34861o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34861o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleTypeCapabilitiesId() {
            if ((this.f34861o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBound() {
            if ((this.f34861o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBoundId() {
            if ((this.f34861o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasNullable() {
            if ((this.f34861o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasOuterType() {
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasOuterTypeId() {
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasTypeAliasName() {
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameter() {
            if ((this.f34861o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameterName() {
            if ((this.f34861o & 64) == 64) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.D;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.D = (byte) 0;
                    return false;
                }
            }
            if (hasFlexibleUpperBound() && !getFlexibleUpperBound().isInitialized()) {
                this.D = (byte) 0;
                return false;
            } else if (hasOuterType() && !getOuterType().isInitialized()) {
                this.D = (byte) 0;
                return false;
            } else if (hasAbbreviatedType() && !getAbbreviatedType().isInitialized()) {
                this.D = (byte) 0;
                return false;
            } else if (!i()) {
                this.D = (byte) 0;
                return false;
            } else {
                this.D = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34861o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                codedOutputStream.writeInt32(1, this.C);
            }
            for (int i10 = 0; i10 < this.f34862p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f34862p.get(i10));
            }
            if ((this.f34861o & 1) == 1) {
                codedOutputStream.writeBool(3, this.f34863q);
            }
            if ((this.f34861o & 2) == 2) {
                codedOutputStream.writeInt32(4, this.f34864r);
            }
            if ((this.f34861o & 4) == 4) {
                codedOutputStream.writeMessage(5, this.f34865s);
            }
            if ((this.f34861o & 16) == 16) {
                codedOutputStream.writeInt32(6, this.f34867u);
            }
            if ((this.f34861o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f34868v);
            }
            if ((this.f34861o & 8) == 8) {
                codedOutputStream.writeInt32(8, this.f34866t);
            }
            if ((this.f34861o & 64) == 64) {
                codedOutputStream.writeInt32(9, this.f34869w);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(10, this.f34871y);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(11, this.f34872z);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeInt32(12, this.f34870x);
            }
            if ((this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                codedOutputStream.writeMessage(13, this.A);
            }
            if ((this.f34861o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                codedOutputStream.writeInt32(14, this.B);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34860i);
        }

        public static Builder newBuilder(Type type) {
            return newBuilder().mergeFrom(type);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Type getDefaultInstanceForType() {
            return F;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Type(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.D = (byte) -1;
            this.E = -1;
            this.f34860i = extendableBuilder.getUnknownFields();
        }

        private Type(boolean z10) {
            this.D = (byte) -1;
            this.E = -1;
            this.f34860i = ByteString.EMPTY;
        }

        private Type(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Builder builder;
            this.D = (byte) -1;
            this.E = -1;
            D();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    break;
                                case 8:
                                    this.f34861o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                    if (!z11) {
                                        this.f34862p = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34862p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                    this.f34861o |= 1;
                                    this.f34863q = codedInputStream.readBool();
                                    continue;
                                case 32:
                                    this.f34861o |= 2;
                                    this.f34864r = codedInputStream.readInt32();
                                    continue;
                                case 42:
                                    builder = (this.f34861o & 4) == 4 ? this.f34865s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f34865s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34865s = builder.buildPartial();
                                    }
                                    this.f34861o |= 4;
                                    continue;
                                case 48:
                                    this.f34861o |= 16;
                                    this.f34867u = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34861o |= 32;
                                    this.f34868v = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f34861o |= 8;
                                    this.f34866t = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f34861o |= 64;
                                    this.f34869w = codedInputStream.readInt32();
                                    continue;
                                case 82:
                                    builder = (this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.f34871y.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f34871y = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34871y = builder.buildPartial();
                                    }
                                    this.f34861o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    continue;
                                case 88:
                                    this.f34861o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.f34872z = codedInputStream.readInt32();
                                    continue;
                                case 96:
                                    this.f34861o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    this.f34870x = codedInputStream.readInt32();
                                    continue;
                                case 106:
                                    builder = (this.f34861o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 ? this.A.toBuilder() : null;
                                    Type type3 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.A = type3;
                                    if (builder != null) {
                                        builder.mergeFrom(type3);
                                        this.A = builder.buildPartial();
                                    }
                                    this.f34861o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                                    continue;
                                case 112:
                                    this.f34861o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                default:
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        break;
                                    } else {
                                        continue;
                                    }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f34862p = Collections.unmodifiableList(this.f34862p);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34860i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34860i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34862p = Collections.unmodifiableList(this.f34862p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34860i = newOutput.toByteString();
                throw th4;
            }
            this.f34860i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeAlias extends GeneratedMessageLite.ExtendableMessage<TypeAlias> implements TypeAliasOrBuilder {
        private static final TypeAlias B;
        public static Parser<TypeAlias> PARSER = new a();
        private int A;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34900i;

        /* renamed from: o  reason: collision with root package name */
        private int f34901o;

        /* renamed from: p  reason: collision with root package name */
        private int f34902p;

        /* renamed from: q  reason: collision with root package name */
        private int f34903q;

        /* renamed from: r  reason: collision with root package name */
        private List f34904r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34905s;

        /* renamed from: t  reason: collision with root package name */
        private int f34906t;

        /* renamed from: u  reason: collision with root package name */
        private Type f34907u;

        /* renamed from: v  reason: collision with root package name */
        private int f34908v;

        /* renamed from: w  reason: collision with root package name */
        private List f34909w;

        /* renamed from: x  reason: collision with root package name */
        private List f34910x;

        /* renamed from: y  reason: collision with root package name */
        private List f34911y;

        /* renamed from: z  reason: collision with root package name */
        private byte f34912z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeAlias, Builder> implements TypeAliasOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34913o;

            /* renamed from: p  reason: collision with root package name */
            private int f34914p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f34915q;

            /* renamed from: r  reason: collision with root package name */
            private List f34916r;

            /* renamed from: s  reason: collision with root package name */
            private Type f34917s;

            /* renamed from: t  reason: collision with root package name */
            private int f34918t;

            /* renamed from: u  reason: collision with root package name */
            private Type f34919u;

            /* renamed from: v  reason: collision with root package name */
            private int f34920v;

            /* renamed from: w  reason: collision with root package name */
            private List f34921w;

            /* renamed from: x  reason: collision with root package name */
            private List f34922x;

            /* renamed from: y  reason: collision with root package name */
            private List f34923y;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34916r = list;
                this.f34917s = Type.getDefaultInstance();
                this.f34919u = Type.getDefaultInstance();
                this.f34921w = list;
                this.f34922x = list;
                this.f34923y = list;
                o();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34913o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f34921w = new ArrayList(this.f34921w);
                    this.f34913o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void k() {
                if ((this.f34913o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34923y = new ArrayList(this.f34923y);
                    this.f34913o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34913o & 4) != 4) {
                    this.f34916r = new ArrayList(this.f34916r);
                    this.f34913o |= 4;
                }
            }

            private void m() {
                if ((this.f34913o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34922x = new ArrayList(this.f34922x);
                    this.f34913o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void o() {
            }

            public TypeAlias buildPartial() {
                TypeAlias typeAlias = new TypeAlias(this);
                int i10 = this.f34913o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeAlias.f34902p = this.f34914p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeAlias.f34903q = this.f34915q;
                if ((this.f34913o & 4) == 4) {
                    this.f34916r = Collections.unmodifiableList(this.f34916r);
                    this.f34913o &= -5;
                }
                typeAlias.f34904r = this.f34916r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                typeAlias.f34905s = this.f34917s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                typeAlias.f34906t = this.f34918t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                typeAlias.f34907u = this.f34919u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                typeAlias.f34908v = this.f34920v;
                if ((this.f34913o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f34921w = Collections.unmodifiableList(this.f34921w);
                    this.f34913o &= -129;
                }
                typeAlias.f34909w = this.f34921w;
                if ((this.f34913o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34922x = Collections.unmodifiableList(this.f34922x);
                    this.f34913o &= -257;
                }
                typeAlias.f34910x = this.f34922x;
                if ((this.f34913o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34923y = Collections.unmodifiableList(this.f34923y);
                    this.f34913o &= -513;
                }
                typeAlias.f34911y = this.f34923y;
                typeAlias.f34901o = i11;
                return typeAlias;
            }

            public Annotation getAnnotation(int i10) {
                return (Annotation) this.f34921w.get(i10);
            }

            public int getAnnotationCount() {
                return this.f34921w.size();
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f34923y.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f34923y.size();
            }

            public Type getExpandedType() {
                return this.f34919u;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34916r.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34916r.size();
            }

            public Type getUnderlyingType() {
                return this.f34917s;
            }

            public boolean hasExpandedType() {
                if ((this.f34913o & 32) == 32) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34913o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasUnderlyingType() {
                if ((this.f34913o & 8) == 8) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                    return false;
                }
                if (hasExpandedType() && !getExpandedType().isInitialized()) {
                    return false;
                }
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeExpandedType(Type type) {
                if ((this.f34913o & 32) == 32 && this.f34919u != Type.getDefaultInstance()) {
                    this.f34919u = Type.newBuilder(this.f34919u).mergeFrom(type).buildPartial();
                } else {
                    this.f34919u = type;
                }
                this.f34913o |= 32;
                return this;
            }

            public Builder mergeUnderlyingType(Type type) {
                if ((this.f34913o & 8) == 8 && this.f34917s != Type.getDefaultInstance()) {
                    this.f34917s = Type.newBuilder(this.f34917s).mergeFrom(type).buildPartial();
                } else {
                    this.f34917s = type;
                }
                this.f34913o |= 8;
                return this;
            }

            public Builder setExpandedTypeId(int i10) {
                this.f34913o |= 64;
                this.f34920v = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34913o |= 1;
                this.f34914p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34913o |= 2;
                this.f34915q = i10;
                return this;
            }

            public Builder setUnderlyingTypeId(int i10) {
                this.f34913o |= 16;
                this.f34918t = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public TypeAlias build() {
                TypeAlias buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public TypeAlias getDefaultInstanceForType() {
                return TypeAlias.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(TypeAlias typeAlias) {
                if (typeAlias == TypeAlias.getDefaultInstance()) {
                    return this;
                }
                if (typeAlias.hasFlags()) {
                    setFlags(typeAlias.getFlags());
                }
                if (typeAlias.hasName()) {
                    setName(typeAlias.getName());
                }
                if (!typeAlias.f34904r.isEmpty()) {
                    if (this.f34916r.isEmpty()) {
                        this.f34916r = typeAlias.f34904r;
                        this.f34913o &= -5;
                    } else {
                        l();
                        this.f34916r.addAll(typeAlias.f34904r);
                    }
                }
                if (typeAlias.hasUnderlyingType()) {
                    mergeUnderlyingType(typeAlias.getUnderlyingType());
                }
                if (typeAlias.hasUnderlyingTypeId()) {
                    setUnderlyingTypeId(typeAlias.getUnderlyingTypeId());
                }
                if (typeAlias.hasExpandedType()) {
                    mergeExpandedType(typeAlias.getExpandedType());
                }
                if (typeAlias.hasExpandedTypeId()) {
                    setExpandedTypeId(typeAlias.getExpandedTypeId());
                }
                if (!typeAlias.f34909w.isEmpty()) {
                    if (this.f34921w.isEmpty()) {
                        this.f34921w = typeAlias.f34909w;
                        this.f34913o &= -129;
                    } else {
                        j();
                        this.f34921w.addAll(typeAlias.f34909w);
                    }
                }
                if (!typeAlias.f34910x.isEmpty()) {
                    if (this.f34922x.isEmpty()) {
                        this.f34922x = typeAlias.f34910x;
                        this.f34913o &= -257;
                    } else {
                        m();
                        this.f34922x.addAll(typeAlias.f34910x);
                    }
                }
                if (!typeAlias.f34911y.isEmpty()) {
                    if (this.f34923y.isEmpty()) {
                        this.f34923y = typeAlias.f34911y;
                        this.f34913o &= -513;
                    } else {
                        k();
                        this.f34923y.addAll(typeAlias.f34911y);
                    }
                }
                f(typeAlias);
                setUnknownFields(getUnknownFields().concat(typeAlias.f34900i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public TypeAlias parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new TypeAlias(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            TypeAlias typeAlias = new TypeAlias(true);
            B = typeAlias;
            typeAlias.C();
        }

        private void C() {
            this.f34902p = 6;
            this.f34903q = 0;
            List list = Collections.EMPTY_LIST;
            this.f34904r = list;
            this.f34905s = Type.getDefaultInstance();
            this.f34906t = 0;
            this.f34907u = Type.getDefaultInstance();
            this.f34908v = 0;
            this.f34909w = list;
            this.f34910x = list;
            this.f34911y = list;
        }

        public static TypeAlias getDefaultInstance() {
            return B;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static TypeAlias parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public Annotation getAnnotation(int i10) {
            return (Annotation) this.f34909w.get(i10);
        }

        public int getAnnotationCount() {
            return this.f34909w.size();
        }

        public List<Annotation> getAnnotationList() {
            return this.f34909w;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f34911y.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f34911y.size();
        }

        public Type getExpandedType() {
            return this.f34907u;
        }

        public int getExpandedTypeId() {
            return this.f34908v;
        }

        public int getFlags() {
            return this.f34902p;
        }

        public int getName() {
            return this.f34903q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeAlias> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.A;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34901o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34902p);
            } else {
                i10 = 0;
            }
            if ((this.f34901o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34903q);
            }
            for (int i12 = 0; i12 < this.f34904r.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f34904r.get(i12));
            }
            if ((this.f34901o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34905s);
            }
            if ((this.f34901o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34906t);
            }
            if ((this.f34901o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(6, this.f34907u);
            }
            if ((this.f34901o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34908v);
            }
            for (int i13 = 0; i13 < this.f34909w.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.f34909w.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f34910x.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34910x.get(i15)).intValue());
            }
            int size = i10 + i14 + (getVersionRequirementList().size() * 2);
            for (int i16 = 0; i16 < this.f34911y.size(); i16++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f34911y.get(i16));
            }
            int j10 = size + j() + this.f34900i.size();
            this.A = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34904r.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34904r.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34904r;
        }

        public Type getUnderlyingType() {
            return this.f34905s;
        }

        public int getUnderlyingTypeId() {
            return this.f34906t;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f34910x;
        }

        public boolean hasExpandedType() {
            if ((this.f34901o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasExpandedTypeId() {
            if ((this.f34901o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34901o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34901o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingType() {
            if ((this.f34901o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingTypeId() {
            if ((this.f34901o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34912z;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f34912z = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.f34912z = (byte) 0;
                    return false;
                }
            }
            if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                this.f34912z = (byte) 0;
                return false;
            } else if (hasExpandedType() && !getExpandedType().isInitialized()) {
                this.f34912z = (byte) 0;
                return false;
            } else {
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        this.f34912z = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.f34912z = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34912z = (byte) 0;
                    return false;
                }
                this.f34912z = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34901o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34902p);
            }
            if ((this.f34901o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34903q);
            }
            for (int i10 = 0; i10 < this.f34904r.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f34904r.get(i10));
            }
            if ((this.f34901o & 4) == 4) {
                codedOutputStream.writeMessage(4, this.f34905s);
            }
            if ((this.f34901o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f34906t);
            }
            if ((this.f34901o & 16) == 16) {
                codedOutputStream.writeMessage(6, this.f34907u);
            }
            if ((this.f34901o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f34908v);
            }
            for (int i11 = 0; i11 < this.f34909w.size(); i11++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.f34909w.get(i11));
            }
            for (int i12 = 0; i12 < this.f34910x.size(); i12++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f34910x.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.f34911y.size(); i13++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f34911y.get(i13));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34900i);
        }

        public static Builder newBuilder(TypeAlias typeAlias) {
            return newBuilder().mergeFrom(typeAlias);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeAlias getDefaultInstanceForType() {
            return B;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private TypeAlias(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34912z = (byte) -1;
            this.A = -1;
            this.f34900i = extendableBuilder.getUnknownFields();
        }

        private TypeAlias(boolean z10) {
            this.f34912z = (byte) -1;
            this.A = -1;
            this.f34900i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private TypeAlias(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f34912z = (byte) -1;
            this.A = -1;
            C();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (true) {
                ?? r52 = 128;
                if (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    break;
                                case 8:
                                    this.f34901o |= 1;
                                    this.f34902p = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f34901o |= 2;
                                    this.f34903q = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    if (!(z11 & true)) {
                                        this.f34904r = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34904r.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    builder = (this.f34901o & 4) == 4 ? this.f34905s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34905s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34905s = builder.buildPartial();
                                    }
                                    this.f34901o |= 4;
                                    continue;
                                case 40:
                                    this.f34901o |= 8;
                                    this.f34906t = codedInputStream.readInt32();
                                    continue;
                                case 50:
                                    builder = (this.f34901o & 16) == 16 ? this.f34907u.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34907u = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34907u = builder.buildPartial();
                                    }
                                    this.f34901o |= 16;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34901o |= 32;
                                    this.f34908v = codedInputStream.readInt32();
                                    continue;
                                case 66:
                                    if (!(z11 & true)) {
                                        this.f34909w = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34909w.add(codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite));
                                    continue;
                                case 248:
                                    if (!(z11 & true)) {
                                        this.f34910x = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34910x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34910x = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34910x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    break;
                                case 258:
                                    if (!(z11 & true)) {
                                        this.f34911y = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34911y.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                    continue;
                                default:
                                    r52 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                    if (r52 == 0) {
                                        break;
                                    } else {
                                        continue;
                                    }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            if (z11 & true) {
                                this.f34904r = Collections.unmodifiableList(this.f34904r);
                            }
                            if ((z11 & true) == r52) {
                                this.f34909w = Collections.unmodifiableList(this.f34909w);
                            }
                            if (z11 & true) {
                                this.f34910x = Collections.unmodifiableList(this.f34910x);
                            }
                            if (z11 & true) {
                                this.f34911y = Collections.unmodifiableList(this.f34911y);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f34900i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34900i = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } else {
                    if (z11 & true) {
                        this.f34904r = Collections.unmodifiableList(this.f34904r);
                    }
                    if (z11 & true) {
                        this.f34909w = Collections.unmodifiableList(this.f34909w);
                    }
                    if (z11 & true) {
                        this.f34910x = Collections.unmodifiableList(this.f34910x);
                    }
                    if (z11 & true) {
                        this.f34911y = Collections.unmodifiableList(this.f34911y);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f34900i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34900i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeAliasOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeParameter extends GeneratedMessageLite.ExtendableMessage<TypeParameter> implements TypeParameterOrBuilder {
        public static Parser<TypeParameter> PARSER = new a();

        /* renamed from: y  reason: collision with root package name */
        private static final TypeParameter f34924y;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34925i;

        /* renamed from: o  reason: collision with root package name */
        private int f34926o;

        /* renamed from: p  reason: collision with root package name */
        private int f34927p;

        /* renamed from: q  reason: collision with root package name */
        private int f34928q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f34929r;

        /* renamed from: s  reason: collision with root package name */
        private Variance f34930s;

        /* renamed from: t  reason: collision with root package name */
        private List f34931t;

        /* renamed from: u  reason: collision with root package name */
        private List f34932u;

        /* renamed from: v  reason: collision with root package name */
        private int f34933v;

        /* renamed from: w  reason: collision with root package name */
        private byte f34934w;

        /* renamed from: x  reason: collision with root package name */
        private int f34935x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeParameter, Builder> implements TypeParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34936o;

            /* renamed from: p  reason: collision with root package name */
            private int f34937p;

            /* renamed from: q  reason: collision with root package name */
            private int f34938q;

            /* renamed from: r  reason: collision with root package name */
            private boolean f34939r;

            /* renamed from: s  reason: collision with root package name */
            private Variance f34940s = Variance.INV;

            /* renamed from: t  reason: collision with root package name */
            private List f34941t;

            /* renamed from: u  reason: collision with root package name */
            private List f34942u;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34941t = list;
                this.f34942u = list;
                l();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34936o & 32) != 32) {
                    this.f34942u = new ArrayList(this.f34942u);
                    this.f34936o |= 32;
                }
            }

            private void k() {
                if ((this.f34936o & 16) != 16) {
                    this.f34941t = new ArrayList(this.f34941t);
                    this.f34936o |= 16;
                }
            }

            private void l() {
            }

            public TypeParameter buildPartial() {
                TypeParameter typeParameter = new TypeParameter(this);
                int i10 = this.f34936o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeParameter.f34927p = this.f34937p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeParameter.f34928q = this.f34938q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                typeParameter.f34929r = this.f34939r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                typeParameter.f34930s = this.f34940s;
                if ((this.f34936o & 16) == 16) {
                    this.f34941t = Collections.unmodifiableList(this.f34941t);
                    this.f34936o &= -17;
                }
                typeParameter.f34931t = this.f34941t;
                if ((this.f34936o & 32) == 32) {
                    this.f34942u = Collections.unmodifiableList(this.f34942u);
                    this.f34936o &= -33;
                }
                typeParameter.f34932u = this.f34942u;
                typeParameter.f34926o = i11;
                return typeParameter;
            }

            public Type getUpperBound(int i10) {
                return (Type) this.f34941t.get(i10);
            }

            public int getUpperBoundCount() {
                return this.f34941t.size();
            }

            public boolean hasId() {
                if ((this.f34936o & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34936o & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasId() || !hasName()) {
                    return false;
                }
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder setId(int i10) {
                this.f34936o |= 1;
                this.f34937p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34936o |= 2;
                this.f34938q = i10;
                return this;
            }

            public Builder setReified(boolean z10) {
                this.f34936o |= 4;
                this.f34939r = z10;
                return this;
            }

            public Builder setVariance(Variance variance) {
                variance.getClass();
                this.f34936o |= 8;
                this.f34940s = variance;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public TypeParameter build() {
                TypeParameter buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public TypeParameter getDefaultInstanceForType() {
                return TypeParameter.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(TypeParameter typeParameter) {
                if (typeParameter == TypeParameter.getDefaultInstance()) {
                    return this;
                }
                if (typeParameter.hasId()) {
                    setId(typeParameter.getId());
                }
                if (typeParameter.hasName()) {
                    setName(typeParameter.getName());
                }
                if (typeParameter.hasReified()) {
                    setReified(typeParameter.getReified());
                }
                if (typeParameter.hasVariance()) {
                    setVariance(typeParameter.getVariance());
                }
                if (!typeParameter.f34931t.isEmpty()) {
                    if (this.f34941t.isEmpty()) {
                        this.f34941t = typeParameter.f34931t;
                        this.f34936o &= -17;
                    } else {
                        k();
                        this.f34941t.addAll(typeParameter.f34931t);
                    }
                }
                if (!typeParameter.f34932u.isEmpty()) {
                    if (this.f34942u.isEmpty()) {
                        this.f34942u = typeParameter.f34932u;
                        this.f34936o &= -33;
                    } else {
                        j();
                        this.f34942u.addAll(typeParameter.f34932u);
                    }
                }
                f(typeParameter);
                setUnknownFields(getUnknownFields().concat(typeParameter.f34925i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum Variance implements Internal.EnumLite {
            IN(0, 0),
            OUT(1, 1),
            INV(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34943e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34945d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public Variance findValueByNumber(int i10) {
                    return Variance.valueOf(i10);
                }
            }

            Variance(int i10, int i11) {
                this.f34945d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34945d;
            }

            public static Variance valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return INV;
                    }
                    return OUT;
                }
                return IN;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public TypeParameter parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new TypeParameter(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            TypeParameter typeParameter = new TypeParameter(true);
            f34924y = typeParameter;
            typeParameter.w();
        }

        public static TypeParameter getDefaultInstance() {
            return f34924y;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void w() {
            this.f34927p = 0;
            this.f34928q = 0;
            this.f34929r = false;
            this.f34930s = Variance.INV;
            List list = Collections.EMPTY_LIST;
            this.f34931t = list;
            this.f34932u = list;
        }

        public int getId() {
            return this.f34927p;
        }

        public int getName() {
            return this.f34928q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeParameter> getParserForType() {
            return PARSER;
        }

        public boolean getReified() {
            return this.f34929r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34935x;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34926o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34927p);
            } else {
                i10 = 0;
            }
            if ((this.f34926o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34928q);
            }
            if ((this.f34926o & 4) == 4) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f34929r);
            }
            if ((this.f34926o & 8) == 8) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f34930s.getNumber());
            }
            for (int i12 = 0; i12 < this.f34931t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f34931t.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f34932u.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34932u.get(i14)).intValue());
            }
            int i15 = i10 + i13;
            if (!getUpperBoundIdList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f34933v = i13;
            int j10 = i15 + j() + this.f34925i.size();
            this.f34935x = j10;
            return j10;
        }

        public Type getUpperBound(int i10) {
            return (Type) this.f34931t.get(i10);
        }

        public int getUpperBoundCount() {
            return this.f34931t.size();
        }

        public List<Integer> getUpperBoundIdList() {
            return this.f34932u;
        }

        public List<Type> getUpperBoundList() {
            return this.f34931t;
        }

        public Variance getVariance() {
            return this.f34930s;
        }

        public boolean hasId() {
            if ((this.f34926o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34926o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReified() {
            if ((this.f34926o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasVariance() {
            if ((this.f34926o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34934w;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f34934w = (byte) 0;
                return false;
            } else if (!hasName()) {
                this.f34934w = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        this.f34934w = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34934w = (byte) 0;
                    return false;
                }
                this.f34934w = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34926o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34927p);
            }
            if ((this.f34926o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34928q);
            }
            if ((this.f34926o & 4) == 4) {
                codedOutputStream.writeBool(3, this.f34929r);
            }
            if ((this.f34926o & 8) == 8) {
                codedOutputStream.writeEnum(4, this.f34930s.getNumber());
            }
            for (int i10 = 0; i10 < this.f34931t.size(); i10++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f34931t.get(i10));
            }
            if (getUpperBoundIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(50);
                codedOutputStream.writeRawVarint32(this.f34933v);
            }
            for (int i11 = 0; i11 < this.f34932u.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34932u.get(i11)).intValue());
            }
            k10.writeUntil(1000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34925i);
        }

        public static Builder newBuilder(TypeParameter typeParameter) {
            return newBuilder().mergeFrom(typeParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeParameter getDefaultInstanceForType() {
            return f34924y;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private TypeParameter(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34933v = -1;
            this.f34934w = (byte) -1;
            this.f34935x = -1;
            this.f34925i = extendableBuilder.getUnknownFields();
        }

        private TypeParameter(boolean z10) {
            this.f34933v = -1;
            this.f34934w = (byte) -1;
            this.f34935x = -1;
            this.f34925i = ByteString.EMPTY;
        }

        private TypeParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34933v = -1;
            this.f34934w = (byte) -1;
            this.f34935x = -1;
            w();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34926o |= 1;
                                this.f34927p = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34926o |= 2;
                                this.f34928q = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                this.f34926o |= 4;
                                this.f34929r = codedInputStream.readBool();
                            } else if (readTag == 32) {
                                int readEnum = codedInputStream.readEnum();
                                Variance valueOf = Variance.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34926o |= 8;
                                    this.f34930s = valueOf;
                                }
                            } else if (readTag == 42) {
                                if (!(z11 & true)) {
                                    this.f34931t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34931t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag == 48) {
                                if (!(z11 & true)) {
                                    this.f34932u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34932u.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 50) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34932u = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34932u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            }
                        }
                        z10 = true;
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11 & true) {
                        this.f34931t = Collections.unmodifiableList(this.f34931t);
                    }
                    if (z11 & true) {
                        this.f34932u = Collections.unmodifiableList(this.f34932u);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34925i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34925i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f34931t = Collections.unmodifiableList(this.f34931t);
            }
            if (z11 & true) {
                this.f34932u = Collections.unmodifiableList(this.f34932u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34925i = newOutput.toByteString();
                throw th4;
            }
            this.f34925i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeParameterOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeTable extends GeneratedMessageLite implements TypeTableOrBuilder {
        public static Parser<TypeTable> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final TypeTable f34946s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34947e;

        /* renamed from: i  reason: collision with root package name */
        private int f34948i;

        /* renamed from: o  reason: collision with root package name */
        private List f34949o;

        /* renamed from: p  reason: collision with root package name */
        private int f34950p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34951q;

        /* renamed from: r  reason: collision with root package name */
        private int f34952r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<TypeTable, Builder> implements TypeTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34953e;

            /* renamed from: i  reason: collision with root package name */
            private List f34954i = Collections.EMPTY_LIST;

            /* renamed from: o  reason: collision with root package name */
            private int f34955o = -1;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34953e & 1) != 1) {
                    this.f34954i = new ArrayList(this.f34954i);
                    this.f34953e |= 1;
                }
            }

            private void e() {
            }

            public TypeTable buildPartial() {
                TypeTable typeTable = new TypeTable(this);
                int i10 = this.f34953e;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34954i = Collections.unmodifiableList(this.f34954i);
                    this.f34953e &= -2;
                }
                typeTable.f34949o = this.f34954i;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                typeTable.f34950p = this.f34955o;
                typeTable.f34948i = i11;
                return typeTable;
            }

            public Type getType(int i10) {
                return (Type) this.f34954i.get(i10);
            }

            public int getTypeCount() {
                return this.f34954i.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getTypeCount(); i10++) {
                    if (!getType(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            public Builder setFirstNullable(int i10) {
                this.f34953e |= 2;
                this.f34955o = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public TypeTable build() {
                TypeTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public TypeTable getDefaultInstanceForType() {
                return TypeTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(TypeTable typeTable) {
                if (typeTable == TypeTable.getDefaultInstance()) {
                    return this;
                }
                if (!typeTable.f34949o.isEmpty()) {
                    if (this.f34954i.isEmpty()) {
                        this.f34954i = typeTable.f34949o;
                        this.f34953e &= -2;
                    } else {
                        d();
                        this.f34954i.addAll(typeTable.f34949o);
                    }
                }
                if (typeTable.hasFirstNullable()) {
                    setFirstNullable(typeTable.getFirstNullable());
                }
                setUnknownFields(getUnknownFields().concat(typeTable.f34947e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public TypeTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new TypeTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            TypeTable typeTable = new TypeTable(true);
            f34946s = typeTable;
            typeTable.m();
        }

        public static TypeTable getDefaultInstance() {
            return f34946s;
        }

        private void m() {
            this.f34949o = Collections.EMPTY_LIST;
            this.f34950p = -1;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getFirstNullable() {
            return this.f34950p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34952r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34949o.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34949o.get(i12));
            }
            if ((this.f34948i & 1) == 1) {
                i11 += CodedOutputStream.computeInt32Size(2, this.f34950p);
            }
            int size = i11 + this.f34947e.size();
            this.f34952r = size;
            return size;
        }

        public Type getType(int i10) {
            return (Type) this.f34949o.get(i10);
        }

        public int getTypeCount() {
            return this.f34949o.size();
        }

        public List<Type> getTypeList() {
            return this.f34949o;
        }

        public boolean hasFirstNullable() {
            if ((this.f34948i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34951q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getTypeCount(); i10++) {
                if (!getType(i10).isInitialized()) {
                    this.f34951q = (byte) 0;
                    return false;
                }
            }
            this.f34951q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34949o.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34949o.get(i10));
            }
            if ((this.f34948i & 1) == 1) {
                codedOutputStream.writeInt32(2, this.f34950p);
            }
            codedOutputStream.writeRawBytes(this.f34947e);
        }

        public static Builder newBuilder(TypeTable typeTable) {
            return newBuilder().mergeFrom(typeTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeTable getDefaultInstanceForType() {
            return f34946s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private TypeTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34951q = (byte) -1;
            this.f34952r = -1;
            this.f34947e = builder.getUnknownFields();
        }

        private TypeTable(boolean z10) {
            this.f34951q = (byte) -1;
            this.f34952r = -1;
            this.f34947e = ByteString.EMPTY;
        }

        private TypeTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34951q = (byte) -1;
            this.f34952r = -1;
            m();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 10) {
                                if (!z11) {
                                    this.f34949o = new ArrayList();
                                    z11 = true;
                                }
                                this.f34949o.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f34948i |= 1;
                                this.f34950p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11) {
                            this.f34949o = Collections.unmodifiableList(this.f34949o);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34947e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34947e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11) {
                this.f34949o = Collections.unmodifiableList(this.f34949o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34947e = newOutput.toByteString();
                throw th4;
            }
            this.f34947e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class ValueParameter extends GeneratedMessageLite.ExtendableMessage<ValueParameter> implements ValueParameterOrBuilder {
        public static Parser<ValueParameter> PARSER = new a();

        /* renamed from: x  reason: collision with root package name */
        private static final ValueParameter f34956x;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34957i;

        /* renamed from: o  reason: collision with root package name */
        private int f34958o;

        /* renamed from: p  reason: collision with root package name */
        private int f34959p;

        /* renamed from: q  reason: collision with root package name */
        private int f34960q;

        /* renamed from: r  reason: collision with root package name */
        private Type f34961r;

        /* renamed from: s  reason: collision with root package name */
        private int f34962s;

        /* renamed from: t  reason: collision with root package name */
        private Type f34963t;

        /* renamed from: u  reason: collision with root package name */
        private int f34964u;

        /* renamed from: v  reason: collision with root package name */
        private byte f34965v;

        /* renamed from: w  reason: collision with root package name */
        private int f34966w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<ValueParameter, Builder> implements ValueParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34967o;

            /* renamed from: p  reason: collision with root package name */
            private int f34968p;

            /* renamed from: q  reason: collision with root package name */
            private int f34969q;

            /* renamed from: s  reason: collision with root package name */
            private int f34971s;

            /* renamed from: u  reason: collision with root package name */
            private int f34973u;

            /* renamed from: r  reason: collision with root package name */
            private Type f34970r = Type.getDefaultInstance();

            /* renamed from: t  reason: collision with root package name */
            private Type f34972t = Type.getDefaultInstance();

            private Builder() {
                j();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
            }

            public ValueParameter buildPartial() {
                ValueParameter valueParameter = new ValueParameter(this);
                int i10 = this.f34967o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                valueParameter.f34959p = this.f34968p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                valueParameter.f34960q = this.f34969q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                valueParameter.f34961r = this.f34970r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                valueParameter.f34962s = this.f34971s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                valueParameter.f34963t = this.f34972t;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                valueParameter.f34964u = this.f34973u;
                valueParameter.f34958o = i11;
                return valueParameter;
            }

            public Type getType() {
                return this.f34970r;
            }

            public Type getVarargElementType() {
                return this.f34972t;
            }

            public boolean hasName() {
                if ((this.f34967o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f34967o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasVarargElementType() {
                if ((this.f34967o & 16) == 16) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    return false;
                }
                if ((hasVarargElementType() && !getVarargElementType().isInitialized()) || !e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeType(Type type) {
                if ((this.f34967o & 4) == 4 && this.f34970r != Type.getDefaultInstance()) {
                    this.f34970r = Type.newBuilder(this.f34970r).mergeFrom(type).buildPartial();
                } else {
                    this.f34970r = type;
                }
                this.f34967o |= 4;
                return this;
            }

            public Builder mergeVarargElementType(Type type) {
                if ((this.f34967o & 16) == 16 && this.f34972t != Type.getDefaultInstance()) {
                    this.f34972t = Type.newBuilder(this.f34972t).mergeFrom(type).buildPartial();
                } else {
                    this.f34972t = type;
                }
                this.f34967o |= 16;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34967o |= 1;
                this.f34968p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34967o |= 2;
                this.f34969q = i10;
                return this;
            }

            public Builder setTypeId(int i10) {
                this.f34967o |= 8;
                this.f34971s = i10;
                return this;
            }

            public Builder setVarargElementTypeId(int i10) {
                this.f34967o |= 32;
                this.f34973u = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public ValueParameter build() {
                ValueParameter buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public ValueParameter getDefaultInstanceForType() {
                return ValueParameter.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(ValueParameter valueParameter) {
                if (valueParameter == ValueParameter.getDefaultInstance()) {
                    return this;
                }
                if (valueParameter.hasFlags()) {
                    setFlags(valueParameter.getFlags());
                }
                if (valueParameter.hasName()) {
                    setName(valueParameter.getName());
                }
                if (valueParameter.hasType()) {
                    mergeType(valueParameter.getType());
                }
                if (valueParameter.hasTypeId()) {
                    setTypeId(valueParameter.getTypeId());
                }
                if (valueParameter.hasVarargElementType()) {
                    mergeVarargElementType(valueParameter.getVarargElementType());
                }
                if (valueParameter.hasVarargElementTypeId()) {
                    setVarargElementTypeId(valueParameter.getVarargElementTypeId());
                }
                f(valueParameter);
                setUnknownFields(getUnknownFields().concat(valueParameter.f34957i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public ValueParameter parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new ValueParameter(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            ValueParameter valueParameter = new ValueParameter(true);
            f34956x = valueParameter;
            valueParameter.u();
        }

        public static ValueParameter getDefaultInstance() {
            return f34956x;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void u() {
            this.f34959p = 0;
            this.f34960q = 0;
            this.f34961r = Type.getDefaultInstance();
            this.f34962s = 0;
            this.f34963t = Type.getDefaultInstance();
            this.f34964u = 0;
        }

        public int getFlags() {
            return this.f34959p;
        }

        public int getName() {
            return this.f34960q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<ValueParameter> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34966w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34958o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34959p);
            } else {
                i10 = 0;
            }
            if ((this.f34958o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34960q);
            }
            if ((this.f34958o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34961r);
            }
            if ((this.f34958o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34963t);
            }
            if ((this.f34958o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34962s);
            }
            if ((this.f34958o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f34964u);
            }
            int j10 = i10 + j() + this.f34957i.size();
            this.f34966w = j10;
            return j10;
        }

        public Type getType() {
            return this.f34961r;
        }

        public int getTypeId() {
            return this.f34962s;
        }

        public Type getVarargElementType() {
            return this.f34963t;
        }

        public int getVarargElementTypeId() {
            return this.f34964u;
        }

        public boolean hasFlags() {
            if ((this.f34958o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34958o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasType() {
            if ((this.f34958o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasTypeId() {
            if ((this.f34958o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementType() {
            if ((this.f34958o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementTypeId() {
            if ((this.f34958o & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34965v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f34965v = (byte) 0;
                return false;
            } else if (hasType() && !getType().isInitialized()) {
                this.f34965v = (byte) 0;
                return false;
            } else if (hasVarargElementType() && !getVarargElementType().isInitialized()) {
                this.f34965v = (byte) 0;
                return false;
            } else if (!i()) {
                this.f34965v = (byte) 0;
                return false;
            } else {
                this.f34965v = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34958o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34959p);
            }
            if ((this.f34958o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34960q);
            }
            if ((this.f34958o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f34961r);
            }
            if ((this.f34958o & 16) == 16) {
                codedOutputStream.writeMessage(4, this.f34963t);
            }
            if ((this.f34958o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f34962s);
            }
            if ((this.f34958o & 32) == 32) {
                codedOutputStream.writeInt32(6, this.f34964u);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34957i);
        }

        public static Builder newBuilder(ValueParameter valueParameter) {
            return newBuilder().mergeFrom(valueParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public ValueParameter getDefaultInstanceForType() {
            return f34956x;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private ValueParameter(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f34965v = (byte) -1;
            this.f34966w = -1;
            this.f34957i = extendableBuilder.getUnknownFields();
        }

        private ValueParameter(boolean z10) {
            this.f34965v = (byte) -1;
            this.f34966w = -1;
            this.f34957i = ByteString.EMPTY;
        }

        private ValueParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f34965v = (byte) -1;
            this.f34966w = -1;
            u();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34958o |= 1;
                                this.f34959p = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (readTag == 26) {
                                    builder = (this.f34958o & 4) == 4 ? this.f34961r.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34961r = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34961r = builder.buildPartial();
                                    }
                                    this.f34958o |= 4;
                                } else if (readTag == 34) {
                                    builder = (this.f34958o & 16) == 16 ? this.f34963t.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34963t = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34963t = builder.buildPartial();
                                    }
                                    this.f34958o |= 16;
                                } else if (readTag == 40) {
                                    this.f34958o |= 8;
                                    this.f34962s = codedInputStream.readInt32();
                                } else if (readTag != 48) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f34958o |= 32;
                                    this.f34964u = codedInputStream.readInt32();
                                }
                            } else {
                                this.f34958o |= 2;
                                this.f34960q = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34957i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34957i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34957i = newOutput.toByteString();
                throw th4;
            }
            this.f34957i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ValueParameterOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class VersionRequirement extends GeneratedMessageLite implements VersionRequirementOrBuilder {
        public static Parser<VersionRequirement> PARSER = new a();

        /* renamed from: w  reason: collision with root package name */
        private static final VersionRequirement f34974w;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34975e;

        /* renamed from: i  reason: collision with root package name */
        private int f34976i;

        /* renamed from: o  reason: collision with root package name */
        private int f34977o;

        /* renamed from: p  reason: collision with root package name */
        private int f34978p;

        /* renamed from: q  reason: collision with root package name */
        private Level f34979q;

        /* renamed from: r  reason: collision with root package name */
        private int f34980r;

        /* renamed from: s  reason: collision with root package name */
        private int f34981s;

        /* renamed from: t  reason: collision with root package name */
        private VersionKind f34982t;

        /* renamed from: u  reason: collision with root package name */
        private byte f34983u;

        /* renamed from: v  reason: collision with root package name */
        private int f34984v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirement, Builder> implements VersionRequirementOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34985e;

            /* renamed from: i  reason: collision with root package name */
            private int f34986i;

            /* renamed from: o  reason: collision with root package name */
            private int f34987o;

            /* renamed from: q  reason: collision with root package name */
            private int f34989q;

            /* renamed from: r  reason: collision with root package name */
            private int f34990r;

            /* renamed from: p  reason: collision with root package name */
            private Level f34988p = Level.ERROR;

            /* renamed from: s  reason: collision with root package name */
            private VersionKind f34991s = VersionKind.LANGUAGE_VERSION;

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public VersionRequirement buildPartial() {
                VersionRequirement versionRequirement = new VersionRequirement(this);
                int i10 = this.f34985e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                versionRequirement.f34977o = this.f34986i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                versionRequirement.f34978p = this.f34987o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                versionRequirement.f34979q = this.f34988p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                versionRequirement.f34980r = this.f34989q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                versionRequirement.f34981s = this.f34990r;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                versionRequirement.f34982t = this.f34991s;
                versionRequirement.f34976i = i11;
                return versionRequirement;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setErrorCode(int i10) {
                this.f34985e |= 8;
                this.f34989q = i10;
                return this;
            }

            public Builder setLevel(Level level) {
                level.getClass();
                this.f34985e |= 4;
                this.f34988p = level;
                return this;
            }

            public Builder setMessage(int i10) {
                this.f34985e |= 16;
                this.f34990r = i10;
                return this;
            }

            public Builder setVersion(int i10) {
                this.f34985e |= 1;
                this.f34986i = i10;
                return this;
            }

            public Builder setVersionFull(int i10) {
                this.f34985e |= 2;
                this.f34987o = i10;
                return this;
            }

            public Builder setVersionKind(VersionKind versionKind) {
                versionKind.getClass();
                this.f34985e |= 32;
                this.f34991s = versionKind;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public VersionRequirement build() {
                VersionRequirement buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public VersionRequirement getDefaultInstanceForType() {
                return VersionRequirement.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(VersionRequirement versionRequirement) {
                if (versionRequirement == VersionRequirement.getDefaultInstance()) {
                    return this;
                }
                if (versionRequirement.hasVersion()) {
                    setVersion(versionRequirement.getVersion());
                }
                if (versionRequirement.hasVersionFull()) {
                    setVersionFull(versionRequirement.getVersionFull());
                }
                if (versionRequirement.hasLevel()) {
                    setLevel(versionRequirement.getLevel());
                }
                if (versionRequirement.hasErrorCode()) {
                    setErrorCode(versionRequirement.getErrorCode());
                }
                if (versionRequirement.hasMessage()) {
                    setMessage(versionRequirement.getMessage());
                }
                if (versionRequirement.hasVersionKind()) {
                    setVersionKind(versionRequirement.getVersionKind());
                }
                setUnknownFields(getUnknownFields().concat(versionRequirement.f34975e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum Level implements Internal.EnumLite {
            WARNING(0, 0),
            ERROR(1, 1),
            HIDDEN(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34992e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34994d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public Level findValueByNumber(int i10) {
                    return Level.valueOf(i10);
                }
            }

            Level(int i10, int i11) {
                this.f34994d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34994d;
            }

            public static Level valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return HIDDEN;
                    }
                    return ERROR;
                }
                return WARNING;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum VersionKind implements Internal.EnumLite {
            LANGUAGE_VERSION(0, 0),
            COMPILER_VERSION(1, 1),
            API_VERSION(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f34995e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34997d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public VersionKind findValueByNumber(int i10) {
                    return VersionKind.valueOf(i10);
                }
            }

            VersionKind(int i10, int i11) {
                this.f34997d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34997d;
            }

            public static VersionKind valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return API_VERSION;
                    }
                    return COMPILER_VERSION;
                }
                return LANGUAGE_VERSION;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public VersionRequirement parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new VersionRequirement(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            VersionRequirement versionRequirement = new VersionRequirement(true);
            f34974w = versionRequirement;
            versionRequirement.p();
        }

        public static VersionRequirement getDefaultInstance() {
            return f34974w;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void p() {
            this.f34977o = 0;
            this.f34978p = 0;
            this.f34979q = Level.ERROR;
            this.f34980r = 0;
            this.f34981s = 0;
            this.f34982t = VersionKind.LANGUAGE_VERSION;
        }

        public int getErrorCode() {
            return this.f34980r;
        }

        public Level getLevel() {
            return this.f34979q;
        }

        public int getMessage() {
            return this.f34981s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirement> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34984v;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34976i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34977o);
            } else {
                i10 = 0;
            }
            if ((this.f34976i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34978p);
            }
            if ((this.f34976i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f34979q.getNumber());
            }
            if ((this.f34976i & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f34980r);
            }
            if ((this.f34976i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34981s);
            }
            if ((this.f34976i & 32) == 32) {
                i10 += CodedOutputStream.computeEnumSize(6, this.f34982t.getNumber());
            }
            int size = i10 + this.f34975e.size();
            this.f34984v = size;
            return size;
        }

        public int getVersion() {
            return this.f34977o;
        }

        public int getVersionFull() {
            return this.f34978p;
        }

        public VersionKind getVersionKind() {
            return this.f34982t;
        }

        public boolean hasErrorCode() {
            if ((this.f34976i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasLevel() {
            if ((this.f34976i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasMessage() {
            if ((this.f34976i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVersion() {
            if ((this.f34976i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionFull() {
            if ((this.f34976i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasVersionKind() {
            if ((this.f34976i & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34983u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34983u = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34976i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34977o);
            }
            if ((this.f34976i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34978p);
            }
            if ((this.f34976i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f34979q.getNumber());
            }
            if ((this.f34976i & 8) == 8) {
                codedOutputStream.writeInt32(4, this.f34980r);
            }
            if ((this.f34976i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f34981s);
            }
            if ((this.f34976i & 32) == 32) {
                codedOutputStream.writeEnum(6, this.f34982t.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f34975e);
        }

        public static Builder newBuilder(VersionRequirement versionRequirement) {
            return newBuilder().mergeFrom(versionRequirement);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirement getDefaultInstanceForType() {
            return f34974w;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private VersionRequirement(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f34983u = (byte) -1;
            this.f34984v = -1;
            this.f34975e = builder.getUnknownFields();
        }

        private VersionRequirement(boolean z10) {
            this.f34983u = (byte) -1;
            this.f34984v = -1;
            this.f34975e = ByteString.EMPTY;
        }

        private VersionRequirement(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34983u = (byte) -1;
            this.f34984v = -1;
            p();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f34976i |= 1;
                                this.f34977o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34976i |= 2;
                                this.f34978p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                Level valueOf = Level.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34976i |= 4;
                                    this.f34979q = valueOf;
                                }
                            } else if (readTag == 32) {
                                this.f34976i |= 8;
                                this.f34980r = codedInputStream.readInt32();
                            } else if (readTag == 40) {
                                this.f34976i |= 16;
                                this.f34981s = codedInputStream.readInt32();
                            } else if (readTag != 48) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int readEnum2 = codedInputStream.readEnum();
                                VersionKind valueOf2 = VersionKind.valueOf(readEnum2);
                                if (valueOf2 == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum2);
                                } else {
                                    this.f34976i |= 32;
                                    this.f34982t = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34975e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34975e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34975e = newOutput.toByteString();
                throw th4;
            }
            this.f34975e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface VersionRequirementOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class VersionRequirementTable extends GeneratedMessageLite implements VersionRequirementTableOrBuilder {
        public static Parser<VersionRequirementTable> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final VersionRequirementTable f34998q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34999e;

        /* renamed from: i  reason: collision with root package name */
        private List f35000i;

        /* renamed from: o  reason: collision with root package name */
        private byte f35001o;

        /* renamed from: p  reason: collision with root package name */
        private int f35002p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirementTable, Builder> implements VersionRequirementTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f35003e;

            /* renamed from: i  reason: collision with root package name */
            private List f35004i = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f35003e & 1) != 1) {
                    this.f35004i = new ArrayList(this.f35004i);
                    this.f35003e |= 1;
                }
            }

            private void e() {
            }

            public VersionRequirementTable buildPartial() {
                VersionRequirementTable versionRequirementTable = new VersionRequirementTable(this);
                if ((this.f35003e & 1) == 1) {
                    this.f35004i = Collections.unmodifiableList(this.f35004i);
                    this.f35003e &= -2;
                }
                versionRequirementTable.f35000i = this.f35004i;
                return versionRequirementTable;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public VersionRequirementTable build() {
                VersionRequirementTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public VersionRequirementTable getDefaultInstanceForType() {
                return VersionRequirementTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(VersionRequirementTable versionRequirementTable) {
                if (versionRequirementTable == VersionRequirementTable.getDefaultInstance()) {
                    return this;
                }
                if (!versionRequirementTable.f35000i.isEmpty()) {
                    if (this.f35004i.isEmpty()) {
                        this.f35004i = versionRequirementTable.f35000i;
                        this.f35003e &= -2;
                    } else {
                        d();
                        this.f35004i.addAll(versionRequirementTable.f35000i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(versionRequirementTable.f34999e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public VersionRequirementTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new VersionRequirementTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            VersionRequirementTable versionRequirementTable = new VersionRequirementTable(true);
            f34998q = versionRequirementTable;
            versionRequirementTable.k();
        }

        public static VersionRequirementTable getDefaultInstance() {
            return f34998q;
        }

        private void k() {
            this.f35000i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirementTable> getParserForType() {
            return PARSER;
        }

        public int getRequirementCount() {
            return this.f35000i.size();
        }

        public List<VersionRequirement> getRequirementList() {
            return this.f35000i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f35002p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f35000i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f35000i.get(i12));
            }
            int size = i11 + this.f34999e.size();
            this.f35002p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f35001o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f35001o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f35000i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f35000i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34999e);
        }

        public static Builder newBuilder(VersionRequirementTable versionRequirementTable) {
            return newBuilder().mergeFrom(versionRequirementTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirementTable getDefaultInstanceForType() {
            return f34998q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private VersionRequirementTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f35001o = (byte) -1;
            this.f35002p = -1;
            this.f34999e = builder.getUnknownFields();
        }

        private VersionRequirementTable(boolean z10) {
            this.f35001o = (byte) -1;
            this.f35002p = -1;
            this.f34999e = ByteString.EMPTY;
        }

        private VersionRequirementTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f35001o = (byte) -1;
            this.f35002p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    if (!z11) {
                                        this.f35000i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f35000i.add(codedInputStream.readMessage(VersionRequirement.PARSER, extensionRegistryLite));
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f35000i = Collections.unmodifiableList(this.f35000i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34999e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34999e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f35000i = Collections.unmodifiableList(this.f35000i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34999e = newOutput.toByteString();
                throw th4;
            }
            this.f34999e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface VersionRequirementTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum Visibility implements Internal.EnumLite {
        INTERNAL(0, 0),
        PRIVATE(1, 1),
        PROTECTED(2, 2),
        PUBLIC(3, 3),
        PRIVATE_TO_THIS(4, 4),
        LOCAL(5, 5);
        

        /* renamed from: e  reason: collision with root package name */
        private static Internal.EnumLiteMap f35005e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f35007d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements Internal.EnumLiteMap {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
            /* renamed from: a */
            public Visibility findValueByNumber(int i10) {
                return Visibility.valueOf(i10);
            }
        }

        Visibility(int i10, int i11) {
            this.f35007d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f35007d;
        }

        public static Visibility valueOf(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 != 4) {
                                if (i10 != 5) {
                                    return null;
                                }
                                return LOCAL;
                            }
                            return PRIVATE_TO_THIS;
                        }
                        return PUBLIC;
                    }
                    return PROTECTED;
                }
                return PRIVATE;
            }
            return INTERNAL;
        }
    }
}
