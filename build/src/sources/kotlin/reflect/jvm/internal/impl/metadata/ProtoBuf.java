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
        private static final Annotation f33276s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33277e;

        /* renamed from: i  reason: collision with root package name */
        private int f33278i;

        /* renamed from: o  reason: collision with root package name */
        private int f33279o;

        /* renamed from: p  reason: collision with root package name */
        private List f33280p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33281q;

        /* renamed from: r  reason: collision with root package name */
        private int f33282r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: s  reason: collision with root package name */
            private static final Argument f33283s;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33284e;

            /* renamed from: i  reason: collision with root package name */
            private int f33285i;

            /* renamed from: o  reason: collision with root package name */
            private int f33286o;

            /* renamed from: p  reason: collision with root package name */
            private Value f33287p;

            /* renamed from: q  reason: collision with root package name */
            private byte f33288q;

            /* renamed from: r  reason: collision with root package name */
            private int f33289r;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33290e;

                /* renamed from: i  reason: collision with root package name */
                private int f33291i;

                /* renamed from: o  reason: collision with root package name */
                private Value f33292o = Value.getDefaultInstance();

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
                    int i10 = this.f33290e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f33286o = this.f33291i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f33287p = this.f33292o;
                    argument.f33285i = i11;
                    return argument;
                }

                public Value getValue() {
                    return this.f33292o;
                }

                public boolean hasNameId() {
                    if ((this.f33290e & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                public boolean hasValue() {
                    if ((this.f33290e & 2) == 2) {
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
                    if ((this.f33290e & 2) == 2 && this.f33292o != Value.getDefaultInstance()) {
                        this.f33292o = Value.newBuilder(this.f33292o).mergeFrom(value).buildPartial();
                    } else {
                        this.f33292o = value;
                    }
                    this.f33290e |= 2;
                    return this;
                }

                public Builder setNameId(int i10) {
                    this.f33290e |= 1;
                    this.f33291i = i10;
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
                    setUnknownFields(getUnknownFields().concat(argument.f33284e));
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
                private final ByteString f33293e;

                /* renamed from: i  reason: collision with root package name */
                private int f33294i;

                /* renamed from: o  reason: collision with root package name */
                private Type f33295o;

                /* renamed from: p  reason: collision with root package name */
                private long f33296p;

                /* renamed from: q  reason: collision with root package name */
                private float f33297q;

                /* renamed from: r  reason: collision with root package name */
                private double f33298r;

                /* renamed from: s  reason: collision with root package name */
                private int f33299s;

                /* renamed from: t  reason: collision with root package name */
                private int f33300t;

                /* renamed from: u  reason: collision with root package name */
                private int f33301u;

                /* renamed from: v  reason: collision with root package name */
                private Annotation f33302v;

                /* renamed from: w  reason: collision with root package name */
                private List f33303w;

                /* renamed from: x  reason: collision with root package name */
                private int f33304x;

                /* renamed from: y  reason: collision with root package name */
                private int f33305y;

                /* renamed from: z  reason: collision with root package name */
                private byte f33306z;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class Builder extends GeneratedMessageLite.Builder<Value, Builder> implements ValueOrBuilder {

                    /* renamed from: e  reason: collision with root package name */
                    private int f33307e;

                    /* renamed from: o  reason: collision with root package name */
                    private long f33309o;

                    /* renamed from: p  reason: collision with root package name */
                    private float f33310p;

                    /* renamed from: q  reason: collision with root package name */
                    private double f33311q;

                    /* renamed from: r  reason: collision with root package name */
                    private int f33312r;

                    /* renamed from: s  reason: collision with root package name */
                    private int f33313s;

                    /* renamed from: t  reason: collision with root package name */
                    private int f33314t;

                    /* renamed from: w  reason: collision with root package name */
                    private int f33317w;

                    /* renamed from: x  reason: collision with root package name */
                    private int f33318x;

                    /* renamed from: i  reason: collision with root package name */
                    private Type f33308i = Type.BYTE;

                    /* renamed from: u  reason: collision with root package name */
                    private Annotation f33315u = Annotation.getDefaultInstance();

                    /* renamed from: v  reason: collision with root package name */
                    private List f33316v = Collections.EMPTY_LIST;

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
                        if ((this.f33307e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                            this.f33316v = new ArrayList(this.f33316v);
                            this.f33307e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                    }

                    private void e() {
                    }

                    public Value buildPartial() {
                        Value value = new Value(this);
                        int i10 = this.f33307e;
                        int i11 = 1;
                        if ((i10 & 1) != 1) {
                            i11 = 0;
                        }
                        value.f33295o = this.f33308i;
                        if ((i10 & 2) == 2) {
                            i11 |= 2;
                        }
                        value.f33296p = this.f33309o;
                        if ((i10 & 4) == 4) {
                            i11 |= 4;
                        }
                        value.f33297q = this.f33310p;
                        if ((i10 & 8) == 8) {
                            i11 |= 8;
                        }
                        value.f33298r = this.f33311q;
                        if ((i10 & 16) == 16) {
                            i11 |= 16;
                        }
                        value.f33299s = this.f33312r;
                        if ((i10 & 32) == 32) {
                            i11 |= 32;
                        }
                        value.f33300t = this.f33313s;
                        if ((i10 & 64) == 64) {
                            i11 |= 64;
                        }
                        value.f33301u = this.f33314t;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        }
                        value.f33302v = this.f33315u;
                        if ((this.f33307e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                            this.f33316v = Collections.unmodifiableList(this.f33316v);
                            this.f33307e &= -257;
                        }
                        value.f33303w = this.f33316v;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                        value.f33304x = this.f33317w;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        }
                        value.f33305y = this.f33318x;
                        value.f33294i = i11;
                        return value;
                    }

                    public Annotation getAnnotation() {
                        return this.f33315u;
                    }

                    public Value getArrayElement(int i10) {
                        return (Value) this.f33316v.get(i10);
                    }

                    public int getArrayElementCount() {
                        return this.f33316v.size();
                    }

                    public boolean hasAnnotation() {
                        if ((this.f33307e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
                        if ((this.f33307e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 && this.f33315u != Annotation.getDefaultInstance()) {
                            this.f33315u = Annotation.newBuilder(this.f33315u).mergeFrom(annotation).buildPartial();
                        } else {
                            this.f33315u = annotation;
                        }
                        this.f33307e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        return this;
                    }

                    public Builder setArrayDimensionCount(int i10) {
                        this.f33307e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        this.f33317w = i10;
                        return this;
                    }

                    public Builder setClassId(int i10) {
                        this.f33307e |= 32;
                        this.f33313s = i10;
                        return this;
                    }

                    public Builder setDoubleValue(double d10) {
                        this.f33307e |= 8;
                        this.f33311q = d10;
                        return this;
                    }

                    public Builder setEnumValueId(int i10) {
                        this.f33307e |= 64;
                        this.f33314t = i10;
                        return this;
                    }

                    public Builder setFlags(int i10) {
                        this.f33307e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        this.f33318x = i10;
                        return this;
                    }

                    public Builder setFloatValue(float f10) {
                        this.f33307e |= 4;
                        this.f33310p = f10;
                        return this;
                    }

                    public Builder setIntValue(long j10) {
                        this.f33307e |= 2;
                        this.f33309o = j10;
                        return this;
                    }

                    public Builder setStringValue(int i10) {
                        this.f33307e |= 16;
                        this.f33312r = i10;
                        return this;
                    }

                    public Builder setType(Type type) {
                        type.getClass();
                        this.f33307e |= 1;
                        this.f33308i = type;
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
                        if (!value.f33303w.isEmpty()) {
                            if (this.f33316v.isEmpty()) {
                                this.f33316v = value.f33303w;
                                this.f33307e &= -257;
                            } else {
                                d();
                                this.f33316v.addAll(value.f33303w);
                            }
                        }
                        if (value.hasArrayDimensionCount()) {
                            setArrayDimensionCount(value.getArrayDimensionCount());
                        }
                        if (value.hasFlags()) {
                            setFlags(value.getFlags());
                        }
                        setUnknownFields(getUnknownFields().concat(value.f33293e));
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
                    private static Internal.EnumLiteMap f33319e = new a();

                    /* renamed from: d  reason: collision with root package name */
                    private final int f33321d;

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
                        this.f33321d = i11;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                    public final int getNumber() {
                        return this.f33321d;
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
                    this.f33295o = Type.BYTE;
                    this.f33296p = 0L;
                    this.f33297q = 0.0f;
                    this.f33298r = 0.0d;
                    this.f33299s = 0;
                    this.f33300t = 0;
                    this.f33301u = 0;
                    this.f33302v = Annotation.getDefaultInstance();
                    this.f33303w = Collections.EMPTY_LIST;
                    this.f33304x = 0;
                    this.f33305y = 0;
                }

                public Annotation getAnnotation() {
                    return this.f33302v;
                }

                public int getArrayDimensionCount() {
                    return this.f33304x;
                }

                public Value getArrayElement(int i10) {
                    return (Value) this.f33303w.get(i10);
                }

                public int getArrayElementCount() {
                    return this.f33303w.size();
                }

                public List<Value> getArrayElementList() {
                    return this.f33303w;
                }

                public int getClassId() {
                    return this.f33300t;
                }

                public double getDoubleValue() {
                    return this.f33298r;
                }

                public int getEnumValueId() {
                    return this.f33301u;
                }

                public int getFlags() {
                    return this.f33305y;
                }

                public float getFloatValue() {
                    return this.f33297q;
                }

                public long getIntValue() {
                    return this.f33296p;
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
                    if ((this.f33294i & 1) == 1) {
                        i10 = CodedOutputStream.computeEnumSize(1, this.f33295o.getNumber());
                    } else {
                        i10 = 0;
                    }
                    if ((this.f33294i & 2) == 2) {
                        i10 += CodedOutputStream.computeSInt64Size(2, this.f33296p);
                    }
                    if ((this.f33294i & 4) == 4) {
                        i10 += CodedOutputStream.computeFloatSize(3, this.f33297q);
                    }
                    if ((this.f33294i & 8) == 8) {
                        i10 += CodedOutputStream.computeDoubleSize(4, this.f33298r);
                    }
                    if ((this.f33294i & 16) == 16) {
                        i10 += CodedOutputStream.computeInt32Size(5, this.f33299s);
                    }
                    if ((this.f33294i & 32) == 32) {
                        i10 += CodedOutputStream.computeInt32Size(6, this.f33300t);
                    }
                    if ((this.f33294i & 64) == 64) {
                        i10 += CodedOutputStream.computeInt32Size(7, this.f33301u);
                    }
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        i10 += CodedOutputStream.computeMessageSize(8, this.f33302v);
                    }
                    for (int i12 = 0; i12 < this.f33303w.size(); i12++) {
                        i10 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.f33303w.get(i12));
                    }
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        i10 += CodedOutputStream.computeInt32Size(10, this.f33305y);
                    }
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        i10 += CodedOutputStream.computeInt32Size(11, this.f33304x);
                    }
                    int size = i10 + this.f33293e.size();
                    this.A = size;
                    return size;
                }

                public int getStringValue() {
                    return this.f33299s;
                }

                public Type getType() {
                    return this.f33295o;
                }

                public boolean hasAnnotation() {
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        return true;
                    }
                    return false;
                }

                public boolean hasArrayDimensionCount() {
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        return true;
                    }
                    return false;
                }

                public boolean hasClassId() {
                    if ((this.f33294i & 32) == 32) {
                        return true;
                    }
                    return false;
                }

                public boolean hasDoubleValue() {
                    if ((this.f33294i & 8) == 8) {
                        return true;
                    }
                    return false;
                }

                public boolean hasEnumValueId() {
                    if ((this.f33294i & 64) == 64) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFlags() {
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFloatValue() {
                    if ((this.f33294i & 4) == 4) {
                        return true;
                    }
                    return false;
                }

                public boolean hasIntValue() {
                    if ((this.f33294i & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                public boolean hasStringValue() {
                    if ((this.f33294i & 16) == 16) {
                        return true;
                    }
                    return false;
                }

                public boolean hasType() {
                    if ((this.f33294i & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    byte b10 = this.f33306z;
                    if (b10 == 1) {
                        return true;
                    }
                    if (b10 == 0) {
                        return false;
                    }
                    if (hasAnnotation() && !getAnnotation().isInitialized()) {
                        this.f33306z = (byte) 0;
                        return false;
                    }
                    for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                        if (!getArrayElement(i10).isInitialized()) {
                            this.f33306z = (byte) 0;
                            return false;
                        }
                    }
                    this.f33306z = (byte) 1;
                    return true;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public void writeTo(CodedOutputStream codedOutputStream) {
                    getSerializedSize();
                    if ((this.f33294i & 1) == 1) {
                        codedOutputStream.writeEnum(1, this.f33295o.getNumber());
                    }
                    if ((this.f33294i & 2) == 2) {
                        codedOutputStream.writeSInt64(2, this.f33296p);
                    }
                    if ((this.f33294i & 4) == 4) {
                        codedOutputStream.writeFloat(3, this.f33297q);
                    }
                    if ((this.f33294i & 8) == 8) {
                        codedOutputStream.writeDouble(4, this.f33298r);
                    }
                    if ((this.f33294i & 16) == 16) {
                        codedOutputStream.writeInt32(5, this.f33299s);
                    }
                    if ((this.f33294i & 32) == 32) {
                        codedOutputStream.writeInt32(6, this.f33300t);
                    }
                    if ((this.f33294i & 64) == 64) {
                        codedOutputStream.writeInt32(7, this.f33301u);
                    }
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        codedOutputStream.writeMessage(8, this.f33302v);
                    }
                    for (int i10 = 0; i10 < this.f33303w.size(); i10++) {
                        codedOutputStream.writeMessage(9, (MessageLite) this.f33303w.get(i10));
                    }
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        codedOutputStream.writeInt32(10, this.f33305y);
                    }
                    if ((this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        codedOutputStream.writeInt32(11, this.f33304x);
                    }
                    codedOutputStream.writeRawBytes(this.f33293e);
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
                    this.f33306z = (byte) -1;
                    this.A = -1;
                    this.f33293e = builder.getUnknownFields();
                }

                private Value(boolean z10) {
                    this.f33306z = (byte) -1;
                    this.A = -1;
                    this.f33293e = ByteString.EMPTY;
                }

                /* JADX WARN: Multi-variable type inference failed */
                /* JADX WARN: Type inference failed for: r5v0 */
                /* JADX WARN: Type inference failed for: r5v1 */
                /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
                private Value(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    this.f33306z = (byte) -1;
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
                                                this.f33294i |= 1;
                                                this.f33295o = valueOf;
                                                continue;
                                            }
                                        case 16:
                                            this.f33294i |= 2;
                                            this.f33296p = codedInputStream.readSInt64();
                                            continue;
                                        case 29:
                                            this.f33294i |= 4;
                                            this.f33297q = codedInputStream.readFloat();
                                            continue;
                                        case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                                            this.f33294i |= 8;
                                            this.f33298r = codedInputStream.readDouble();
                                            continue;
                                        case 40:
                                            this.f33294i |= 16;
                                            this.f33299s = codedInputStream.readInt32();
                                            continue;
                                        case 48:
                                            this.f33294i |= 32;
                                            this.f33300t = codedInputStream.readInt32();
                                            continue;
                                        case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                            this.f33294i |= 64;
                                            this.f33301u = codedInputStream.readInt32();
                                            continue;
                                        case 66:
                                            Builder builder = (this.f33294i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.f33302v.toBuilder() : null;
                                            Annotation annotation = (Annotation) codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite);
                                            this.f33302v = annotation;
                                            if (builder != null) {
                                                builder.mergeFrom(annotation);
                                                this.f33302v = builder.buildPartial();
                                            }
                                            this.f33294i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                            continue;
                                        case 74:
                                            if (!(z11 & true)) {
                                                this.f33303w = new ArrayList();
                                                z11 = true;
                                            }
                                            this.f33303w.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                                            continue;
                                        case 80:
                                            this.f33294i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                            this.f33305y = codedInputStream.readInt32();
                                            continue;
                                        case 88:
                                            this.f33294i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                            this.f33304x = codedInputStream.readInt32();
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
                                        this.f33303w = Collections.unmodifiableList(this.f33303w);
                                    }
                                    try {
                                        newInstance.flush();
                                    } catch (IOException unused) {
                                    } catch (Throwable th3) {
                                        this.f33293e = newOutput.toByteString();
                                        throw th3;
                                    }
                                    this.f33293e = newOutput.toByteString();
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
                                this.f33303w = Collections.unmodifiableList(this.f33303w);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused2) {
                            } catch (Throwable th4) {
                                this.f33293e = newOutput.toByteString();
                                throw th4;
                            }
                            this.f33293e = newOutput.toByteString();
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
                f33283s = argument;
                argument.l();
            }

            public static Argument getDefaultInstance() {
                return f33283s;
            }

            private void l() {
                this.f33286o = 0;
                this.f33287p = Value.getDefaultInstance();
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public int getNameId() {
                return this.f33286o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33289r;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33285i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33286o);
                } else {
                    i10 = 0;
                }
                if ((this.f33285i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f33287p);
                }
                int size = i10 + this.f33284e.size();
                this.f33289r = size;
                return size;
            }

            public Value getValue() {
                return this.f33287p;
            }

            public boolean hasNameId() {
                if ((this.f33285i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasValue() {
                if ((this.f33285i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33288q;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasNameId()) {
                    this.f33288q = (byte) 0;
                    return false;
                } else if (!hasValue()) {
                    this.f33288q = (byte) 0;
                    return false;
                } else if (!getValue().isInitialized()) {
                    this.f33288q = (byte) 0;
                    return false;
                } else {
                    this.f33288q = (byte) 1;
                    return true;
                }
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33285i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33286o);
                }
                if ((this.f33285i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f33287p);
                }
                codedOutputStream.writeRawBytes(this.f33284e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f33283s;
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
                this.f33288q = (byte) -1;
                this.f33289r = -1;
                this.f33284e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f33288q = (byte) -1;
                this.f33289r = -1;
                this.f33284e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33288q = (byte) -1;
                this.f33289r = -1;
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
                                    this.f33285i |= 1;
                                    this.f33286o = codedInputStream.readInt32();
                                } else if (readTag != 18) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    Value.Builder builder = (this.f33285i & 2) == 2 ? this.f33287p.toBuilder() : null;
                                    Value value = (Value) codedInputStream.readMessage(Value.PARSER, extensionRegistryLite);
                                    this.f33287p = value;
                                    if (builder != null) {
                                        builder.mergeFrom(value);
                                        this.f33287p = builder.buildPartial();
                                    }
                                    this.f33285i |= 2;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33284e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33284e = newOutput.toByteString();
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
                    this.f33284e = newOutput.toByteString();
                    throw th4;
                }
                this.f33284e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Annotation, Builder> implements AnnotationOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33322e;

            /* renamed from: i  reason: collision with root package name */
            private int f33323i;

            /* renamed from: o  reason: collision with root package name */
            private List f33324o = Collections.EMPTY_LIST;

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
                if ((this.f33322e & 2) != 2) {
                    this.f33324o = new ArrayList(this.f33324o);
                    this.f33322e |= 2;
                }
            }

            private void e() {
            }

            public Annotation buildPartial() {
                Annotation annotation = new Annotation(this);
                int i10 = 1;
                if ((this.f33322e & 1) != 1) {
                    i10 = 0;
                }
                annotation.f33279o = this.f33323i;
                if ((this.f33322e & 2) == 2) {
                    this.f33324o = Collections.unmodifiableList(this.f33324o);
                    this.f33322e &= -3;
                }
                annotation.f33280p = this.f33324o;
                annotation.f33278i = i10;
                return annotation;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f33324o.get(i10);
            }

            public int getArgumentCount() {
                return this.f33324o.size();
            }

            public boolean hasId() {
                if ((this.f33322e & 1) == 1) {
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
                this.f33322e |= 1;
                this.f33323i = i10;
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
                if (!annotation.f33280p.isEmpty()) {
                    if (this.f33324o.isEmpty()) {
                        this.f33324o = annotation.f33280p;
                        this.f33322e &= -3;
                    } else {
                        d();
                        this.f33324o.addAll(annotation.f33280p);
                    }
                }
                setUnknownFields(getUnknownFields().concat(annotation.f33277e));
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
            f33276s = annotation;
            annotation.m();
        }

        public static Annotation getDefaultInstance() {
            return f33276s;
        }

        private void m() {
            this.f33279o = 0;
            this.f33280p = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f33280p.get(i10);
        }

        public int getArgumentCount() {
            return this.f33280p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f33280p;
        }

        public int getId() {
            return this.f33279o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Annotation> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33282r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33278i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33279o);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33280p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33280p.get(i12));
            }
            int size = i10 + this.f33277e.size();
            this.f33282r = size;
            return size;
        }

        public boolean hasId() {
            if ((this.f33278i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33281q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f33281q = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.f33281q = (byte) 0;
                    return false;
                }
            }
            this.f33281q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33278i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33279o);
            }
            for (int i10 = 0; i10 < this.f33280p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33280p.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33277e);
        }

        public static Builder newBuilder(Annotation annotation) {
            return newBuilder().mergeFrom(annotation);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Annotation getDefaultInstanceForType() {
            return f33276s;
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
            this.f33281q = (byte) -1;
            this.f33282r = -1;
            this.f33277e = builder.getUnknownFields();
        }

        private Annotation(boolean z10) {
            this.f33281q = (byte) -1;
            this.f33282r = -1;
            this.f33277e = ByteString.EMPTY;
        }

        private Annotation(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33281q = (byte) -1;
            this.f33282r = -1;
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
                                this.f33278i |= 1;
                                this.f33279o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33280p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33280p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33280p = Collections.unmodifiableList(this.f33280p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33277e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33277e = newOutput.toByteString();
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
                this.f33280p = Collections.unmodifiableList(this.f33280p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33277e = newOutput.toByteString();
                throw th4;
            }
            this.f33277e = newOutput.toByteString();
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
        private final ByteString f33325i;

        /* renamed from: o  reason: collision with root package name */
        private int f33326o;

        /* renamed from: p  reason: collision with root package name */
        private int f33327p;

        /* renamed from: q  reason: collision with root package name */
        private int f33328q;

        /* renamed from: r  reason: collision with root package name */
        private int f33329r;

        /* renamed from: s  reason: collision with root package name */
        private List f33330s;

        /* renamed from: t  reason: collision with root package name */
        private List f33331t;

        /* renamed from: u  reason: collision with root package name */
        private List f33332u;

        /* renamed from: v  reason: collision with root package name */
        private int f33333v;

        /* renamed from: w  reason: collision with root package name */
        private List f33334w;

        /* renamed from: x  reason: collision with root package name */
        private int f33335x;

        /* renamed from: y  reason: collision with root package name */
        private List f33336y;

        /* renamed from: z  reason: collision with root package name */
        private List f33337z;

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
            private int f33338o;

            /* renamed from: p  reason: collision with root package name */
            private int f33339p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33340q;

            /* renamed from: r  reason: collision with root package name */
            private int f33341r;

            /* renamed from: s  reason: collision with root package name */
            private List f33342s;

            /* renamed from: t  reason: collision with root package name */
            private List f33343t;

            /* renamed from: u  reason: collision with root package name */
            private List f33344u;

            /* renamed from: v  reason: collision with root package name */
            private List f33345v;

            /* renamed from: w  reason: collision with root package name */
            private List f33346w;

            /* renamed from: x  reason: collision with root package name */
            private List f33347x;

            /* renamed from: y  reason: collision with root package name */
            private List f33348y;

            /* renamed from: z  reason: collision with root package name */
            private List f33349z;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33342s = list;
                this.f33343t = list;
                this.f33344u = list;
                this.f33345v = list;
                this.f33346w = list;
                this.f33347x = list;
                this.f33348y = list;
                this.f33349z = list;
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
                if ((this.f33338o & 8) != 8) {
                    this.f33342s = new ArrayList(this.f33342s);
                    this.f33338o |= 8;
                }
            }

            private void B() {
                if ((this.f33338o & 4194304) != 4194304) {
                    this.L = new ArrayList(this.L);
                    this.f33338o |= 4194304;
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
                if ((this.f33338o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 16777216) {
                    this.N = new ArrayList(this.N);
                    this.f33338o |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
                }
            }

            private void k() {
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33348y = new ArrayList(this.f33348y);
                    this.f33338o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33347x = new ArrayList(this.f33347x);
                    this.f33338o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f33346w = new ArrayList(this.f33346w);
                    this.f33338o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void n() {
                if ((this.f33338o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33338o |= 8192;
                }
            }

            private void p() {
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33349z = new ArrayList(this.f33349z);
                    this.f33338o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void q() {
                if ((this.f33338o & 262144) != 262144) {
                    this.H = new ArrayList(this.H);
                    this.f33338o |= 262144;
                }
            }

            private void r() {
                if ((this.f33338o & 1048576) != 1048576) {
                    this.J = new ArrayList(this.J);
                    this.f33338o |= 1048576;
                }
            }

            private void s() {
                if ((this.f33338o & 524288) != 524288) {
                    this.I = new ArrayList(this.I);
                    this.f33338o |= 524288;
                }
            }

            private void t() {
                if ((this.f33338o & 64) != 64) {
                    this.f33345v = new ArrayList(this.f33345v);
                    this.f33338o |= 64;
                }
            }

            private void u() {
                if ((this.f33338o & RecyclerView.ItemAnimator.FLAG_MOVED) != 2048) {
                    this.A = new ArrayList(this.A);
                    this.f33338o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
            }

            private void v() {
                if ((this.f33338o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33338o |= 16384;
                }
            }

            private void w() {
                if ((this.f33338o & 32) != 32) {
                    this.f33344u = new ArrayList(this.f33344u);
                    this.f33338o |= 32;
                }
            }

            private void x() {
                if ((this.f33338o & 16) != 16) {
                    this.f33343t = new ArrayList(this.f33343t);
                    this.f33338o |= 16;
                }
            }

            private void z() {
                if ((this.f33338o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33338o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            public Class buildPartial() {
                Class r02 = new Class(this);
                int i10 = this.f33338o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                r02.f33327p = this.f33339p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                r02.f33328q = this.f33340q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                r02.f33329r = this.f33341r;
                if ((this.f33338o & 8) == 8) {
                    this.f33342s = Collections.unmodifiableList(this.f33342s);
                    this.f33338o &= -9;
                }
                r02.f33330s = this.f33342s;
                if ((this.f33338o & 16) == 16) {
                    this.f33343t = Collections.unmodifiableList(this.f33343t);
                    this.f33338o &= -17;
                }
                r02.f33331t = this.f33343t;
                if ((this.f33338o & 32) == 32) {
                    this.f33344u = Collections.unmodifiableList(this.f33344u);
                    this.f33338o &= -33;
                }
                r02.f33332u = this.f33344u;
                if ((this.f33338o & 64) == 64) {
                    this.f33345v = Collections.unmodifiableList(this.f33345v);
                    this.f33338o &= -65;
                }
                r02.f33334w = this.f33345v;
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f33346w = Collections.unmodifiableList(this.f33346w);
                    this.f33338o &= -129;
                }
                r02.f33336y = this.f33346w;
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33347x = Collections.unmodifiableList(this.f33347x);
                    this.f33338o &= -257;
                }
                r02.f33337z = this.f33347x;
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33348y = Collections.unmodifiableList(this.f33348y);
                    this.f33338o &= -513;
                }
                r02.B = this.f33348y;
                if ((this.f33338o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33349z = Collections.unmodifiableList(this.f33349z);
                    this.f33338o &= -1025;
                }
                r02.C = this.f33349z;
                if ((this.f33338o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    this.A = Collections.unmodifiableList(this.A);
                    this.f33338o &= -2049;
                }
                r02.D = this.A;
                if ((this.f33338o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33338o &= -4097;
                }
                r02.E = this.B;
                if ((this.f33338o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33338o &= -8193;
                }
                r02.F = this.C;
                if ((this.f33338o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33338o &= -16385;
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
                if ((this.f33338o & 262144) == 262144) {
                    this.H = Collections.unmodifiableList(this.H);
                    this.f33338o &= -262145;
                }
                r02.L = this.H;
                if ((this.f33338o & 524288) == 524288) {
                    this.I = Collections.unmodifiableList(this.I);
                    this.f33338o &= -524289;
                }
                r02.N = this.I;
                if ((this.f33338o & 1048576) == 1048576) {
                    this.J = Collections.unmodifiableList(this.J);
                    this.f33338o &= -1048577;
                }
                r02.O = this.J;
                if ((i10 & 2097152) == 2097152) {
                    i11 |= 64;
                }
                r02.Q = this.K;
                if ((this.f33338o & 4194304) == 4194304) {
                    this.L = Collections.unmodifiableList(this.L);
                    this.f33338o &= -4194305;
                }
                r02.R = this.L;
                if ((i10 & 8388608) == 8388608) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                r02.S = this.M;
                if ((this.f33338o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) == 16777216) {
                    this.N = Collections.unmodifiableList(this.N);
                    this.f33338o &= -16777217;
                }
                r02.T = this.N;
                r02.f33326o = i11;
                return r02;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.N.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.N.size();
            }

            public Constructor getConstructor(int i10) {
                return (Constructor) this.f33348y.get(i10);
            }

            public int getConstructorCount() {
                return this.f33348y.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33346w.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33346w.size();
            }

            public EnumEntry getEnumEntry(int i10) {
                return (EnumEntry) this.C.get(i10);
            }

            public int getEnumEntryCount() {
                return this.C.size();
            }

            public Function getFunction(int i10) {
                return (Function) this.f33349z.get(i10);
            }

            public int getFunctionCount() {
                return this.f33349z.size();
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
                return (Type) this.f33343t.get(i10);
            }

            public int getSupertypeCount() {
                return this.f33343t.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.B.get(i10);
            }

            public int getTypeAliasCount() {
                return this.B.size();
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33342s.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33342s.size();
            }

            public TypeTable getTypeTable() {
                return this.K;
            }

            public boolean hasFqName() {
                if ((this.f33338o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasInlineClassUnderlyingType() {
                if ((this.f33338o & 65536) == 65536) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33338o & 2097152) == 2097152) {
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
                if ((this.f33338o & 65536) == 65536 && this.F != Type.getDefaultInstance()) {
                    this.F = Type.newBuilder(this.F).mergeFrom(type).buildPartial();
                } else {
                    this.F = type;
                }
                this.f33338o |= 65536;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33338o & 2097152) == 2097152 && this.K != TypeTable.getDefaultInstance()) {
                    this.K = TypeTable.newBuilder(this.K).mergeFrom(typeTable).buildPartial();
                } else {
                    this.K = typeTable;
                }
                this.f33338o |= 2097152;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33338o & 8388608) == 8388608 && this.M != VersionRequirementTable.getDefaultInstance()) {
                    this.M = VersionRequirementTable.newBuilder(this.M).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.M = versionRequirementTable;
                }
                this.f33338o |= 8388608;
                return this;
            }

            public Builder setCompanionObjectName(int i10) {
                this.f33338o |= 4;
                this.f33341r = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33338o |= 1;
                this.f33339p = i10;
                return this;
            }

            public Builder setFqName(int i10) {
                this.f33338o |= 2;
                this.f33340q = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingPropertyName(int i10) {
                this.f33338o |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                this.E = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingTypeId(int i10) {
                this.f33338o |= 131072;
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
                if (!r32.f33330s.isEmpty()) {
                    if (this.f33342s.isEmpty()) {
                        this.f33342s = r32.f33330s;
                        this.f33338o &= -9;
                    } else {
                        A();
                        this.f33342s.addAll(r32.f33330s);
                    }
                }
                if (!r32.f33331t.isEmpty()) {
                    if (this.f33343t.isEmpty()) {
                        this.f33343t = r32.f33331t;
                        this.f33338o &= -17;
                    } else {
                        x();
                        this.f33343t.addAll(r32.f33331t);
                    }
                }
                if (!r32.f33332u.isEmpty()) {
                    if (this.f33344u.isEmpty()) {
                        this.f33344u = r32.f33332u;
                        this.f33338o &= -33;
                    } else {
                        w();
                        this.f33344u.addAll(r32.f33332u);
                    }
                }
                if (!r32.f33334w.isEmpty()) {
                    if (this.f33345v.isEmpty()) {
                        this.f33345v = r32.f33334w;
                        this.f33338o &= -65;
                    } else {
                        t();
                        this.f33345v.addAll(r32.f33334w);
                    }
                }
                if (!r32.f33336y.isEmpty()) {
                    if (this.f33346w.isEmpty()) {
                        this.f33346w = r32.f33336y;
                        this.f33338o &= -129;
                    } else {
                        m();
                        this.f33346w.addAll(r32.f33336y);
                    }
                }
                if (!r32.f33337z.isEmpty()) {
                    if (this.f33347x.isEmpty()) {
                        this.f33347x = r32.f33337z;
                        this.f33338o &= -257;
                    } else {
                        l();
                        this.f33347x.addAll(r32.f33337z);
                    }
                }
                if (!r32.B.isEmpty()) {
                    if (this.f33348y.isEmpty()) {
                        this.f33348y = r32.B;
                        this.f33338o &= -513;
                    } else {
                        k();
                        this.f33348y.addAll(r32.B);
                    }
                }
                if (!r32.C.isEmpty()) {
                    if (this.f33349z.isEmpty()) {
                        this.f33349z = r32.C;
                        this.f33338o &= -1025;
                    } else {
                        p();
                        this.f33349z.addAll(r32.C);
                    }
                }
                if (!r32.D.isEmpty()) {
                    if (this.A.isEmpty()) {
                        this.A = r32.D;
                        this.f33338o &= -2049;
                    } else {
                        u();
                        this.A.addAll(r32.D);
                    }
                }
                if (!r32.E.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = r32.E;
                        this.f33338o &= -4097;
                    } else {
                        z();
                        this.B.addAll(r32.E);
                    }
                }
                if (!r32.F.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = r32.F;
                        this.f33338o &= -8193;
                    } else {
                        n();
                        this.C.addAll(r32.F);
                    }
                }
                if (!r32.G.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = r32.G;
                        this.f33338o &= -16385;
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
                        this.f33338o &= -262145;
                    } else {
                        q();
                        this.H.addAll(r32.L);
                    }
                }
                if (!r32.N.isEmpty()) {
                    if (this.I.isEmpty()) {
                        this.I = r32.N;
                        this.f33338o &= -524289;
                    } else {
                        s();
                        this.I.addAll(r32.N);
                    }
                }
                if (!r32.O.isEmpty()) {
                    if (this.J.isEmpty()) {
                        this.J = r32.O;
                        this.f33338o &= -1048577;
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
                        this.f33338o &= -4194305;
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
                        this.f33338o &= -16777217;
                    } else {
                        j();
                        this.N.addAll(r32.T);
                    }
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33325i));
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
            private static Internal.EnumLiteMap f33350e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33352d;

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
                this.f33352d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33352d;
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
            this.f33327p = 6;
            this.f33328q = 0;
            this.f33329r = 0;
            List list = Collections.EMPTY_LIST;
            this.f33330s = list;
            this.f33331t = list;
            this.f33332u = list;
            this.f33334w = list;
            this.f33336y = list;
            this.f33337z = list;
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
            return this.f33329r;
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
            return (Type) this.f33336y.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33336y.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33337z;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33336y;
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
            return this.f33327p;
        }

        public int getFqName() {
            return this.f33328q;
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
            return this.f33334w;
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
            if ((this.f33326o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33327p);
            } else {
                i10 = 0;
            }
            int i12 = 0;
            for (int i13 = 0; i13 < this.f33332u.size(); i13++) {
                i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33332u.get(i13)).intValue());
            }
            int i14 = i10 + i12;
            if (!getSupertypeIdList().isEmpty()) {
                i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
            }
            this.f33333v = i12;
            if ((this.f33326o & 2) == 2) {
                i14 += CodedOutputStream.computeInt32Size(3, this.f33328q);
            }
            if ((this.f33326o & 4) == 4) {
                i14 += CodedOutputStream.computeInt32Size(4, this.f33329r);
            }
            for (int i15 = 0; i15 < this.f33330s.size(); i15++) {
                i14 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33330s.get(i15));
            }
            for (int i16 = 0; i16 < this.f33331t.size(); i16++) {
                i14 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33331t.get(i16));
            }
            int i17 = 0;
            for (int i18 = 0; i18 < this.f33334w.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33334w.get(i18)).intValue());
            }
            int i19 = i14 + i17;
            if (!getNestedClassNameList().isEmpty()) {
                i19 = i19 + 1 + CodedOutputStream.computeInt32SizeNoTag(i17);
            }
            this.f33335x = i17;
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
            if ((this.f33326o & 8) == 8) {
                i27 += CodedOutputStream.computeInt32Size(17, this.I);
            }
            if ((this.f33326o & 16) == 16) {
                i27 += CodedOutputStream.computeMessageSize(18, this.J);
            }
            if ((this.f33326o & 32) == 32) {
                i27 += CodedOutputStream.computeInt32Size(19, this.K);
            }
            for (int i28 = 0; i28 < this.f33336y.size(); i28++) {
                i27 += CodedOutputStream.computeMessageSize(20, (MessageLite) this.f33336y.get(i28));
            }
            int i29 = 0;
            for (int i30 = 0; i30 < this.f33337z.size(); i30++) {
                i29 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33337z.get(i30)).intValue());
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
            if ((this.f33326o & 64) == 64) {
                i38 += CodedOutputStream.computeMessageSize(30, this.Q);
            }
            int i39 = 0;
            for (int i40 = 0; i40 < this.R.size(); i40++) {
                i39 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.R.get(i40)).intValue());
            }
            int size = i38 + i39 + (getVersionRequirementList().size() * 2);
            if ((this.f33326o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                size += CodedOutputStream.computeMessageSize(32, this.S);
            }
            for (int i41 = 0; i41 < this.T.size(); i41++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.T.get(i41));
            }
            int j10 = size + j() + this.f33325i.size();
            this.V = j10;
            return j10;
        }

        public Type getSupertype(int i10) {
            return (Type) this.f33331t.get(i10);
        }

        public int getSupertypeCount() {
            return this.f33331t.size();
        }

        public List<Integer> getSupertypeIdList() {
            return this.f33332u;
        }

        public List<Type> getSupertypeList() {
            return this.f33331t;
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
            return (TypeParameter) this.f33330s.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33330s.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33330s;
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
            if ((this.f33326o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33326o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasFqName() {
            if ((this.f33326o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingPropertyName() {
            if ((this.f33326o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingType() {
            if ((this.f33326o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingTypeId() {
            if ((this.f33326o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33326o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33326o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33326o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33327p);
            }
            if (getSupertypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(18);
                codedOutputStream.writeRawVarint32(this.f33333v);
            }
            for (int i10 = 0; i10 < this.f33332u.size(); i10++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33332u.get(i10)).intValue());
            }
            if ((this.f33326o & 2) == 2) {
                codedOutputStream.writeInt32(3, this.f33328q);
            }
            if ((this.f33326o & 4) == 4) {
                codedOutputStream.writeInt32(4, this.f33329r);
            }
            for (int i11 = 0; i11 < this.f33330s.size(); i11++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33330s.get(i11));
            }
            for (int i12 = 0; i12 < this.f33331t.size(); i12++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33331t.get(i12));
            }
            if (getNestedClassNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(58);
                codedOutputStream.writeRawVarint32(this.f33335x);
            }
            for (int i13 = 0; i13 < this.f33334w.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33334w.get(i13)).intValue());
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
            if ((this.f33326o & 8) == 8) {
                codedOutputStream.writeInt32(17, this.I);
            }
            if ((this.f33326o & 16) == 16) {
                codedOutputStream.writeMessage(18, this.J);
            }
            if ((this.f33326o & 32) == 32) {
                codedOutputStream.writeInt32(19, this.K);
            }
            for (int i20 = 0; i20 < this.f33336y.size(); i20++) {
                codedOutputStream.writeMessage(20, (MessageLite) this.f33336y.get(i20));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(170);
                codedOutputStream.writeRawVarint32(this.A);
            }
            for (int i21 = 0; i21 < this.f33337z.size(); i21++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33337z.get(i21)).intValue());
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
            if ((this.f33326o & 64) == 64) {
                codedOutputStream.writeMessage(30, this.Q);
            }
            for (int i25 = 0; i25 < this.R.size(); i25++) {
                codedOutputStream.writeInt32(31, ((Integer) this.R.get(i25)).intValue());
            }
            if ((this.f33326o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(32, this.S);
            }
            for (int i26 = 0; i26 < this.T.size(); i26++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.T.get(i26));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33325i);
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
            this.f33333v = -1;
            this.f33335x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33325i = extendableBuilder.getUnknownFields();
        }

        private Class(boolean z10) {
            this.f33333v = -1;
            this.f33335x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33325i = ByteString.EMPTY;
        }

        /* JADX WARN: Type inference failed for: r4v2 */
        /* JADX WARN: Type inference failed for: r4v4 */
        /* JADX WARN: Type inference failed for: r4v8, types: [boolean] */
        private Class(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            boolean z11;
            this.f33333v = -1;
            this.f33335x = -1;
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
                                this.f33326o |= 1;
                                this.f33327p = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 16:
                                boolean z16 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z16) {
                                    this.f33332u = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33332u.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33332u = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33332u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                this.f33326o |= 2;
                                this.f33328q = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 32:
                                this.f33326o |= 4;
                                this.f33329r = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 42:
                                boolean z18 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z18) {
                                    this.f33330s = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33330s.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 50:
                                boolean z19 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z19) {
                                    this.f33331t = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33331t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                boolean z20 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z20) {
                                    this.f33334w = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33334w.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33334w = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33334w.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                this.f33326o |= 8;
                                this.I = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                                Type.Builder builder = (this.f33326o & 16) == 16 ? this.J.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.J = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.J = builder.buildPartial();
                                }
                                this.f33326o |= 16;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 152:
                                this.f33326o |= 32;
                                this.K = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 162:
                                boolean z29 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z29) {
                                    this.f33336y = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33336y.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 168:
                                boolean z30 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z30) {
                                    this.f33337z = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33337z.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33337z = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33337z.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                TypeTable.Builder builder2 = (this.f33326o & 64) == 64 ? this.Q.toBuilder() : null;
                                TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                this.Q = typeTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(typeTable);
                                    this.Q = builder2.buildPartial();
                                }
                                this.f33326o |= 64;
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
                                VersionRequirementTable.Builder builder3 = (this.f33326o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.S.toBuilder() : null;
                                VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                this.S = versionRequirementTable;
                                if (builder3 != null) {
                                    builder3.mergeFrom(versionRequirementTable);
                                    this.S = builder3.buildPartial();
                                }
                                this.f33326o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
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
                                            this.f33332u = Collections.unmodifiableList(this.f33332u);
                                        }
                                        if (z11 & true) {
                                            this.f33330s = Collections.unmodifiableList(this.f33330s);
                                        }
                                        if (z11 & true) {
                                            this.f33331t = Collections.unmodifiableList(this.f33331t);
                                        }
                                        if ((z11 & true) == c10) {
                                            this.f33334w = Collections.unmodifiableList(this.f33334w);
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
                                            this.f33336y = Collections.unmodifiableList(this.f33336y);
                                        }
                                        if (z11 & true) {
                                            this.f33337z = Collections.unmodifiableList(this.f33337z);
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
                                            this.f33325i = newOutput.toByteString();
                                            throw th3;
                                        }
                                        this.f33325i = newOutput.toByteString();
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
                        this.f33332u = Collections.unmodifiableList(this.f33332u);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33330s = Collections.unmodifiableList(this.f33330s);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33331t = Collections.unmodifiableList(this.f33331t);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33334w = Collections.unmodifiableList(this.f33334w);
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
                        this.f33336y = Collections.unmodifiableList(this.f33336y);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33337z = Collections.unmodifiableList(this.f33337z);
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
                        this.f33325i = newOutput.toByteString();
                        throw th5;
                    }
                    this.f33325i = newOutput.toByteString();
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
        private static final CompilerPluginData f33353s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33354e;

        /* renamed from: i  reason: collision with root package name */
        private int f33355i;

        /* renamed from: o  reason: collision with root package name */
        private int f33356o;

        /* renamed from: p  reason: collision with root package name */
        private ByteString f33357p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33358q;

        /* renamed from: r  reason: collision with root package name */
        private int f33359r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<CompilerPluginData, Builder> implements CompilerPluginDataOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33360e;

            /* renamed from: i  reason: collision with root package name */
            private int f33361i;

            /* renamed from: o  reason: collision with root package name */
            private ByteString f33362o = ByteString.EMPTY;

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
                int i10 = this.f33360e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                compilerPluginData.f33356o = this.f33361i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                compilerPluginData.f33357p = this.f33362o;
                compilerPluginData.f33355i = i11;
                return compilerPluginData;
            }

            public boolean hasData() {
                if ((this.f33360e & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasPluginId() {
                if ((this.f33360e & 1) == 1) {
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
                this.f33360e |= 2;
                this.f33362o = byteString;
                return this;
            }

            public Builder setPluginId(int i10) {
                this.f33360e |= 1;
                this.f33361i = i10;
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
                setUnknownFields(getUnknownFields().concat(compilerPluginData.f33354e));
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
            f33353s = compilerPluginData;
            compilerPluginData.l();
        }

        public static CompilerPluginData getDefaultInstance() {
            return f33353s;
        }

        private void l() {
            this.f33356o = 0;
            this.f33357p = ByteString.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public ByteString getData() {
            return this.f33357p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<CompilerPluginData> getParserForType() {
            return PARSER;
        }

        public int getPluginId() {
            return this.f33356o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33359r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33355i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33356o);
            } else {
                i10 = 0;
            }
            if ((this.f33355i & 2) == 2) {
                i10 += CodedOutputStream.computeBytesSize(2, this.f33357p);
            }
            int size = i10 + this.f33354e.size();
            this.f33359r = size;
            return size;
        }

        public boolean hasData() {
            if ((this.f33355i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasPluginId() {
            if ((this.f33355i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33358q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasPluginId()) {
                this.f33358q = (byte) 0;
                return false;
            } else if (!hasData()) {
                this.f33358q = (byte) 0;
                return false;
            } else {
                this.f33358q = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33355i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33356o);
            }
            if ((this.f33355i & 2) == 2) {
                codedOutputStream.writeBytes(2, this.f33357p);
            }
            codedOutputStream.writeRawBytes(this.f33354e);
        }

        public static Builder newBuilder(CompilerPluginData compilerPluginData) {
            return newBuilder().mergeFrom(compilerPluginData);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public CompilerPluginData getDefaultInstanceForType() {
            return f33353s;
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
            this.f33358q = (byte) -1;
            this.f33359r = -1;
            this.f33354e = builder.getUnknownFields();
        }

        private CompilerPluginData(boolean z10) {
            this.f33358q = (byte) -1;
            this.f33359r = -1;
            this.f33354e = ByteString.EMPTY;
        }

        private CompilerPluginData(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33358q = (byte) -1;
            this.f33359r = -1;
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
                                this.f33355i |= 1;
                                this.f33356o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33355i |= 2;
                                this.f33357p = codedInputStream.readBytes();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33354e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33354e = newOutput.toByteString();
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
                this.f33354e = newOutput.toByteString();
                throw th4;
            }
            this.f33354e = newOutput.toByteString();
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
        private static final Constructor f33363v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33364i;

        /* renamed from: o  reason: collision with root package name */
        private int f33365o;

        /* renamed from: p  reason: collision with root package name */
        private int f33366p;

        /* renamed from: q  reason: collision with root package name */
        private List f33367q;

        /* renamed from: r  reason: collision with root package name */
        private List f33368r;

        /* renamed from: s  reason: collision with root package name */
        private List f33369s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33370t;

        /* renamed from: u  reason: collision with root package name */
        private int f33371u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Constructor, Builder> implements ConstructorOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33372o;

            /* renamed from: p  reason: collision with root package name */
            private int f33373p = 6;

            /* renamed from: q  reason: collision with root package name */
            private List f33374q;

            /* renamed from: r  reason: collision with root package name */
            private List f33375r;

            /* renamed from: s  reason: collision with root package name */
            private List f33376s;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33374q = list;
                this.f33375r = list;
                this.f33376s = list;
                m();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33372o & 8) != 8) {
                    this.f33376s = new ArrayList(this.f33376s);
                    this.f33372o |= 8;
                }
            }

            private void k() {
                if ((this.f33372o & 2) != 2) {
                    this.f33374q = new ArrayList(this.f33374q);
                    this.f33372o |= 2;
                }
            }

            private void l() {
                if ((this.f33372o & 4) != 4) {
                    this.f33375r = new ArrayList(this.f33375r);
                    this.f33372o |= 4;
                }
            }

            private void m() {
            }

            public Constructor buildPartial() {
                Constructor constructor = new Constructor(this);
                int i10 = 1;
                if ((this.f33372o & 1) != 1) {
                    i10 = 0;
                }
                constructor.f33366p = this.f33373p;
                if ((this.f33372o & 2) == 2) {
                    this.f33374q = Collections.unmodifiableList(this.f33374q);
                    this.f33372o &= -3;
                }
                constructor.f33367q = this.f33374q;
                if ((this.f33372o & 4) == 4) {
                    this.f33375r = Collections.unmodifiableList(this.f33375r);
                    this.f33372o &= -5;
                }
                constructor.f33368r = this.f33375r;
                if ((this.f33372o & 8) == 8) {
                    this.f33376s = Collections.unmodifiableList(this.f33376s);
                    this.f33372o &= -9;
                }
                constructor.f33369s = this.f33376s;
                constructor.f33365o = i10;
                return constructor;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f33376s.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f33376s.size();
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33374q.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33374q.size();
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
                this.f33372o |= 1;
                this.f33373p = i10;
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
                if (!constructor.f33367q.isEmpty()) {
                    if (this.f33374q.isEmpty()) {
                        this.f33374q = constructor.f33367q;
                        this.f33372o &= -3;
                    } else {
                        k();
                        this.f33374q.addAll(constructor.f33367q);
                    }
                }
                if (!constructor.f33368r.isEmpty()) {
                    if (this.f33375r.isEmpty()) {
                        this.f33375r = constructor.f33368r;
                        this.f33372o &= -5;
                    } else {
                        l();
                        this.f33375r.addAll(constructor.f33368r);
                    }
                }
                if (!constructor.f33369s.isEmpty()) {
                    if (this.f33376s.isEmpty()) {
                        this.f33376s = constructor.f33369s;
                        this.f33372o &= -9;
                    } else {
                        j();
                        this.f33376s.addAll(constructor.f33369s);
                    }
                }
                f(constructor);
                setUnknownFields(getUnknownFields().concat(constructor.f33364i));
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
            f33363v = constructor;
            constructor.v();
        }

        public static Constructor getDefaultInstance() {
            return f33363v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void v() {
            this.f33366p = 6;
            List list = Collections.EMPTY_LIST;
            this.f33367q = list;
            this.f33368r = list;
            this.f33369s = list;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f33369s.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f33369s.size();
        }

        public int getFlags() {
            return this.f33366p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Constructor> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33371u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33365o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33366p);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33367q.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33367q.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33368r.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33368r.get(i14)).intValue());
            }
            int size = i10 + i13 + (getVersionRequirementList().size() * 2);
            for (int i15 = 0; i15 < this.f33369s.size(); i15++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f33369s.get(i15));
            }
            int j10 = size + j() + this.f33364i.size();
            this.f33371u = j10;
            return j10;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.f33367q.get(i10);
        }

        public int getValueParameterCount() {
            return this.f33367q.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.f33367q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f33368r;
        }

        public boolean hasFlags() {
            if ((this.f33365o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33370t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                if (!getValueParameter(i10).isInitialized()) {
                    this.f33370t = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                if (!getCompilerPluginData(i11).isInitialized()) {
                    this.f33370t = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.f33370t = (byte) 0;
                return false;
            }
            this.f33370t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33365o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33366p);
            }
            for (int i10 = 0; i10 < this.f33367q.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33367q.get(i10));
            }
            for (int i11 = 0; i11 < this.f33368r.size(); i11++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f33368r.get(i11)).intValue());
            }
            for (int i12 = 0; i12 < this.f33369s.size(); i12++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f33369s.get(i12));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33364i);
        }

        public static Builder newBuilder(Constructor constructor) {
            return newBuilder().mergeFrom(constructor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Constructor getDefaultInstanceForType() {
            return f33363v;
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
            this.f33370t = (byte) -1;
            this.f33371u = -1;
            this.f33364i = extendableBuilder.getUnknownFields();
        }

        private Constructor(boolean z10) {
            this.f33370t = (byte) -1;
            this.f33371u = -1;
            this.f33364i = ByteString.EMPTY;
        }

        private Constructor(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33370t = (byte) -1;
            this.f33371u = -1;
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
                                this.f33365o |= 1;
                                this.f33366p = codedInputStream.readInt32();
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33367q = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33367q.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                            } else if (readTag == 248) {
                                if (!(z11 & true)) {
                                    this.f33368r = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33368r.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag == 250) {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33368r = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33368r.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            } else if (readTag != 258) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33369s = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33369s.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33367q = Collections.unmodifiableList(this.f33367q);
                        }
                        if (z11 & true) {
                            this.f33368r = Collections.unmodifiableList(this.f33368r);
                        }
                        if (z11 & true) {
                            this.f33369s = Collections.unmodifiableList(this.f33369s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33364i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33364i = newOutput.toByteString();
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
                this.f33367q = Collections.unmodifiableList(this.f33367q);
            }
            if (z11 & true) {
                this.f33368r = Collections.unmodifiableList(this.f33368r);
            }
            if (z11 & true) {
                this.f33369s = Collections.unmodifiableList(this.f33369s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33364i = newOutput.toByteString();
                throw th4;
            }
            this.f33364i = newOutput.toByteString();
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
        private static final Contract f33377q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33378e;

        /* renamed from: i  reason: collision with root package name */
        private List f33379i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33380o;

        /* renamed from: p  reason: collision with root package name */
        private int f33381p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Contract, Builder> implements ContractOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33382e;

            /* renamed from: i  reason: collision with root package name */
            private List f33383i = Collections.EMPTY_LIST;

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
                if ((this.f33382e & 1) != 1) {
                    this.f33383i = new ArrayList(this.f33383i);
                    this.f33382e |= 1;
                }
            }

            private void e() {
            }

            public Contract buildPartial() {
                Contract contract = new Contract(this);
                if ((this.f33382e & 1) == 1) {
                    this.f33383i = Collections.unmodifiableList(this.f33383i);
                    this.f33382e &= -2;
                }
                contract.f33379i = this.f33383i;
                return contract;
            }

            public Effect getEffect(int i10) {
                return (Effect) this.f33383i.get(i10);
            }

            public int getEffectCount() {
                return this.f33383i.size();
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
                if (!contract.f33379i.isEmpty()) {
                    if (this.f33383i.isEmpty()) {
                        this.f33383i = contract.f33379i;
                        this.f33382e &= -2;
                    } else {
                        d();
                        this.f33383i.addAll(contract.f33379i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(contract.f33378e));
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
            f33377q = contract;
            contract.k();
        }

        public static Contract getDefaultInstance() {
            return f33377q;
        }

        private void k() {
            this.f33379i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Effect getEffect(int i10) {
            return (Effect) this.f33379i.get(i10);
        }

        public int getEffectCount() {
            return this.f33379i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Contract> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33381p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33379i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33379i.get(i12));
            }
            int size = i11 + this.f33378e.size();
            this.f33381p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33380o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectCount(); i10++) {
                if (!getEffect(i10).isInitialized()) {
                    this.f33380o = (byte) 0;
                    return false;
                }
            }
            this.f33380o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33379i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33379i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33378e);
        }

        public static Builder newBuilder(Contract contract) {
            return newBuilder().mergeFrom(contract);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Contract getDefaultInstanceForType() {
            return f33377q;
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
            this.f33380o = (byte) -1;
            this.f33381p = -1;
            this.f33378e = builder.getUnknownFields();
        }

        private Contract(boolean z10) {
            this.f33380o = (byte) -1;
            this.f33381p = -1;
            this.f33378e = ByteString.EMPTY;
        }

        private Contract(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33380o = (byte) -1;
            this.f33381p = -1;
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
                                        this.f33379i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33379i.add(codedInputStream.readMessage(Effect.PARSER, extensionRegistryLite));
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
                        this.f33379i = Collections.unmodifiableList(this.f33379i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33378e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33378e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33379i = Collections.unmodifiableList(this.f33379i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33378e = newOutput.toByteString();
                throw th4;
            }
            this.f33378e = newOutput.toByteString();
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
        private static final Effect f33384u;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33385e;

        /* renamed from: i  reason: collision with root package name */
        private int f33386i;

        /* renamed from: o  reason: collision with root package name */
        private EffectType f33387o;

        /* renamed from: p  reason: collision with root package name */
        private List f33388p;

        /* renamed from: q  reason: collision with root package name */
        private Expression f33389q;

        /* renamed from: r  reason: collision with root package name */
        private InvocationKind f33390r;

        /* renamed from: s  reason: collision with root package name */
        private byte f33391s;

        /* renamed from: t  reason: collision with root package name */
        private int f33392t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Effect, Builder> implements EffectOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33393e;

            /* renamed from: i  reason: collision with root package name */
            private EffectType f33394i = EffectType.RETURNS_CONSTANT;

            /* renamed from: o  reason: collision with root package name */
            private List f33395o = Collections.EMPTY_LIST;

            /* renamed from: p  reason: collision with root package name */
            private Expression f33396p = Expression.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private InvocationKind f33397q = InvocationKind.AT_MOST_ONCE;

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
                if ((this.f33393e & 2) != 2) {
                    this.f33395o = new ArrayList(this.f33395o);
                    this.f33393e |= 2;
                }
            }

            private void e() {
            }

            public Effect buildPartial() {
                Effect effect = new Effect(this);
                int i10 = this.f33393e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                effect.f33387o = this.f33394i;
                if ((this.f33393e & 2) == 2) {
                    this.f33395o = Collections.unmodifiableList(this.f33395o);
                    this.f33393e &= -3;
                }
                effect.f33388p = this.f33395o;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                effect.f33389q = this.f33396p;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                effect.f33390r = this.f33397q;
                effect.f33386i = i11;
                return effect;
            }

            public Expression getConclusionOfConditionalEffect() {
                return this.f33396p;
            }

            public Expression getEffectConstructorArgument(int i10) {
                return (Expression) this.f33395o.get(i10);
            }

            public int getEffectConstructorArgumentCount() {
                return this.f33395o.size();
            }

            public boolean hasConclusionOfConditionalEffect() {
                if ((this.f33393e & 4) == 4) {
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
                if ((this.f33393e & 4) == 4 && this.f33396p != Expression.getDefaultInstance()) {
                    this.f33396p = Expression.newBuilder(this.f33396p).mergeFrom(expression).buildPartial();
                } else {
                    this.f33396p = expression;
                }
                this.f33393e |= 4;
                return this;
            }

            public Builder setEffectType(EffectType effectType) {
                effectType.getClass();
                this.f33393e |= 1;
                this.f33394i = effectType;
                return this;
            }

            public Builder setKind(InvocationKind invocationKind) {
                invocationKind.getClass();
                this.f33393e |= 8;
                this.f33397q = invocationKind;
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
                if (!effect.f33388p.isEmpty()) {
                    if (this.f33395o.isEmpty()) {
                        this.f33395o = effect.f33388p;
                        this.f33393e &= -3;
                    } else {
                        d();
                        this.f33395o.addAll(effect.f33388p);
                    }
                }
                if (effect.hasConclusionOfConditionalEffect()) {
                    mergeConclusionOfConditionalEffect(effect.getConclusionOfConditionalEffect());
                }
                if (effect.hasKind()) {
                    setKind(effect.getKind());
                }
                setUnknownFields(getUnknownFields().concat(effect.f33385e));
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
            private static Internal.EnumLiteMap f33398e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33400d;

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
                this.f33400d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33400d;
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
            private static Internal.EnumLiteMap f33401e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33403d;

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
                this.f33403d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33403d;
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
            f33384u = effect;
            effect.o();
        }

        public static Effect getDefaultInstance() {
            return f33384u;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f33387o = EffectType.RETURNS_CONSTANT;
            this.f33388p = Collections.EMPTY_LIST;
            this.f33389q = Expression.getDefaultInstance();
            this.f33390r = InvocationKind.AT_MOST_ONCE;
        }

        public Expression getConclusionOfConditionalEffect() {
            return this.f33389q;
        }

        public Expression getEffectConstructorArgument(int i10) {
            return (Expression) this.f33388p.get(i10);
        }

        public int getEffectConstructorArgumentCount() {
            return this.f33388p.size();
        }

        public EffectType getEffectType() {
            return this.f33387o;
        }

        public InvocationKind getKind() {
            return this.f33390r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Effect> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33392t;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33386i & 1) == 1) {
                i10 = CodedOutputStream.computeEnumSize(1, this.f33387o.getNumber());
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33388p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33388p.get(i12));
            }
            if ((this.f33386i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33389q);
            }
            if ((this.f33386i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f33390r.getNumber());
            }
            int size = i10 + this.f33385e.size();
            this.f33392t = size;
            return size;
        }

        public boolean hasConclusionOfConditionalEffect() {
            if ((this.f33386i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasEffectType() {
            if ((this.f33386i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasKind() {
            if ((this.f33386i & 4) == 4) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33391s;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                if (!getEffectConstructorArgument(i10).isInitialized()) {
                    this.f33391s = (byte) 0;
                    return false;
                }
            }
            if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                this.f33391s = (byte) 0;
                return false;
            }
            this.f33391s = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33386i & 1) == 1) {
                codedOutputStream.writeEnum(1, this.f33387o.getNumber());
            }
            for (int i10 = 0; i10 < this.f33388p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33388p.get(i10));
            }
            if ((this.f33386i & 2) == 2) {
                codedOutputStream.writeMessage(3, this.f33389q);
            }
            if ((this.f33386i & 4) == 4) {
                codedOutputStream.writeEnum(4, this.f33390r.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f33385e);
        }

        public static Builder newBuilder(Effect effect) {
            return newBuilder().mergeFrom(effect);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Effect getDefaultInstanceForType() {
            return f33384u;
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
            this.f33391s = (byte) -1;
            this.f33392t = -1;
            this.f33385e = builder.getUnknownFields();
        }

        private Effect(boolean z10) {
            this.f33391s = (byte) -1;
            this.f33392t = -1;
            this.f33385e = ByteString.EMPTY;
        }

        private Effect(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33391s = (byte) -1;
            this.f33392t = -1;
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
                                    this.f33386i |= 1;
                                    this.f33387o = valueOf;
                                }
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33388p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33388p.add(codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite));
                            } else if (readTag == 26) {
                                Expression.Builder builder = (this.f33386i & 2) == 2 ? this.f33389q.toBuilder() : null;
                                Expression expression = (Expression) codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite);
                                this.f33389q = expression;
                                if (builder != null) {
                                    builder.mergeFrom(expression);
                                    this.f33389q = builder.buildPartial();
                                }
                                this.f33386i |= 2;
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
                                    this.f33386i |= 4;
                                    this.f33390r = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33388p = Collections.unmodifiableList(this.f33388p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33385e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33385e = newOutput.toByteString();
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
                this.f33388p = Collections.unmodifiableList(this.f33388p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33385e = newOutput.toByteString();
                throw th4;
            }
            this.f33385e = newOutput.toByteString();
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
        private static final EnumEntry f33404s;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33405i;

        /* renamed from: o  reason: collision with root package name */
        private int f33406o;

        /* renamed from: p  reason: collision with root package name */
        private int f33407p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33408q;

        /* renamed from: r  reason: collision with root package name */
        private int f33409r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<EnumEntry, Builder> implements EnumEntryOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33410o;

            /* renamed from: p  reason: collision with root package name */
            private int f33411p;

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
                if ((this.f33410o & 1) != 1) {
                    i10 = 0;
                }
                enumEntry.f33407p = this.f33411p;
                enumEntry.f33406o = i10;
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
                this.f33410o |= 1;
                this.f33411p = i10;
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
                setUnknownFields(getUnknownFields().concat(enumEntry.f33405i));
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
            f33404s = enumEntry;
            enumEntry.p();
        }

        public static EnumEntry getDefaultInstance() {
            return f33404s;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void p() {
            this.f33407p = 0;
        }

        public int getName() {
            return this.f33407p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<EnumEntry> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33409r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33406o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33407p);
            } else {
                i10 = 0;
            }
            int j10 = i10 + j() + this.f33405i.size();
            this.f33409r = j10;
            return j10;
        }

        public boolean hasName() {
            if ((this.f33406o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33408q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!i()) {
                this.f33408q = (byte) 0;
                return false;
            }
            this.f33408q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33406o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33407p);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33405i);
        }

        public static Builder newBuilder(EnumEntry enumEntry) {
            return newBuilder().mergeFrom(enumEntry);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public EnumEntry getDefaultInstanceForType() {
            return f33404s;
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
            this.f33408q = (byte) -1;
            this.f33409r = -1;
            this.f33405i = extendableBuilder.getUnknownFields();
        }

        private EnumEntry(boolean z10) {
            this.f33408q = (byte) -1;
            this.f33409r = -1;
            this.f33405i = ByteString.EMPTY;
        }

        private EnumEntry(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33408q = (byte) -1;
            this.f33409r = -1;
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
                                    this.f33406o |= 1;
                                    this.f33407p = codedInputStream.readInt32();
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
                        this.f33405i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33405i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33405i = newOutput.toByteString();
                throw th4;
            }
            this.f33405i = newOutput.toByteString();
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
        private static final Expression f33412x;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33413e;

        /* renamed from: i  reason: collision with root package name */
        private int f33414i;

        /* renamed from: o  reason: collision with root package name */
        private int f33415o;

        /* renamed from: p  reason: collision with root package name */
        private int f33416p;

        /* renamed from: q  reason: collision with root package name */
        private ConstantValue f33417q;

        /* renamed from: r  reason: collision with root package name */
        private Type f33418r;

        /* renamed from: s  reason: collision with root package name */
        private int f33419s;

        /* renamed from: t  reason: collision with root package name */
        private List f33420t;

        /* renamed from: u  reason: collision with root package name */
        private List f33421u;

        /* renamed from: v  reason: collision with root package name */
        private byte f33422v;

        /* renamed from: w  reason: collision with root package name */
        private int f33423w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Expression, Builder> implements ExpressionOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33424e;

            /* renamed from: i  reason: collision with root package name */
            private int f33425i;

            /* renamed from: o  reason: collision with root package name */
            private int f33426o;

            /* renamed from: p  reason: collision with root package name */
            private ConstantValue f33427p = ConstantValue.TRUE;

            /* renamed from: q  reason: collision with root package name */
            private Type f33428q = Type.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private int f33429r;

            /* renamed from: s  reason: collision with root package name */
            private List f33430s;

            /* renamed from: t  reason: collision with root package name */
            private List f33431t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33430s = list;
                this.f33431t = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33424e & 32) != 32) {
                    this.f33430s = new ArrayList(this.f33430s);
                    this.f33424e |= 32;
                }
            }

            private void e() {
                if ((this.f33424e & 64) != 64) {
                    this.f33431t = new ArrayList(this.f33431t);
                    this.f33424e |= 64;
                }
            }

            private void f() {
            }

            public Expression buildPartial() {
                Expression expression = new Expression(this);
                int i10 = this.f33424e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                expression.f33415o = this.f33425i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                expression.f33416p = this.f33426o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                expression.f33417q = this.f33427p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                expression.f33418r = this.f33428q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                expression.f33419s = this.f33429r;
                if ((this.f33424e & 32) == 32) {
                    this.f33430s = Collections.unmodifiableList(this.f33430s);
                    this.f33424e &= -33;
                }
                expression.f33420t = this.f33430s;
                if ((this.f33424e & 64) == 64) {
                    this.f33431t = Collections.unmodifiableList(this.f33431t);
                    this.f33424e &= -65;
                }
                expression.f33421u = this.f33431t;
                expression.f33414i = i11;
                return expression;
            }

            public Expression getAndArgument(int i10) {
                return (Expression) this.f33430s.get(i10);
            }

            public int getAndArgumentCount() {
                return this.f33430s.size();
            }

            public Type getIsInstanceType() {
                return this.f33428q;
            }

            public Expression getOrArgument(int i10) {
                return (Expression) this.f33431t.get(i10);
            }

            public int getOrArgumentCount() {
                return this.f33431t.size();
            }

            public boolean hasIsInstanceType() {
                if ((this.f33424e & 8) == 8) {
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
                if ((this.f33424e & 8) == 8 && this.f33428q != Type.getDefaultInstance()) {
                    this.f33428q = Type.newBuilder(this.f33428q).mergeFrom(type).buildPartial();
                } else {
                    this.f33428q = type;
                }
                this.f33424e |= 8;
                return this;
            }

            public Builder setConstantValue(ConstantValue constantValue) {
                constantValue.getClass();
                this.f33424e |= 4;
                this.f33427p = constantValue;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33424e |= 1;
                this.f33425i = i10;
                return this;
            }

            public Builder setIsInstanceTypeId(int i10) {
                this.f33424e |= 16;
                this.f33429r = i10;
                return this;
            }

            public Builder setValueParameterReference(int i10) {
                this.f33424e |= 2;
                this.f33426o = i10;
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
                if (!expression.f33420t.isEmpty()) {
                    if (this.f33430s.isEmpty()) {
                        this.f33430s = expression.f33420t;
                        this.f33424e &= -33;
                    } else {
                        d();
                        this.f33430s.addAll(expression.f33420t);
                    }
                }
                if (!expression.f33421u.isEmpty()) {
                    if (this.f33431t.isEmpty()) {
                        this.f33431t = expression.f33421u;
                        this.f33424e &= -65;
                    } else {
                        e();
                        this.f33431t.addAll(expression.f33421u);
                    }
                }
                setUnknownFields(getUnknownFields().concat(expression.f33413e));
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
            private static Internal.EnumLiteMap f33432e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33434d;

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
                this.f33434d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33434d;
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
            f33412x = expression;
            expression.s();
        }

        public static Expression getDefaultInstance() {
            return f33412x;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void s() {
            this.f33415o = 0;
            this.f33416p = 0;
            this.f33417q = ConstantValue.TRUE;
            this.f33418r = Type.getDefaultInstance();
            this.f33419s = 0;
            List list = Collections.EMPTY_LIST;
            this.f33420t = list;
            this.f33421u = list;
        }

        public Expression getAndArgument(int i10) {
            return (Expression) this.f33420t.get(i10);
        }

        public int getAndArgumentCount() {
            return this.f33420t.size();
        }

        public ConstantValue getConstantValue() {
            return this.f33417q;
        }

        public int getFlags() {
            return this.f33415o;
        }

        public Type getIsInstanceType() {
            return this.f33418r;
        }

        public int getIsInstanceTypeId() {
            return this.f33419s;
        }

        public Expression getOrArgument(int i10) {
            return (Expression) this.f33421u.get(i10);
        }

        public int getOrArgumentCount() {
            return this.f33421u.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Expression> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33423w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33414i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33415o);
            } else {
                i10 = 0;
            }
            if ((this.f33414i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33416p);
            }
            if ((this.f33414i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f33417q.getNumber());
            }
            if ((this.f33414i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33418r);
            }
            if ((this.f33414i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33419s);
            }
            for (int i12 = 0; i12 < this.f33420t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33420t.get(i12));
            }
            for (int i13 = 0; i13 < this.f33421u.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(7, (MessageLite) this.f33421u.get(i13));
            }
            int size = i10 + this.f33413e.size();
            this.f33423w = size;
            return size;
        }

        public int getValueParameterReference() {
            return this.f33416p;
        }

        public boolean hasConstantValue() {
            if ((this.f33414i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33414i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceType() {
            if ((this.f33414i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceTypeId() {
            if ((this.f33414i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasValueParameterReference() {
            if ((this.f33414i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33422v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                this.f33422v = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                if (!getAndArgument(i10).isInitialized()) {
                    this.f33422v = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                if (!getOrArgument(i11).isInitialized()) {
                    this.f33422v = (byte) 0;
                    return false;
                }
            }
            this.f33422v = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33414i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33415o);
            }
            if ((this.f33414i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33416p);
            }
            if ((this.f33414i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f33417q.getNumber());
            }
            if ((this.f33414i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f33418r);
            }
            if ((this.f33414i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f33419s);
            }
            for (int i10 = 0; i10 < this.f33420t.size(); i10++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33420t.get(i10));
            }
            for (int i11 = 0; i11 < this.f33421u.size(); i11++) {
                codedOutputStream.writeMessage(7, (MessageLite) this.f33421u.get(i11));
            }
            codedOutputStream.writeRawBytes(this.f33413e);
        }

        public static Builder newBuilder(Expression expression) {
            return newBuilder().mergeFrom(expression);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Expression getDefaultInstanceForType() {
            return f33412x;
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
            this.f33422v = (byte) -1;
            this.f33423w = -1;
            this.f33413e = builder.getUnknownFields();
        }

        private Expression(boolean z10) {
            this.f33422v = (byte) -1;
            this.f33423w = -1;
            this.f33413e = ByteString.EMPTY;
        }

        private Expression(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33422v = (byte) -1;
            this.f33423w = -1;
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
                                this.f33414i |= 1;
                                this.f33415o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33414i |= 2;
                                this.f33416p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                ConstantValue valueOf = ConstantValue.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33414i |= 4;
                                    this.f33417q = valueOf;
                                }
                            } else if (readTag == 34) {
                                Type.Builder builder = (this.f33414i & 8) == 8 ? this.f33418r.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.f33418r = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.f33418r = builder.buildPartial();
                                }
                                this.f33414i |= 8;
                            } else if (readTag == 40) {
                                this.f33414i |= 16;
                                this.f33419s = codedInputStream.readInt32();
                            } else if (readTag == 50) {
                                if (!(z11 & true)) {
                                    this.f33420t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33420t.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            } else if (readTag != 58) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33421u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33421u.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33420t = Collections.unmodifiableList(this.f33420t);
                        }
                        if (z11 & true) {
                            this.f33421u = Collections.unmodifiableList(this.f33421u);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33413e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33413e = newOutput.toByteString();
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
                this.f33420t = Collections.unmodifiableList(this.f33420t);
            }
            if (z11 & true) {
                this.f33421u = Collections.unmodifiableList(this.f33421u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33413e = newOutput.toByteString();
                throw th4;
            }
            this.f33413e = newOutput.toByteString();
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
        private final ByteString f33435i;

        /* renamed from: o  reason: collision with root package name */
        private int f33436o;

        /* renamed from: p  reason: collision with root package name */
        private int f33437p;

        /* renamed from: q  reason: collision with root package name */
        private int f33438q;

        /* renamed from: r  reason: collision with root package name */
        private int f33439r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33440s;

        /* renamed from: t  reason: collision with root package name */
        private int f33441t;

        /* renamed from: u  reason: collision with root package name */
        private List f33442u;

        /* renamed from: v  reason: collision with root package name */
        private Type f33443v;

        /* renamed from: w  reason: collision with root package name */
        private int f33444w;

        /* renamed from: x  reason: collision with root package name */
        private List f33445x;

        /* renamed from: y  reason: collision with root package name */
        private List f33446y;

        /* renamed from: z  reason: collision with root package name */
        private int f33447z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Function, Builder> implements FunctionOrBuilder {
            private TypeTable A;
            private List B;
            private Contract C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f33448o;

            /* renamed from: r  reason: collision with root package name */
            private int f33451r;

            /* renamed from: t  reason: collision with root package name */
            private int f33453t;

            /* renamed from: u  reason: collision with root package name */
            private List f33454u;

            /* renamed from: v  reason: collision with root package name */
            private Type f33455v;

            /* renamed from: w  reason: collision with root package name */
            private int f33456w;

            /* renamed from: x  reason: collision with root package name */
            private List f33457x;

            /* renamed from: y  reason: collision with root package name */
            private List f33458y;

            /* renamed from: z  reason: collision with root package name */
            private List f33459z;

            /* renamed from: p  reason: collision with root package name */
            private int f33449p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33450q = 6;

            /* renamed from: s  reason: collision with root package name */
            private Type f33452s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33454u = list;
                this.f33455v = Type.getDefaultInstance();
                this.f33457x = list;
                this.f33458y = list;
                this.f33459z = list;
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
                if ((this.f33448o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33448o |= 16384;
                }
            }

            private void k() {
                if ((this.f33448o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33458y = new ArrayList(this.f33458y);
                    this.f33448o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33448o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33457x = new ArrayList(this.f33457x);
                    this.f33448o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33448o & 32) != 32) {
                    this.f33454u = new ArrayList(this.f33454u);
                    this.f33448o |= 32;
                }
            }

            private void n() {
                if ((this.f33448o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33459z = new ArrayList(this.f33459z);
                    this.f33448o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void p() {
                if ((this.f33448o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33448o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            private void q() {
            }

            public Function buildPartial() {
                Function function = new Function(this);
                int i10 = this.f33448o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                function.f33437p = this.f33449p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                function.f33438q = this.f33450q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                function.f33439r = this.f33451r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                function.f33440s = this.f33452s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                function.f33441t = this.f33453t;
                if ((this.f33448o & 32) == 32) {
                    this.f33454u = Collections.unmodifiableList(this.f33454u);
                    this.f33448o &= -33;
                }
                function.f33442u = this.f33454u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                function.f33443v = this.f33455v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                function.f33444w = this.f33456w;
                if ((this.f33448o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33457x = Collections.unmodifiableList(this.f33457x);
                    this.f33448o &= -257;
                }
                function.f33445x = this.f33457x;
                if ((this.f33448o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33458y = Collections.unmodifiableList(this.f33458y);
                    this.f33448o &= -513;
                }
                function.f33446y = this.f33458y;
                if ((this.f33448o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33459z = Collections.unmodifiableList(this.f33459z);
                    this.f33448o &= -1025;
                }
                function.A = this.f33459z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                function.B = this.A;
                if ((this.f33448o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33448o &= -4097;
                }
                function.C = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                function.D = this.C;
                if ((this.f33448o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33448o &= -16385;
                }
                function.E = this.D;
                function.f33436o = i11;
                return function;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33457x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33457x.size();
            }

            public Contract getContract() {
                return this.C;
            }

            public Type getReceiverType() {
                return this.f33455v;
            }

            public Type getReturnType() {
                return this.f33452s;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33454u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33454u.size();
            }

            public TypeTable getTypeTable() {
                return this.A;
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33459z.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33459z.size();
            }

            public boolean hasContract() {
                if ((this.f33448o & 8192) == 8192) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33448o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f33448o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f33448o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33448o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
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
                if ((this.f33448o & 8192) == 8192 && this.C != Contract.getDefaultInstance()) {
                    this.C = Contract.newBuilder(this.C).mergeFrom(contract).buildPartial();
                } else {
                    this.C = contract;
                }
                this.f33448o |= 8192;
                return this;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f33448o & 64) == 64 && this.f33455v != Type.getDefaultInstance()) {
                    this.f33455v = Type.newBuilder(this.f33455v).mergeFrom(type).buildPartial();
                } else {
                    this.f33455v = type;
                }
                this.f33448o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f33448o & 8) == 8 && this.f33452s != Type.getDefaultInstance()) {
                    this.f33452s = Type.newBuilder(this.f33452s).mergeFrom(type).buildPartial();
                } else {
                    this.f33452s = type;
                }
                this.f33448o |= 8;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33448o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != TypeTable.getDefaultInstance()) {
                    this.A = TypeTable.newBuilder(this.A).mergeFrom(typeTable).buildPartial();
                } else {
                    this.A = typeTable;
                }
                this.f33448o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33448o |= 1;
                this.f33449p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33448o |= 4;
                this.f33451r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f33448o |= 2;
                this.f33450q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f33448o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33456w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f33448o |= 16;
                this.f33453t = i10;
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
                if (!function.f33442u.isEmpty()) {
                    if (this.f33454u.isEmpty()) {
                        this.f33454u = function.f33442u;
                        this.f33448o &= -33;
                    } else {
                        m();
                        this.f33454u.addAll(function.f33442u);
                    }
                }
                if (function.hasReceiverType()) {
                    mergeReceiverType(function.getReceiverType());
                }
                if (function.hasReceiverTypeId()) {
                    setReceiverTypeId(function.getReceiverTypeId());
                }
                if (!function.f33445x.isEmpty()) {
                    if (this.f33457x.isEmpty()) {
                        this.f33457x = function.f33445x;
                        this.f33448o &= -257;
                    } else {
                        l();
                        this.f33457x.addAll(function.f33445x);
                    }
                }
                if (!function.f33446y.isEmpty()) {
                    if (this.f33458y.isEmpty()) {
                        this.f33458y = function.f33446y;
                        this.f33448o &= -513;
                    } else {
                        k();
                        this.f33458y.addAll(function.f33446y);
                    }
                }
                if (!function.A.isEmpty()) {
                    if (this.f33459z.isEmpty()) {
                        this.f33459z = function.A;
                        this.f33448o &= -1025;
                    } else {
                        n();
                        this.f33459z.addAll(function.A);
                    }
                }
                if (function.hasTypeTable()) {
                    mergeTypeTable(function.getTypeTable());
                }
                if (!function.C.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = function.C;
                        this.f33448o &= -4097;
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
                        this.f33448o &= -16385;
                    } else {
                        j();
                        this.D.addAll(function.E);
                    }
                }
                f(function);
                setUnknownFields(getUnknownFields().concat(function.f33435i));
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
            this.f33437p = 6;
            this.f33438q = 6;
            this.f33439r = 0;
            this.f33440s = Type.getDefaultInstance();
            this.f33441t = 0;
            List list = Collections.EMPTY_LIST;
            this.f33442u = list;
            this.f33443v = Type.getDefaultInstance();
            this.f33444w = 0;
            this.f33445x = list;
            this.f33446y = list;
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
            return (Type) this.f33445x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33445x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33446y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33445x;
        }

        public Contract getContract() {
            return this.D;
        }

        public int getFlags() {
            return this.f33437p;
        }

        public int getName() {
            return this.f33439r;
        }

        public int getOldFlags() {
            return this.f33438q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Function> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f33443v;
        }

        public int getReceiverTypeId() {
            return this.f33444w;
        }

        public Type getReturnType() {
            return this.f33440s;
        }

        public int getReturnTypeId() {
            return this.f33441t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33436o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33438q);
            } else {
                i10 = 0;
            }
            if ((this.f33436o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33439r);
            }
            if ((this.f33436o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33440s);
            }
            for (int i12 = 0; i12 < this.f33442u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33442u.get(i12));
            }
            if ((this.f33436o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33443v);
            }
            for (int i13 = 0; i13 < this.A.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.A.get(i13));
            }
            if ((this.f33436o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33441t);
            }
            if ((this.f33436o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f33444w);
            }
            if ((this.f33436o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33437p);
            }
            for (int i14 = 0; i14 < this.f33445x.size(); i14++) {
                i10 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.f33445x.get(i14));
            }
            int i15 = 0;
            for (int i16 = 0; i16 < this.f33446y.size(); i16++) {
                i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33446y.get(i16)).intValue());
            }
            int i17 = i10 + i15;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
            }
            this.f33447z = i15;
            if ((this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i17 += CodedOutputStream.computeMessageSize(30, this.B);
            }
            int i18 = 0;
            for (int i19 = 0; i19 < this.C.size(); i19++) {
                i18 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.C.get(i19)).intValue());
            }
            int size = i17 + i18 + (getVersionRequirementList().size() * 2);
            if ((this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                size += CodedOutputStream.computeMessageSize(32, this.D);
            }
            for (int i20 = 0; i20 < this.E.size(); i20++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.E.get(i20));
            }
            int j10 = size + j() + this.f33435i.size();
            this.G = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33442u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33442u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33442u;
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
            if ((this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33436o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33436o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f33436o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f33436o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f33436o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f33436o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f33436o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33436o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f33438q);
            }
            if ((this.f33436o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f33439r);
            }
            if ((this.f33436o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f33440s);
            }
            for (int i10 = 0; i10 < this.f33442u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33442u.get(i10));
            }
            if ((this.f33436o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f33443v);
            }
            for (int i11 = 0; i11 < this.A.size(); i11++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.A.get(i11));
            }
            if ((this.f33436o & 16) == 16) {
                codedOutputStream.writeInt32(7, this.f33441t);
            }
            if ((this.f33436o & 64) == 64) {
                codedOutputStream.writeInt32(8, this.f33444w);
            }
            if ((this.f33436o & 1) == 1) {
                codedOutputStream.writeInt32(9, this.f33437p);
            }
            for (int i12 = 0; i12 < this.f33445x.size(); i12++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.f33445x.get(i12));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(90);
                codedOutputStream.writeRawVarint32(this.f33447z);
            }
            for (int i13 = 0; i13 < this.f33446y.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33446y.get(i13)).intValue());
            }
            if ((this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(30, this.B);
            }
            for (int i14 = 0; i14 < this.C.size(); i14++) {
                codedOutputStream.writeInt32(31, ((Integer) this.C.get(i14)).intValue());
            }
            if ((this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(32, this.D);
            }
            for (int i15 = 0; i15 < this.E.size(); i15++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.E.get(i15));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33435i);
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
            this.f33447z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33435i = extendableBuilder.getUnknownFields();
        }

        private Function(boolean z10) {
            this.f33447z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33435i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v0 */
        /* JADX WARN: Type inference failed for: r8v1 */
        /* JADX WARN: Type inference failed for: r8v2, types: [boolean] */
        private Function(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            this.f33447z = -1;
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
                                    this.f33436o |= 2;
                                    this.f33438q = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 16:
                                    z10 = z11;
                                    this.f33436o |= 4;
                                    this.f33439r = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    z10 = z11;
                                    Type.Builder builder = (this.f33436o & 8) == 8 ? this.f33440s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33440s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33440s = builder.buildPartial();
                                    }
                                    this.f33436o |= 8;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    z10 = z11;
                                    boolean z14 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z14) {
                                        this.f33442u = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33442u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 42:
                                    z10 = z11;
                                    Type.Builder builder2 = (this.f33436o & 32) == 32 ? this.f33443v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33443v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f33443v = builder2.buildPartial();
                                    }
                                    this.f33436o |= 32;
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
                                    this.f33436o |= 16;
                                    this.f33441t = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 64:
                                    z10 = z11;
                                    this.f33436o |= 64;
                                    this.f33444w = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 72:
                                    z10 = z11;
                                    this.f33436o |= 1;
                                    this.f33437p = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 82:
                                    z10 = z11;
                                    boolean z16 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z16) {
                                        this.f33445x = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33445x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 88:
                                    z10 = z11;
                                    boolean z17 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z17) {
                                        this.f33446y = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33446y.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                            this.f33446y = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33446y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 242:
                                    z10 = z11;
                                    TypeTable.Builder builder3 = (this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.B.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.B = typeTable;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(typeTable);
                                        this.B = builder3.buildPartial();
                                    }
                                    this.f33436o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
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
                                    Contract.Builder builder4 = (this.f33436o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.D.toBuilder() : null;
                                    Contract contract = (Contract) codedInputStream.readMessage(Contract.PARSER, extensionRegistryLite);
                                    this.D = contract;
                                    if (builder4 != null) {
                                        builder4.mergeFrom(contract);
                                        this.D = builder4.buildPartial();
                                    }
                                    this.f33436o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
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
                                this.f33442u = Collections.unmodifiableList(this.f33442u);
                            }
                            if (((z13 ? 1 : 0) & true) == r82) {
                                this.A = Collections.unmodifiableList(this.A);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f33445x = Collections.unmodifiableList(this.f33445x);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f33446y = Collections.unmodifiableList(this.f33446y);
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
                                this.f33435i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33435i = newOutput.toByteString();
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
                        this.f33442u = Collections.unmodifiableList(this.f33442u);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.A = Collections.unmodifiableList(this.A);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f33445x = Collections.unmodifiableList(this.f33445x);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f33446y = Collections.unmodifiableList(this.f33446y);
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
                        this.f33435i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33435i = newOutput.toByteString();
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
        private static Internal.EnumLiteMap f33460e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33462d;

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
            this.f33462d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33462d;
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
        private static Internal.EnumLiteMap f33463e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33465d;

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
            this.f33465d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33465d;
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
        private static final Package f33466w;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33467i;

        /* renamed from: o  reason: collision with root package name */
        private int f33468o;

        /* renamed from: p  reason: collision with root package name */
        private List f33469p;

        /* renamed from: q  reason: collision with root package name */
        private List f33470q;

        /* renamed from: r  reason: collision with root package name */
        private List f33471r;

        /* renamed from: s  reason: collision with root package name */
        private TypeTable f33472s;

        /* renamed from: t  reason: collision with root package name */
        private VersionRequirementTable f33473t;

        /* renamed from: u  reason: collision with root package name */
        private byte f33474u;

        /* renamed from: v  reason: collision with root package name */
        private int f33475v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Package, Builder> implements PackageOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33476o;

            /* renamed from: p  reason: collision with root package name */
            private List f33477p;

            /* renamed from: q  reason: collision with root package name */
            private List f33478q;

            /* renamed from: r  reason: collision with root package name */
            private List f33479r;

            /* renamed from: s  reason: collision with root package name */
            private TypeTable f33480s;

            /* renamed from: t  reason: collision with root package name */
            private VersionRequirementTable f33481t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33477p = list;
                this.f33478q = list;
                this.f33479r = list;
                this.f33480s = TypeTable.getDefaultInstance();
                this.f33481t = VersionRequirementTable.getDefaultInstance();
                m();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33476o & 1) != 1) {
                    this.f33477p = new ArrayList(this.f33477p);
                    this.f33476o |= 1;
                }
            }

            private void k() {
                if ((this.f33476o & 2) != 2) {
                    this.f33478q = new ArrayList(this.f33478q);
                    this.f33476o |= 2;
                }
            }

            private void l() {
                if ((this.f33476o & 4) != 4) {
                    this.f33479r = new ArrayList(this.f33479r);
                    this.f33476o |= 4;
                }
            }

            private void m() {
            }

            public Package buildPartial() {
                Package r02 = new Package(this);
                int i10 = this.f33476o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33477p = Collections.unmodifiableList(this.f33477p);
                    this.f33476o &= -2;
                }
                r02.f33469p = this.f33477p;
                if ((this.f33476o & 2) == 2) {
                    this.f33478q = Collections.unmodifiableList(this.f33478q);
                    this.f33476o &= -3;
                }
                r02.f33470q = this.f33478q;
                if ((this.f33476o & 4) == 4) {
                    this.f33479r = Collections.unmodifiableList(this.f33479r);
                    this.f33476o &= -5;
                }
                r02.f33471r = this.f33479r;
                if ((i10 & 8) != 8) {
                    i11 = 0;
                }
                r02.f33472s = this.f33480s;
                if ((i10 & 16) == 16) {
                    i11 |= 2;
                }
                r02.f33473t = this.f33481t;
                r02.f33468o = i11;
                return r02;
            }

            public Function getFunction(int i10) {
                return (Function) this.f33477p.get(i10);
            }

            public int getFunctionCount() {
                return this.f33477p.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.f33478q.get(i10);
            }

            public int getPropertyCount() {
                return this.f33478q.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.f33479r.get(i10);
            }

            public int getTypeAliasCount() {
                return this.f33479r.size();
            }

            public TypeTable getTypeTable() {
                return this.f33480s;
            }

            public boolean hasTypeTable() {
                if ((this.f33476o & 8) == 8) {
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
                if ((this.f33476o & 8) == 8 && this.f33480s != TypeTable.getDefaultInstance()) {
                    this.f33480s = TypeTable.newBuilder(this.f33480s).mergeFrom(typeTable).buildPartial();
                } else {
                    this.f33480s = typeTable;
                }
                this.f33476o |= 8;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33476o & 16) == 16 && this.f33481t != VersionRequirementTable.getDefaultInstance()) {
                    this.f33481t = VersionRequirementTable.newBuilder(this.f33481t).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.f33481t = versionRequirementTable;
                }
                this.f33476o |= 16;
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
                if (!r32.f33469p.isEmpty()) {
                    if (this.f33477p.isEmpty()) {
                        this.f33477p = r32.f33469p;
                        this.f33476o &= -2;
                    } else {
                        j();
                        this.f33477p.addAll(r32.f33469p);
                    }
                }
                if (!r32.f33470q.isEmpty()) {
                    if (this.f33478q.isEmpty()) {
                        this.f33478q = r32.f33470q;
                        this.f33476o &= -3;
                    } else {
                        k();
                        this.f33478q.addAll(r32.f33470q);
                    }
                }
                if (!r32.f33471r.isEmpty()) {
                    if (this.f33479r.isEmpty()) {
                        this.f33479r = r32.f33471r;
                        this.f33476o &= -5;
                    } else {
                        l();
                        this.f33479r.addAll(r32.f33471r);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33467i));
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
            f33466w = r02;
            r02.w();
        }

        public static Package getDefaultInstance() {
            return f33466w;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static Package parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void w() {
            List list = Collections.EMPTY_LIST;
            this.f33469p = list;
            this.f33470q = list;
            this.f33471r = list;
            this.f33472s = TypeTable.getDefaultInstance();
            this.f33473t = VersionRequirementTable.getDefaultInstance();
        }

        public Function getFunction(int i10) {
            return (Function) this.f33469p.get(i10);
        }

        public int getFunctionCount() {
            return this.f33469p.size();
        }

        public List<Function> getFunctionList() {
            return this.f33469p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Package> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.f33470q.get(i10);
        }

        public int getPropertyCount() {
            return this.f33470q.size();
        }

        public List<Property> getPropertyList() {
            return this.f33470q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33475v;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33469p.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f33469p.get(i12));
            }
            for (int i13 = 0; i13 < this.f33470q.size(); i13++) {
                i11 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33470q.get(i13));
            }
            for (int i14 = 0; i14 < this.f33471r.size(); i14++) {
                i11 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33471r.get(i14));
            }
            if ((this.f33468o & 1) == 1) {
                i11 += CodedOutputStream.computeMessageSize(30, this.f33472s);
            }
            if ((this.f33468o & 2) == 2) {
                i11 += CodedOutputStream.computeMessageSize(32, this.f33473t);
            }
            int j10 = i11 + j() + this.f33467i.size();
            this.f33475v = j10;
            return j10;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.f33471r.get(i10);
        }

        public int getTypeAliasCount() {
            return this.f33471r.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.f33471r;
        }

        public TypeTable getTypeTable() {
            return this.f33472s;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.f33473t;
        }

        public boolean hasTypeTable() {
            if ((this.f33468o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33468o & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33474u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                if (!getFunction(i10).isInitialized()) {
                    this.f33474u = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                if (!getProperty(i11).isInitialized()) {
                    this.f33474u = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                if (!getTypeAlias(i12).isInitialized()) {
                    this.f33474u = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.f33474u = (byte) 0;
                return false;
            } else if (!i()) {
                this.f33474u = (byte) 0;
                return false;
            } else {
                this.f33474u = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            for (int i10 = 0; i10 < this.f33469p.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f33469p.get(i10));
            }
            for (int i11 = 0; i11 < this.f33470q.size(); i11++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33470q.get(i11));
            }
            for (int i12 = 0; i12 < this.f33471r.size(); i12++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33471r.get(i12));
            }
            if ((this.f33468o & 1) == 1) {
                codedOutputStream.writeMessage(30, this.f33472s);
            }
            if ((this.f33468o & 2) == 2) {
                codedOutputStream.writeMessage(32, this.f33473t);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33467i);
        }

        public static Builder newBuilder(Package r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Package getDefaultInstanceForType() {
            return f33466w;
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
            this.f33474u = (byte) -1;
            this.f33475v = -1;
            this.f33467i = extendableBuilder.getUnknownFields();
        }

        private Package(boolean z10) {
            this.f33474u = (byte) -1;
            this.f33475v = -1;
            this.f33467i = ByteString.EMPTY;
        }

        private Package(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33474u = (byte) -1;
            this.f33475v = -1;
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
                                    this.f33469p = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33469p.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                            } else if (readTag == 34) {
                                boolean z13 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z13) {
                                    this.f33470q = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33470q.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                            } else if (readTag != 42) {
                                if (readTag == 242) {
                                    TypeTable.Builder builder = (this.f33468o & 1) == 1 ? this.f33472s.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.f33472s = typeTable;
                                    if (builder != null) {
                                        builder.mergeFrom(typeTable);
                                        this.f33472s = builder.buildPartial();
                                    }
                                    this.f33468o |= 1;
                                } else if (readTag != 258) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    VersionRequirementTable.Builder builder2 = (this.f33468o & 2) == 2 ? this.f33473t.toBuilder() : null;
                                    VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                    this.f33473t = versionRequirementTable;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(versionRequirementTable);
                                        this.f33473t = builder2.buildPartial();
                                    }
                                    this.f33468o |= 2;
                                }
                            } else {
                                boolean z14 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z14) {
                                    this.f33471r = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33471r.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33469p = Collections.unmodifiableList(this.f33469p);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33470q = Collections.unmodifiableList(this.f33470q);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33471r = Collections.unmodifiableList(this.f33471r);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33467i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33467i = newOutput.toByteString();
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
                this.f33469p = Collections.unmodifiableList(this.f33469p);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33470q = Collections.unmodifiableList(this.f33470q);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33471r = Collections.unmodifiableList(this.f33471r);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33467i = newOutput.toByteString();
                throw th4;
            }
            this.f33467i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PackageFragment extends GeneratedMessageLite.ExtendableMessage<PackageFragment> implements PackageFragmentOrBuilder {
        public static Parser<PackageFragment> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final PackageFragment f33482v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33483i;

        /* renamed from: o  reason: collision with root package name */
        private int f33484o;

        /* renamed from: p  reason: collision with root package name */
        private StringTable f33485p;

        /* renamed from: q  reason: collision with root package name */
        private QualifiedNameTable f33486q;

        /* renamed from: r  reason: collision with root package name */
        private Package f33487r;

        /* renamed from: s  reason: collision with root package name */
        private List f33488s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33489t;

        /* renamed from: u  reason: collision with root package name */
        private int f33490u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<PackageFragment, Builder> implements PackageFragmentOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33491o;

            /* renamed from: p  reason: collision with root package name */
            private StringTable f33492p = StringTable.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private QualifiedNameTable f33493q = QualifiedNameTable.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private Package f33494r = Package.getDefaultInstance();

            /* renamed from: s  reason: collision with root package name */
            private List f33495s = Collections.EMPTY_LIST;

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
                if ((this.f33491o & 8) != 8) {
                    this.f33495s = new ArrayList(this.f33495s);
                    this.f33491o |= 8;
                }
            }

            private void k() {
            }

            public PackageFragment buildPartial() {
                PackageFragment packageFragment = new PackageFragment(this);
                int i10 = this.f33491o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                packageFragment.f33485p = this.f33492p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                packageFragment.f33486q = this.f33493q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                packageFragment.f33487r = this.f33494r;
                if ((this.f33491o & 8) == 8) {
                    this.f33495s = Collections.unmodifiableList(this.f33495s);
                    this.f33491o &= -9;
                }
                packageFragment.f33488s = this.f33495s;
                packageFragment.f33484o = i11;
                return packageFragment;
            }

            public Class getClass_(int i10) {
                return (Class) this.f33495s.get(i10);
            }

            public int getClass_Count() {
                return this.f33495s.size();
            }

            public Package getPackage() {
                return this.f33494r;
            }

            public QualifiedNameTable getQualifiedNames() {
                return this.f33493q;
            }

            public boolean hasPackage() {
                if ((this.f33491o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasQualifiedNames() {
                if ((this.f33491o & 2) == 2) {
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
                if ((this.f33491o & 4) == 4 && this.f33494r != Package.getDefaultInstance()) {
                    this.f33494r = Package.newBuilder(this.f33494r).mergeFrom(r42).buildPartial();
                } else {
                    this.f33494r = r42;
                }
                this.f33491o |= 4;
                return this;
            }

            public Builder mergeQualifiedNames(QualifiedNameTable qualifiedNameTable) {
                if ((this.f33491o & 2) == 2 && this.f33493q != QualifiedNameTable.getDefaultInstance()) {
                    this.f33493q = QualifiedNameTable.newBuilder(this.f33493q).mergeFrom(qualifiedNameTable).buildPartial();
                } else {
                    this.f33493q = qualifiedNameTable;
                }
                this.f33491o |= 2;
                return this;
            }

            public Builder mergeStrings(StringTable stringTable) {
                if ((this.f33491o & 1) == 1 && this.f33492p != StringTable.getDefaultInstance()) {
                    this.f33492p = StringTable.newBuilder(this.f33492p).mergeFrom(stringTable).buildPartial();
                } else {
                    this.f33492p = stringTable;
                }
                this.f33491o |= 1;
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
                if (!packageFragment.f33488s.isEmpty()) {
                    if (this.f33495s.isEmpty()) {
                        this.f33495s = packageFragment.f33488s;
                        this.f33491o &= -9;
                    } else {
                        j();
                        this.f33495s.addAll(packageFragment.f33488s);
                    }
                }
                f(packageFragment);
                setUnknownFields(getUnknownFields().concat(packageFragment.f33483i));
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
            f33482v = packageFragment;
            packageFragment.t();
        }

        public static PackageFragment getDefaultInstance() {
            return f33482v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static PackageFragment parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void t() {
            this.f33485p = StringTable.getDefaultInstance();
            this.f33486q = QualifiedNameTable.getDefaultInstance();
            this.f33487r = Package.getDefaultInstance();
            this.f33488s = Collections.EMPTY_LIST;
        }

        public Class getClass_(int i10) {
            return (Class) this.f33488s.get(i10);
        }

        public int getClass_Count() {
            return this.f33488s.size();
        }

        public List<Class> getClass_List() {
            return this.f33488s;
        }

        public Package getPackage() {
            return this.f33487r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<PackageFragment> getParserForType() {
            return PARSER;
        }

        public QualifiedNameTable getQualifiedNames() {
            return this.f33486q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33490u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33484o & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f33485p);
            } else {
                i10 = 0;
            }
            if ((this.f33484o & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f33486q);
            }
            if ((this.f33484o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33487r);
            }
            for (int i12 = 0; i12 < this.f33488s.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33488s.get(i12));
            }
            int j10 = i10 + j() + this.f33483i.size();
            this.f33490u = j10;
            return j10;
        }

        public StringTable getStrings() {
            return this.f33485p;
        }

        public boolean hasPackage() {
            if ((this.f33484o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasQualifiedNames() {
            if ((this.f33484o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasStrings() {
            if ((this.f33484o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33489t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                this.f33489t = (byte) 0;
                return false;
            } else if (hasPackage() && !getPackage().isInitialized()) {
                this.f33489t = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        this.f33489t = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33489t = (byte) 0;
                    return false;
                }
                this.f33489t = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33484o & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f33485p);
            }
            if ((this.f33484o & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f33486q);
            }
            if ((this.f33484o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33487r);
            }
            for (int i10 = 0; i10 < this.f33488s.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33488s.get(i10));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33483i);
        }

        public static Builder newBuilder(PackageFragment packageFragment) {
            return newBuilder().mergeFrom(packageFragment);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public PackageFragment getDefaultInstanceForType() {
            return f33482v;
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
            this.f33489t = (byte) -1;
            this.f33490u = -1;
            this.f33483i = extendableBuilder.getUnknownFields();
        }

        private PackageFragment(boolean z10) {
            this.f33489t = (byte) -1;
            this.f33490u = -1;
            this.f33483i = ByteString.EMPTY;
        }

        private PackageFragment(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33489t = (byte) -1;
            this.f33490u = -1;
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
                                StringTable.Builder builder = (this.f33484o & 1) == 1 ? this.f33485p.toBuilder() : null;
                                StringTable stringTable = (StringTable) codedInputStream.readMessage(StringTable.PARSER, extensionRegistryLite);
                                this.f33485p = stringTable;
                                if (builder != null) {
                                    builder.mergeFrom(stringTable);
                                    this.f33485p = builder.buildPartial();
                                }
                                this.f33484o |= 1;
                            } else if (readTag == 18) {
                                QualifiedNameTable.Builder builder2 = (this.f33484o & 2) == 2 ? this.f33486q.toBuilder() : null;
                                QualifiedNameTable qualifiedNameTable = (QualifiedNameTable) codedInputStream.readMessage(QualifiedNameTable.PARSER, extensionRegistryLite);
                                this.f33486q = qualifiedNameTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(qualifiedNameTable);
                                    this.f33486q = builder2.buildPartial();
                                }
                                this.f33484o |= 2;
                            } else if (readTag == 26) {
                                Package.Builder builder3 = (this.f33484o & 4) == 4 ? this.f33487r.toBuilder() : null;
                                Package r62 = (Package) codedInputStream.readMessage(Package.PARSER, extensionRegistryLite);
                                this.f33487r = r62;
                                if (builder3 != null) {
                                    builder3.mergeFrom(r62);
                                    this.f33487r = builder3.buildPartial();
                                }
                                this.f33484o |= 4;
                            } else if (readTag != 34) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f33488s = new ArrayList();
                                    z11 = true;
                                }
                                this.f33488s.add(codedInputStream.readMessage(Class.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33488s = Collections.unmodifiableList(this.f33488s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33483i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33483i = newOutput.toByteString();
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
                this.f33488s = Collections.unmodifiableList(this.f33488s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33483i = newOutput.toByteString();
                throw th4;
            }
            this.f33483i = newOutput.toByteString();
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
        private final ByteString f33496i;

        /* renamed from: o  reason: collision with root package name */
        private int f33497o;

        /* renamed from: p  reason: collision with root package name */
        private int f33498p;

        /* renamed from: q  reason: collision with root package name */
        private int f33499q;

        /* renamed from: r  reason: collision with root package name */
        private int f33500r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33501s;

        /* renamed from: t  reason: collision with root package name */
        private int f33502t;

        /* renamed from: u  reason: collision with root package name */
        private List f33503u;

        /* renamed from: v  reason: collision with root package name */
        private Type f33504v;

        /* renamed from: w  reason: collision with root package name */
        private int f33505w;

        /* renamed from: x  reason: collision with root package name */
        private List f33506x;

        /* renamed from: y  reason: collision with root package name */
        private List f33507y;

        /* renamed from: z  reason: collision with root package name */
        private int f33508z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Property, Builder> implements PropertyOrBuilder {
            private int A;
            private int B;
            private List C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f33509o;

            /* renamed from: r  reason: collision with root package name */
            private int f33512r;

            /* renamed from: t  reason: collision with root package name */
            private int f33514t;

            /* renamed from: u  reason: collision with root package name */
            private List f33515u;

            /* renamed from: v  reason: collision with root package name */
            private Type f33516v;

            /* renamed from: w  reason: collision with root package name */
            private int f33517w;

            /* renamed from: x  reason: collision with root package name */
            private List f33518x;

            /* renamed from: y  reason: collision with root package name */
            private List f33519y;

            /* renamed from: z  reason: collision with root package name */
            private ValueParameter f33520z;

            /* renamed from: p  reason: collision with root package name */
            private int f33510p = 518;

            /* renamed from: q  reason: collision with root package name */
            private int f33511q = 2054;

            /* renamed from: s  reason: collision with root package name */
            private Type f33513s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33515u = list;
                this.f33516v = Type.getDefaultInstance();
                this.f33518x = list;
                this.f33519y = list;
                this.f33520z = ValueParameter.getDefaultInstance();
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
                if ((this.f33509o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33509o |= 16384;
                }
            }

            private void k() {
                if ((this.f33509o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33519y = new ArrayList(this.f33519y);
                    this.f33509o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33509o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33518x = new ArrayList(this.f33518x);
                    this.f33509o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33509o & 32) != 32) {
                    this.f33515u = new ArrayList(this.f33515u);
                    this.f33509o |= 32;
                }
            }

            private void n() {
                if ((this.f33509o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33509o |= 8192;
                }
            }

            private void p() {
            }

            public Property buildPartial() {
                Property property = new Property(this);
                int i10 = this.f33509o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                property.f33498p = this.f33510p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                property.f33499q = this.f33511q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                property.f33500r = this.f33512r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                property.f33501s = this.f33513s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                property.f33502t = this.f33514t;
                if ((this.f33509o & 32) == 32) {
                    this.f33515u = Collections.unmodifiableList(this.f33515u);
                    this.f33509o &= -33;
                }
                property.f33503u = this.f33515u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                property.f33504v = this.f33516v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                property.f33505w = this.f33517w;
                if ((this.f33509o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33518x = Collections.unmodifiableList(this.f33518x);
                    this.f33509o &= -257;
                }
                property.f33506x = this.f33518x;
                if ((this.f33509o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33519y = Collections.unmodifiableList(this.f33519y);
                    this.f33509o &= -513;
                }
                property.f33507y = this.f33519y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                property.A = this.f33520z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                property.B = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                property.C = this.B;
                if ((this.f33509o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33509o &= -8193;
                }
                property.D = this.C;
                if ((this.f33509o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33509o &= -16385;
                }
                property.E = this.D;
                property.f33497o = i11;
                return property;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33518x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33518x.size();
            }

            public Type getReceiverType() {
                return this.f33516v;
            }

            public Type getReturnType() {
                return this.f33513s;
            }

            public ValueParameter getSetterValueParameter() {
                return this.f33520z;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33515u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33515u.size();
            }

            public boolean hasName() {
                if ((this.f33509o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f33509o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f33509o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasSetterValueParameter() {
                if ((this.f33509o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
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
                if ((this.f33509o & 64) == 64 && this.f33516v != Type.getDefaultInstance()) {
                    this.f33516v = Type.newBuilder(this.f33516v).mergeFrom(type).buildPartial();
                } else {
                    this.f33516v = type;
                }
                this.f33509o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f33509o & 8) == 8 && this.f33513s != Type.getDefaultInstance()) {
                    this.f33513s = Type.newBuilder(this.f33513s).mergeFrom(type).buildPartial();
                } else {
                    this.f33513s = type;
                }
                this.f33509o |= 8;
                return this;
            }

            public Builder mergeSetterValueParameter(ValueParameter valueParameter) {
                if ((this.f33509o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 && this.f33520z != ValueParameter.getDefaultInstance()) {
                    this.f33520z = ValueParameter.newBuilder(this.f33520z).mergeFrom(valueParameter).buildPartial();
                } else {
                    this.f33520z = valueParameter;
                }
                this.f33509o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33509o |= 1;
                this.f33510p = i10;
                return this;
            }

            public Builder setGetterFlags(int i10) {
                this.f33509o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                this.A = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33509o |= 4;
                this.f33512r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f33509o |= 2;
                this.f33511q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f33509o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33517w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f33509o |= 16;
                this.f33514t = i10;
                return this;
            }

            public Builder setSetterFlags(int i10) {
                this.f33509o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
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
                if (!property.f33503u.isEmpty()) {
                    if (this.f33515u.isEmpty()) {
                        this.f33515u = property.f33503u;
                        this.f33509o &= -33;
                    } else {
                        m();
                        this.f33515u.addAll(property.f33503u);
                    }
                }
                if (property.hasReceiverType()) {
                    mergeReceiverType(property.getReceiverType());
                }
                if (property.hasReceiverTypeId()) {
                    setReceiverTypeId(property.getReceiverTypeId());
                }
                if (!property.f33506x.isEmpty()) {
                    if (this.f33518x.isEmpty()) {
                        this.f33518x = property.f33506x;
                        this.f33509o &= -257;
                    } else {
                        l();
                        this.f33518x.addAll(property.f33506x);
                    }
                }
                if (!property.f33507y.isEmpty()) {
                    if (this.f33519y.isEmpty()) {
                        this.f33519y = property.f33507y;
                        this.f33509o &= -513;
                    } else {
                        k();
                        this.f33519y.addAll(property.f33507y);
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
                        this.f33509o &= -8193;
                    } else {
                        n();
                        this.C.addAll(property.D);
                    }
                }
                if (!property.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = property.E;
                        this.f33509o &= -16385;
                    } else {
                        j();
                        this.D.addAll(property.E);
                    }
                }
                f(property);
                setUnknownFields(getUnknownFields().concat(property.f33496i));
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
            this.f33498p = 518;
            this.f33499q = 2054;
            this.f33500r = 0;
            this.f33501s = Type.getDefaultInstance();
            this.f33502t = 0;
            List list = Collections.EMPTY_LIST;
            this.f33503u = list;
            this.f33504v = Type.getDefaultInstance();
            this.f33505w = 0;
            this.f33506x = list;
            this.f33507y = list;
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
            return (Type) this.f33506x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33506x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33507y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33506x;
        }

        public int getFlags() {
            return this.f33498p;
        }

        public int getGetterFlags() {
            return this.B;
        }

        public int getName() {
            return this.f33500r;
        }

        public int getOldFlags() {
            return this.f33499q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Property> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f33504v;
        }

        public int getReceiverTypeId() {
            return this.f33505w;
        }

        public Type getReturnType() {
            return this.f33501s;
        }

        public int getReturnTypeId() {
            return this.f33502t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33497o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33499q);
            } else {
                i10 = 0;
            }
            if ((this.f33497o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33500r);
            }
            if ((this.f33497o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33501s);
            }
            for (int i12 = 0; i12 < this.f33503u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33503u.get(i12));
            }
            if ((this.f33497o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33504v);
            }
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeMessageSize(6, this.A);
            }
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeInt32Size(7, this.B);
            }
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(8, this.C);
            }
            if ((this.f33497o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33502t);
            }
            if ((this.f33497o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(10, this.f33505w);
            }
            if ((this.f33497o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f33498p);
            }
            for (int i13 = 0; i13 < this.f33506x.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(12, (MessageLite) this.f33506x.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f33507y.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33507y.get(i15)).intValue());
            }
            int i16 = i10 + i14;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i16 = i16 + 1 + CodedOutputStream.computeInt32SizeNoTag(i14);
            }
            this.f33508z = i14;
            int i17 = 0;
            for (int i18 = 0; i18 < this.D.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.D.get(i18)).intValue());
            }
            int size = i16 + i17 + (getVersionRequirementList().size() * 2);
            for (int i19 = 0; i19 < this.E.size(); i19++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.E.get(i19));
            }
            int j10 = size + j() + this.f33496i.size();
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
            return (TypeParameter) this.f33503u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33503u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33503u;
        }

        public List<Integer> getVersionRequirementList() {
            return this.D;
        }

        public boolean hasFlags() {
            if ((this.f33497o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetterFlags() {
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33497o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f33497o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f33497o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f33497o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f33497o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f33497o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasSetterFlags() {
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasSetterValueParameter() {
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33497o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f33499q);
            }
            if ((this.f33497o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f33500r);
            }
            if ((this.f33497o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f33501s);
            }
            for (int i10 = 0; i10 < this.f33503u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33503u.get(i10));
            }
            if ((this.f33497o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f33504v);
            }
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(6, this.A);
            }
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeInt32(7, this.B);
            }
            if ((this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(8, this.C);
            }
            if ((this.f33497o & 16) == 16) {
                codedOutputStream.writeInt32(9, this.f33502t);
            }
            if ((this.f33497o & 64) == 64) {
                codedOutputStream.writeInt32(10, this.f33505w);
            }
            if ((this.f33497o & 1) == 1) {
                codedOutputStream.writeInt32(11, this.f33498p);
            }
            for (int i11 = 0; i11 < this.f33506x.size(); i11++) {
                codedOutputStream.writeMessage(12, (MessageLite) this.f33506x.get(i11));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(106);
                codedOutputStream.writeRawVarint32(this.f33508z);
            }
            for (int i12 = 0; i12 < this.f33507y.size(); i12++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33507y.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.D.size(); i13++) {
                codedOutputStream.writeInt32(31, ((Integer) this.D.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.E.size(); i14++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.E.get(i14));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33496i);
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
            this.f33508z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33496i = extendableBuilder.getUnknownFields();
        }

        private Property(boolean z10) {
            this.f33508z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33496i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private Property(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33508z = -1;
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
                                    this.f33497o |= 2;
                                    this.f33499q = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f33497o |= 4;
                                    this.f33500r = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    Type.Builder builder = (this.f33497o & 8) == 8 ? this.f33501s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33501s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33501s = builder.buildPartial();
                                    }
                                    this.f33497o |= 8;
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    boolean z12 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z12) {
                                        this.f33503u = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33503u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case 42:
                                    Type.Builder builder2 = (this.f33497o & 32) == 32 ? this.f33504v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33504v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f33504v = builder2.buildPartial();
                                    }
                                    this.f33497o |= 32;
                                    continue;
                                case 50:
                                    ValueParameter.Builder builder3 = (this.f33497o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.A.toBuilder() : null;
                                    ValueParameter valueParameter = (ValueParameter) codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite);
                                    this.A = valueParameter;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(valueParameter);
                                        this.A = builder3.buildPartial();
                                    }
                                    this.f33497o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33497o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f33497o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f33497o |= 16;
                                    this.f33502t = codedInputStream.readInt32();
                                    continue;
                                case 80:
                                    this.f33497o |= 64;
                                    this.f33505w = codedInputStream.readInt32();
                                    continue;
                                case 88:
                                    this.f33497o |= 1;
                                    this.f33498p = codedInputStream.readInt32();
                                    continue;
                                case 98:
                                    boolean z13 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z13) {
                                        this.f33506x = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33506x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                case 104:
                                    boolean z14 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z14) {
                                        this.f33507y = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33507y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case 106:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z15 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z15) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f33507y = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33507y.add(Integer.valueOf(codedInputStream.readInt32()));
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
                            this.f33503u = Collections.unmodifiableList(this.f33503u);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33506x = Collections.unmodifiableList(this.f33506x);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33507y = Collections.unmodifiableList(this.f33507y);
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
                            this.f33496i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33496i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } else {
                    if ((z11 ? 1 : 0) & true) {
                        this.f33503u = Collections.unmodifiableList(this.f33503u);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f33506x = Collections.unmodifiableList(this.f33506x);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f33507y = Collections.unmodifiableList(this.f33507y);
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
                        this.f33496i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33496i = newOutput.toByteString();
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
        private static final QualifiedNameTable f33521q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33522e;

        /* renamed from: i  reason: collision with root package name */
        private List f33523i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33524o;

        /* renamed from: p  reason: collision with root package name */
        private int f33525p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<QualifiedNameTable, Builder> implements QualifiedNameTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33526e;

            /* renamed from: i  reason: collision with root package name */
            private List f33527i = Collections.EMPTY_LIST;

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
                if ((this.f33526e & 1) != 1) {
                    this.f33527i = new ArrayList(this.f33527i);
                    this.f33526e |= 1;
                }
            }

            private void e() {
            }

            public QualifiedNameTable buildPartial() {
                QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(this);
                if ((this.f33526e & 1) == 1) {
                    this.f33527i = Collections.unmodifiableList(this.f33527i);
                    this.f33526e &= -2;
                }
                qualifiedNameTable.f33523i = this.f33527i;
                return qualifiedNameTable;
            }

            public QualifiedName getQualifiedName(int i10) {
                return (QualifiedName) this.f33527i.get(i10);
            }

            public int getQualifiedNameCount() {
                return this.f33527i.size();
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
                if (!qualifiedNameTable.f33523i.isEmpty()) {
                    if (this.f33527i.isEmpty()) {
                        this.f33527i = qualifiedNameTable.f33523i;
                        this.f33526e &= -2;
                    } else {
                        d();
                        this.f33527i.addAll(qualifiedNameTable.f33523i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(qualifiedNameTable.f33522e));
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
            private static final QualifiedName f33528t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33529e;

            /* renamed from: i  reason: collision with root package name */
            private int f33530i;

            /* renamed from: o  reason: collision with root package name */
            private int f33531o;

            /* renamed from: p  reason: collision with root package name */
            private int f33532p;

            /* renamed from: q  reason: collision with root package name */
            private Kind f33533q;

            /* renamed from: r  reason: collision with root package name */
            private byte f33534r;

            /* renamed from: s  reason: collision with root package name */
            private int f33535s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<QualifiedName, Builder> implements QualifiedNameOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33536e;

                /* renamed from: o  reason: collision with root package name */
                private int f33538o;

                /* renamed from: i  reason: collision with root package name */
                private int f33537i = -1;

                /* renamed from: p  reason: collision with root package name */
                private Kind f33539p = Kind.PACKAGE;

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
                    int i10 = this.f33536e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    qualifiedName.f33531o = this.f33537i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    qualifiedName.f33532p = this.f33538o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    qualifiedName.f33533q = this.f33539p;
                    qualifiedName.f33530i = i11;
                    return qualifiedName;
                }

                public boolean hasShortName() {
                    if ((this.f33536e & 2) == 2) {
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
                    this.f33536e |= 4;
                    this.f33539p = kind;
                    return this;
                }

                public Builder setParentQualifiedName(int i10) {
                    this.f33536e |= 1;
                    this.f33537i = i10;
                    return this;
                }

                public Builder setShortName(int i10) {
                    this.f33536e |= 2;
                    this.f33538o = i10;
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
                    setUnknownFields(getUnknownFields().concat(qualifiedName.f33529e));
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
                private static Internal.EnumLiteMap f33540e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f33542d;

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
                    this.f33542d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f33542d;
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
                f33528t = qualifiedName;
                qualifiedName.m();
            }

            public static QualifiedName getDefaultInstance() {
                return f33528t;
            }

            private void m() {
                this.f33531o = -1;
                this.f33532p = 0;
                this.f33533q = Kind.PACKAGE;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public Kind getKind() {
                return this.f33533q;
            }

            public int getParentQualifiedName() {
                return this.f33531o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<QualifiedName> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33535s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33530i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33531o);
                } else {
                    i10 = 0;
                }
                if ((this.f33530i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f33532p);
                }
                if ((this.f33530i & 4) == 4) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f33533q.getNumber());
                }
                int size = i10 + this.f33529e.size();
                this.f33535s = size;
                return size;
            }

            public int getShortName() {
                return this.f33532p;
            }

            public boolean hasKind() {
                if ((this.f33530i & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasParentQualifiedName() {
                if ((this.f33530i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasShortName() {
                if ((this.f33530i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33534r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasShortName()) {
                    this.f33534r = (byte) 0;
                    return false;
                }
                this.f33534r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33530i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33531o);
                }
                if ((this.f33530i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f33532p);
                }
                if ((this.f33530i & 4) == 4) {
                    codedOutputStream.writeEnum(3, this.f33533q.getNumber());
                }
                codedOutputStream.writeRawBytes(this.f33529e);
            }

            public static Builder newBuilder(QualifiedName qualifiedName) {
                return newBuilder().mergeFrom(qualifiedName);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedName getDefaultInstanceForType() {
                return f33528t;
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
                this.f33534r = (byte) -1;
                this.f33535s = -1;
                this.f33529e = builder.getUnknownFields();
            }

            private QualifiedName(boolean z10) {
                this.f33534r = (byte) -1;
                this.f33535s = -1;
                this.f33529e = ByteString.EMPTY;
            }

            private QualifiedName(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33534r = (byte) -1;
                this.f33535s = -1;
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
                                        this.f33530i |= 1;
                                        this.f33531o = codedInputStream.readInt32();
                                    } else if (readTag == 16) {
                                        this.f33530i |= 2;
                                        this.f33532p = codedInputStream.readInt32();
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
                                            this.f33530i |= 4;
                                            this.f33533q = valueOf;
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
                            this.f33529e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33529e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33529e = newOutput.toByteString();
                    throw th4;
                }
                this.f33529e = newOutput.toByteString();
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
            f33521q = qualifiedNameTable;
            qualifiedNameTable.k();
        }

        public static QualifiedNameTable getDefaultInstance() {
            return f33521q;
        }

        private void k() {
            this.f33523i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<QualifiedNameTable> getParserForType() {
            return PARSER;
        }

        public QualifiedName getQualifiedName(int i10) {
            return (QualifiedName) this.f33523i.get(i10);
        }

        public int getQualifiedNameCount() {
            return this.f33523i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33525p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33523i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33523i.get(i12));
            }
            int size = i11 + this.f33522e.size();
            this.f33525p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33524o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                if (!getQualifiedName(i10).isInitialized()) {
                    this.f33524o = (byte) 0;
                    return false;
                }
            }
            this.f33524o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33523i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33523i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33522e);
        }

        public static Builder newBuilder(QualifiedNameTable qualifiedNameTable) {
            return newBuilder().mergeFrom(qualifiedNameTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public QualifiedNameTable getDefaultInstanceForType() {
            return f33521q;
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
            this.f33524o = (byte) -1;
            this.f33525p = -1;
            this.f33522e = builder.getUnknownFields();
        }

        private QualifiedNameTable(boolean z10) {
            this.f33524o = (byte) -1;
            this.f33525p = -1;
            this.f33522e = ByteString.EMPTY;
        }

        private QualifiedNameTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33524o = (byte) -1;
            this.f33525p = -1;
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
                                        this.f33523i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33523i.add(codedInputStream.readMessage(QualifiedName.PARSER, extensionRegistryLite));
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
                        this.f33523i = Collections.unmodifiableList(this.f33523i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33522e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33522e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33523i = Collections.unmodifiableList(this.f33523i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33522e = newOutput.toByteString();
                throw th4;
            }
            this.f33522e = newOutput.toByteString();
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
        private static final StringTable f33543q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33544e;

        /* renamed from: i  reason: collision with root package name */
        private LazyStringList f33545i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33546o;

        /* renamed from: p  reason: collision with root package name */
        private int f33547p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTable, Builder> implements StringTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33548e;

            /* renamed from: i  reason: collision with root package name */
            private LazyStringList f33549i = LazyStringArrayList.EMPTY;

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
                if ((this.f33548e & 1) != 1) {
                    this.f33549i = new LazyStringArrayList(this.f33549i);
                    this.f33548e |= 1;
                }
            }

            private void e() {
            }

            public StringTable buildPartial() {
                StringTable stringTable = new StringTable(this);
                if ((this.f33548e & 1) == 1) {
                    this.f33549i = this.f33549i.getUnmodifiableView();
                    this.f33548e &= -2;
                }
                stringTable.f33545i = this.f33549i;
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
                if (!stringTable.f33545i.isEmpty()) {
                    if (this.f33549i.isEmpty()) {
                        this.f33549i = stringTable.f33545i;
                        this.f33548e &= -2;
                    } else {
                        d();
                        this.f33549i.addAll(stringTable.f33545i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTable.f33544e));
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
            f33543q = stringTable;
            stringTable.k();
        }

        public static StringTable getDefaultInstance() {
            return f33543q;
        }

        private void k() {
            this.f33545i = LazyStringArrayList.EMPTY;
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
            int i10 = this.f33547p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33545i.size(); i12++) {
                i11 += CodedOutputStream.computeBytesSizeNoTag(this.f33545i.getByteString(i12));
            }
            int size = i11 + getStringList().size() + this.f33544e.size();
            this.f33547p = size;
            return size;
        }

        public String getString(int i10) {
            return this.f33545i.get(i10);
        }

        public ProtocolStringList getStringList() {
            return this.f33545i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33546o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33546o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33545i.size(); i10++) {
                codedOutputStream.writeBytes(1, this.f33545i.getByteString(i10));
            }
            codedOutputStream.writeRawBytes(this.f33544e);
        }

        public static Builder newBuilder(StringTable stringTable) {
            return newBuilder().mergeFrom(stringTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTable getDefaultInstanceForType() {
            return f33543q;
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
            this.f33546o = (byte) -1;
            this.f33547p = -1;
            this.f33544e = builder.getUnknownFields();
        }

        private StringTable(boolean z10) {
            this.f33546o = (byte) -1;
            this.f33547p = -1;
            this.f33544e = ByteString.EMPTY;
        }

        private StringTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33546o = (byte) -1;
            this.f33547p = -1;
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
                                        this.f33545i = new LazyStringArrayList();
                                        z11 = true;
                                    }
                                    this.f33545i.add(readBytes);
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
                        this.f33545i = this.f33545i.getUnmodifiableView();
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33544e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33544e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33545i = this.f33545i.getUnmodifiableView();
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33544e = newOutput.toByteString();
                throw th4;
            }
            this.f33544e = newOutput.toByteString();
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
        private final ByteString f33550i;

        /* renamed from: o  reason: collision with root package name */
        private int f33551o;

        /* renamed from: p  reason: collision with root package name */
        private List f33552p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f33553q;

        /* renamed from: r  reason: collision with root package name */
        private int f33554r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33555s;

        /* renamed from: t  reason: collision with root package name */
        private int f33556t;

        /* renamed from: u  reason: collision with root package name */
        private int f33557u;

        /* renamed from: v  reason: collision with root package name */
        private int f33558v;

        /* renamed from: w  reason: collision with root package name */
        private int f33559w;

        /* renamed from: x  reason: collision with root package name */
        private int f33560x;

        /* renamed from: y  reason: collision with root package name */
        private Type f33561y;

        /* renamed from: z  reason: collision with root package name */
        private int f33562z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final Argument f33563t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33564e;

            /* renamed from: i  reason: collision with root package name */
            private int f33565i;

            /* renamed from: o  reason: collision with root package name */
            private Projection f33566o;

            /* renamed from: p  reason: collision with root package name */
            private Type f33567p;

            /* renamed from: q  reason: collision with root package name */
            private int f33568q;

            /* renamed from: r  reason: collision with root package name */
            private byte f33569r;

            /* renamed from: s  reason: collision with root package name */
            private int f33570s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33571e;

                /* renamed from: i  reason: collision with root package name */
                private Projection f33572i = Projection.INV;

                /* renamed from: o  reason: collision with root package name */
                private Type f33573o = Type.getDefaultInstance();

                /* renamed from: p  reason: collision with root package name */
                private int f33574p;

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
                    int i10 = this.f33571e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f33566o = this.f33572i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f33567p = this.f33573o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    argument.f33568q = this.f33574p;
                    argument.f33565i = i11;
                    return argument;
                }

                public Type getType() {
                    return this.f33573o;
                }

                public boolean hasType() {
                    if ((this.f33571e & 2) == 2) {
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
                    if ((this.f33571e & 2) == 2 && this.f33573o != Type.getDefaultInstance()) {
                        this.f33573o = Type.newBuilder(this.f33573o).mergeFrom(type).buildPartial();
                    } else {
                        this.f33573o = type;
                    }
                    this.f33571e |= 2;
                    return this;
                }

                public Builder setProjection(Projection projection) {
                    projection.getClass();
                    this.f33571e |= 1;
                    this.f33572i = projection;
                    return this;
                }

                public Builder setTypeId(int i10) {
                    this.f33571e |= 4;
                    this.f33574p = i10;
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
                    setUnknownFields(getUnknownFields().concat(argument.f33564e));
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
                private static Internal.EnumLiteMap f33575e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f33577d;

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
                    this.f33577d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f33577d;
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
                f33563t = argument;
                argument.m();
            }

            public static Argument getDefaultInstance() {
                return f33563t;
            }

            private void m() {
                this.f33566o = Projection.INV;
                this.f33567p = Type.getDefaultInstance();
                this.f33568q = 0;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            public Projection getProjection() {
                return this.f33566o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33570s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33565i & 1) == 1) {
                    i10 = CodedOutputStream.computeEnumSize(1, this.f33566o.getNumber());
                } else {
                    i10 = 0;
                }
                if ((this.f33565i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f33567p);
                }
                if ((this.f33565i & 4) == 4) {
                    i10 += CodedOutputStream.computeInt32Size(3, this.f33568q);
                }
                int size = i10 + this.f33564e.size();
                this.f33570s = size;
                return size;
            }

            public Type getType() {
                return this.f33567p;
            }

            public int getTypeId() {
                return this.f33568q;
            }

            public boolean hasProjection() {
                if ((this.f33565i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f33565i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeId() {
                if ((this.f33565i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33569r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    this.f33569r = (byte) 0;
                    return false;
                }
                this.f33569r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33565i & 1) == 1) {
                    codedOutputStream.writeEnum(1, this.f33566o.getNumber());
                }
                if ((this.f33565i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f33567p);
                }
                if ((this.f33565i & 4) == 4) {
                    codedOutputStream.writeInt32(3, this.f33568q);
                }
                codedOutputStream.writeRawBytes(this.f33564e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f33563t;
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
                this.f33569r = (byte) -1;
                this.f33570s = -1;
                this.f33564e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f33569r = (byte) -1;
                this.f33570s = -1;
                this.f33564e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33569r = (byte) -1;
                this.f33570s = -1;
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
                                            this.f33565i |= 1;
                                            this.f33566o = valueOf;
                                        }
                                    } else if (readTag == 18) {
                                        Builder builder = (this.f33565i & 2) == 2 ? this.f33567p.toBuilder() : null;
                                        Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                        this.f33567p = type;
                                        if (builder != null) {
                                            builder.mergeFrom(type);
                                            this.f33567p = builder.buildPartial();
                                        }
                                        this.f33565i |= 2;
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        this.f33565i |= 4;
                                        this.f33568q = codedInputStream.readInt32();
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
                            this.f33564e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33564e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33564e = newOutput.toByteString();
                    throw th4;
                }
                this.f33564e = newOutput.toByteString();
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
            private int f33578o;

            /* renamed from: q  reason: collision with root package name */
            private boolean f33580q;

            /* renamed from: r  reason: collision with root package name */
            private int f33581r;

            /* renamed from: t  reason: collision with root package name */
            private int f33583t;

            /* renamed from: u  reason: collision with root package name */
            private int f33584u;

            /* renamed from: v  reason: collision with root package name */
            private int f33585v;

            /* renamed from: w  reason: collision with root package name */
            private int f33586w;

            /* renamed from: x  reason: collision with root package name */
            private int f33587x;

            /* renamed from: z  reason: collision with root package name */
            private int f33589z;

            /* renamed from: p  reason: collision with root package name */
            private List f33579p = Collections.EMPTY_LIST;

            /* renamed from: s  reason: collision with root package name */
            private Type f33582s = Type.getDefaultInstance();

            /* renamed from: y  reason: collision with root package name */
            private Type f33588y = Type.getDefaultInstance();
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
                if ((this.f33578o & 1) != 1) {
                    this.f33579p = new ArrayList(this.f33579p);
                    this.f33578o |= 1;
                }
            }

            private void k() {
            }

            public Type buildPartial() {
                Type type = new Type(this);
                int i10 = this.f33578o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33579p = Collections.unmodifiableList(this.f33579p);
                    this.f33578o &= -2;
                }
                type.f33552p = this.f33579p;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                type.f33553q = this.f33580q;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                type.f33554r = this.f33581r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                type.f33555s = this.f33582s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                type.f33556t = this.f33583t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                type.f33557u = this.f33584u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                type.f33558v = this.f33585v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                type.f33559w = this.f33586w;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                type.f33560x = this.f33587x;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                type.f33561y = this.f33588y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                type.f33562z = this.f33589z;
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
                type.f33551o = i11;
                return type;
            }

            public Type getAbbreviatedType() {
                return this.A;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f33579p.get(i10);
            }

            public int getArgumentCount() {
                return this.f33579p.size();
            }

            public Type getFlexibleUpperBound() {
                return this.f33582s;
            }

            public Type getOuterType() {
                return this.f33588y;
            }

            public boolean hasAbbreviatedType() {
                if ((this.f33578o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            public boolean hasFlexibleUpperBound() {
                if ((this.f33578o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasOuterType() {
                if ((this.f33578o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
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
                if ((this.f33578o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != Type.getDefaultInstance()) {
                    this.A = Type.newBuilder(this.A).mergeFrom(type).buildPartial();
                } else {
                    this.A = type;
                }
                this.f33578o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder mergeFlexibleUpperBound(Type type) {
                if ((this.f33578o & 8) == 8 && this.f33582s != Type.getDefaultInstance()) {
                    this.f33582s = Type.newBuilder(this.f33582s).mergeFrom(type).buildPartial();
                } else {
                    this.f33582s = type;
                }
                this.f33578o |= 8;
                return this;
            }

            public Builder mergeOuterType(Type type) {
                if ((this.f33578o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512 && this.f33588y != Type.getDefaultInstance()) {
                    this.f33588y = Type.newBuilder(this.f33588y).mergeFrom(type).buildPartial();
                } else {
                    this.f33588y = type;
                }
                this.f33578o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                return this;
            }

            public Builder setAbbreviatedTypeId(int i10) {
                this.f33578o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            public Builder setClassName(int i10) {
                this.f33578o |= 32;
                this.f33584u = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33578o |= 8192;
                this.C = i10;
                return this;
            }

            public Builder setFlexibleTypeCapabilitiesId(int i10) {
                this.f33578o |= 4;
                this.f33581r = i10;
                return this;
            }

            public Builder setFlexibleUpperBoundId(int i10) {
                this.f33578o |= 16;
                this.f33583t = i10;
                return this;
            }

            public Builder setNullable(boolean z10) {
                this.f33578o |= 2;
                this.f33580q = z10;
                return this;
            }

            public Builder setOuterTypeId(int i10) {
                this.f33578o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                this.f33589z = i10;
                return this;
            }

            public Builder setTypeAliasName(int i10) {
                this.f33578o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                this.f33587x = i10;
                return this;
            }

            public Builder setTypeParameter(int i10) {
                this.f33578o |= 64;
                this.f33585v = i10;
                return this;
            }

            public Builder setTypeParameterName(int i10) {
                this.f33578o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33586w = i10;
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
                if (!type.f33552p.isEmpty()) {
                    if (this.f33579p.isEmpty()) {
                        this.f33579p = type.f33552p;
                        this.f33578o &= -2;
                    } else {
                        j();
                        this.f33579p.addAll(type.f33552p);
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
                setUnknownFields(getUnknownFields().concat(type.f33550i));
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
            this.f33552p = Collections.EMPTY_LIST;
            this.f33553q = false;
            this.f33554r = 0;
            this.f33555s = getDefaultInstance();
            this.f33556t = 0;
            this.f33557u = 0;
            this.f33558v = 0;
            this.f33559w = 0;
            this.f33560x = 0;
            this.f33561y = getDefaultInstance();
            this.f33562z = 0;
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
            return (Argument) this.f33552p.get(i10);
        }

        public int getArgumentCount() {
            return this.f33552p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f33552p;
        }

        public int getClassName() {
            return this.f33557u;
        }

        public int getFlags() {
            return this.C;
        }

        public int getFlexibleTypeCapabilitiesId() {
            return this.f33554r;
        }

        public Type getFlexibleUpperBound() {
            return this.f33555s;
        }

        public int getFlexibleUpperBoundId() {
            return this.f33556t;
        }

        public boolean getNullable() {
            return this.f33553q;
        }

        public Type getOuterType() {
            return this.f33561y;
        }

        public int getOuterTypeId() {
            return this.f33562z;
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
            if ((this.f33551o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                i10 = CodedOutputStream.computeInt32Size(1, this.C);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33552p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33552p.get(i12));
            }
            if ((this.f33551o & 1) == 1) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f33553q);
            }
            if ((this.f33551o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f33554r);
            }
            if ((this.f33551o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33555s);
            }
            if ((this.f33551o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f33557u);
            }
            if ((this.f33551o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33558v);
            }
            if ((this.f33551o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f33556t);
            }
            if ((this.f33551o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33559w);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeMessageSize(10, this.f33561y);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f33562z);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeInt32Size(12, this.f33560x);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                i10 += CodedOutputStream.computeMessageSize(13, this.A);
            }
            if ((this.f33551o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                i10 += CodedOutputStream.computeInt32Size(14, this.B);
            }
            int j10 = i10 + j() + this.f33550i.size();
            this.E = j10;
            return j10;
        }

        public int getTypeAliasName() {
            return this.f33560x;
        }

        public int getTypeParameter() {
            return this.f33558v;
        }

        public int getTypeParameterName() {
            return this.f33559w;
        }

        public boolean hasAbbreviatedType() {
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                return true;
            }
            return false;
        }

        public boolean hasAbbreviatedTypeId() {
            if ((this.f33551o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                return true;
            }
            return false;
        }

        public boolean hasClassName() {
            if ((this.f33551o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33551o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleTypeCapabilitiesId() {
            if ((this.f33551o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBound() {
            if ((this.f33551o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBoundId() {
            if ((this.f33551o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasNullable() {
            if ((this.f33551o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasOuterType() {
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasOuterTypeId() {
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasTypeAliasName() {
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameter() {
            if ((this.f33551o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameterName() {
            if ((this.f33551o & 64) == 64) {
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
            if ((this.f33551o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                codedOutputStream.writeInt32(1, this.C);
            }
            for (int i10 = 0; i10 < this.f33552p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33552p.get(i10));
            }
            if ((this.f33551o & 1) == 1) {
                codedOutputStream.writeBool(3, this.f33553q);
            }
            if ((this.f33551o & 2) == 2) {
                codedOutputStream.writeInt32(4, this.f33554r);
            }
            if ((this.f33551o & 4) == 4) {
                codedOutputStream.writeMessage(5, this.f33555s);
            }
            if ((this.f33551o & 16) == 16) {
                codedOutputStream.writeInt32(6, this.f33557u);
            }
            if ((this.f33551o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f33558v);
            }
            if ((this.f33551o & 8) == 8) {
                codedOutputStream.writeInt32(8, this.f33556t);
            }
            if ((this.f33551o & 64) == 64) {
                codedOutputStream.writeInt32(9, this.f33559w);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(10, this.f33561y);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(11, this.f33562z);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeInt32(12, this.f33560x);
            }
            if ((this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                codedOutputStream.writeMessage(13, this.A);
            }
            if ((this.f33551o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                codedOutputStream.writeInt32(14, this.B);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33550i);
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
            this.f33550i = extendableBuilder.getUnknownFields();
        }

        private Type(boolean z10) {
            this.D = (byte) -1;
            this.E = -1;
            this.f33550i = ByteString.EMPTY;
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
                                    this.f33551o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                    if (!z11) {
                                        this.f33552p = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33552p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                    this.f33551o |= 1;
                                    this.f33553q = codedInputStream.readBool();
                                    continue;
                                case 32:
                                    this.f33551o |= 2;
                                    this.f33554r = codedInputStream.readInt32();
                                    continue;
                                case 42:
                                    builder = (this.f33551o & 4) == 4 ? this.f33555s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f33555s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33555s = builder.buildPartial();
                                    }
                                    this.f33551o |= 4;
                                    continue;
                                case 48:
                                    this.f33551o |= 16;
                                    this.f33557u = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33551o |= 32;
                                    this.f33558v = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f33551o |= 8;
                                    this.f33556t = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f33551o |= 64;
                                    this.f33559w = codedInputStream.readInt32();
                                    continue;
                                case 82:
                                    builder = (this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.f33561y.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f33561y = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f33561y = builder.buildPartial();
                                    }
                                    this.f33551o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    continue;
                                case 88:
                                    this.f33551o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.f33562z = codedInputStream.readInt32();
                                    continue;
                                case 96:
                                    this.f33551o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    this.f33560x = codedInputStream.readInt32();
                                    continue;
                                case 106:
                                    builder = (this.f33551o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 ? this.A.toBuilder() : null;
                                    Type type3 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.A = type3;
                                    if (builder != null) {
                                        builder.mergeFrom(type3);
                                        this.A = builder.buildPartial();
                                    }
                                    this.f33551o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                                    continue;
                                case 112:
                                    this.f33551o |= RecyclerView.ItemAnimator.FLAG_MOVED;
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
                        this.f33552p = Collections.unmodifiableList(this.f33552p);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33550i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33550i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33552p = Collections.unmodifiableList(this.f33552p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33550i = newOutput.toByteString();
                throw th4;
            }
            this.f33550i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeAlias extends GeneratedMessageLite.ExtendableMessage<TypeAlias> implements TypeAliasOrBuilder {
        private static final TypeAlias B;
        public static Parser<TypeAlias> PARSER = new a();
        private int A;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33590i;

        /* renamed from: o  reason: collision with root package name */
        private int f33591o;

        /* renamed from: p  reason: collision with root package name */
        private int f33592p;

        /* renamed from: q  reason: collision with root package name */
        private int f33593q;

        /* renamed from: r  reason: collision with root package name */
        private List f33594r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33595s;

        /* renamed from: t  reason: collision with root package name */
        private int f33596t;

        /* renamed from: u  reason: collision with root package name */
        private Type f33597u;

        /* renamed from: v  reason: collision with root package name */
        private int f33598v;

        /* renamed from: w  reason: collision with root package name */
        private List f33599w;

        /* renamed from: x  reason: collision with root package name */
        private List f33600x;

        /* renamed from: y  reason: collision with root package name */
        private List f33601y;

        /* renamed from: z  reason: collision with root package name */
        private byte f33602z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeAlias, Builder> implements TypeAliasOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33603o;

            /* renamed from: p  reason: collision with root package name */
            private int f33604p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33605q;

            /* renamed from: r  reason: collision with root package name */
            private List f33606r;

            /* renamed from: s  reason: collision with root package name */
            private Type f33607s;

            /* renamed from: t  reason: collision with root package name */
            private int f33608t;

            /* renamed from: u  reason: collision with root package name */
            private Type f33609u;

            /* renamed from: v  reason: collision with root package name */
            private int f33610v;

            /* renamed from: w  reason: collision with root package name */
            private List f33611w;

            /* renamed from: x  reason: collision with root package name */
            private List f33612x;

            /* renamed from: y  reason: collision with root package name */
            private List f33613y;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33606r = list;
                this.f33607s = Type.getDefaultInstance();
                this.f33609u = Type.getDefaultInstance();
                this.f33611w = list;
                this.f33612x = list;
                this.f33613y = list;
                n();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33603o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f33611w = new ArrayList(this.f33611w);
                    this.f33603o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void k() {
                if ((this.f33603o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33613y = new ArrayList(this.f33613y);
                    this.f33603o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33603o & 4) != 4) {
                    this.f33606r = new ArrayList(this.f33606r);
                    this.f33603o |= 4;
                }
            }

            private void m() {
                if ((this.f33603o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33612x = new ArrayList(this.f33612x);
                    this.f33603o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void n() {
            }

            public TypeAlias buildPartial() {
                TypeAlias typeAlias = new TypeAlias(this);
                int i10 = this.f33603o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeAlias.f33592p = this.f33604p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeAlias.f33593q = this.f33605q;
                if ((this.f33603o & 4) == 4) {
                    this.f33606r = Collections.unmodifiableList(this.f33606r);
                    this.f33603o &= -5;
                }
                typeAlias.f33594r = this.f33606r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                typeAlias.f33595s = this.f33607s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                typeAlias.f33596t = this.f33608t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                typeAlias.f33597u = this.f33609u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                typeAlias.f33598v = this.f33610v;
                if ((this.f33603o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f33611w = Collections.unmodifiableList(this.f33611w);
                    this.f33603o &= -129;
                }
                typeAlias.f33599w = this.f33611w;
                if ((this.f33603o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33612x = Collections.unmodifiableList(this.f33612x);
                    this.f33603o &= -257;
                }
                typeAlias.f33600x = this.f33612x;
                if ((this.f33603o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33613y = Collections.unmodifiableList(this.f33613y);
                    this.f33603o &= -513;
                }
                typeAlias.f33601y = this.f33613y;
                typeAlias.f33591o = i11;
                return typeAlias;
            }

            public Annotation getAnnotation(int i10) {
                return (Annotation) this.f33611w.get(i10);
            }

            public int getAnnotationCount() {
                return this.f33611w.size();
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f33613y.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f33613y.size();
            }

            public Type getExpandedType() {
                return this.f33609u;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33606r.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33606r.size();
            }

            public Type getUnderlyingType() {
                return this.f33607s;
            }

            public boolean hasExpandedType() {
                if ((this.f33603o & 32) == 32) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33603o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasUnderlyingType() {
                if ((this.f33603o & 8) == 8) {
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
                if ((this.f33603o & 32) == 32 && this.f33609u != Type.getDefaultInstance()) {
                    this.f33609u = Type.newBuilder(this.f33609u).mergeFrom(type).buildPartial();
                } else {
                    this.f33609u = type;
                }
                this.f33603o |= 32;
                return this;
            }

            public Builder mergeUnderlyingType(Type type) {
                if ((this.f33603o & 8) == 8 && this.f33607s != Type.getDefaultInstance()) {
                    this.f33607s = Type.newBuilder(this.f33607s).mergeFrom(type).buildPartial();
                } else {
                    this.f33607s = type;
                }
                this.f33603o |= 8;
                return this;
            }

            public Builder setExpandedTypeId(int i10) {
                this.f33603o |= 64;
                this.f33610v = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33603o |= 1;
                this.f33604p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33603o |= 2;
                this.f33605q = i10;
                return this;
            }

            public Builder setUnderlyingTypeId(int i10) {
                this.f33603o |= 16;
                this.f33608t = i10;
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
                if (!typeAlias.f33594r.isEmpty()) {
                    if (this.f33606r.isEmpty()) {
                        this.f33606r = typeAlias.f33594r;
                        this.f33603o &= -5;
                    } else {
                        l();
                        this.f33606r.addAll(typeAlias.f33594r);
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
                if (!typeAlias.f33599w.isEmpty()) {
                    if (this.f33611w.isEmpty()) {
                        this.f33611w = typeAlias.f33599w;
                        this.f33603o &= -129;
                    } else {
                        j();
                        this.f33611w.addAll(typeAlias.f33599w);
                    }
                }
                if (!typeAlias.f33600x.isEmpty()) {
                    if (this.f33612x.isEmpty()) {
                        this.f33612x = typeAlias.f33600x;
                        this.f33603o &= -257;
                    } else {
                        m();
                        this.f33612x.addAll(typeAlias.f33600x);
                    }
                }
                if (!typeAlias.f33601y.isEmpty()) {
                    if (this.f33613y.isEmpty()) {
                        this.f33613y = typeAlias.f33601y;
                        this.f33603o &= -513;
                    } else {
                        k();
                        this.f33613y.addAll(typeAlias.f33601y);
                    }
                }
                f(typeAlias);
                setUnknownFields(getUnknownFields().concat(typeAlias.f33590i));
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
            this.f33592p = 6;
            this.f33593q = 0;
            List list = Collections.EMPTY_LIST;
            this.f33594r = list;
            this.f33595s = Type.getDefaultInstance();
            this.f33596t = 0;
            this.f33597u = Type.getDefaultInstance();
            this.f33598v = 0;
            this.f33599w = list;
            this.f33600x = list;
            this.f33601y = list;
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
            return (Annotation) this.f33599w.get(i10);
        }

        public int getAnnotationCount() {
            return this.f33599w.size();
        }

        public List<Annotation> getAnnotationList() {
            return this.f33599w;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f33601y.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f33601y.size();
        }

        public Type getExpandedType() {
            return this.f33597u;
        }

        public int getExpandedTypeId() {
            return this.f33598v;
        }

        public int getFlags() {
            return this.f33592p;
        }

        public int getName() {
            return this.f33593q;
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
            if ((this.f33591o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33592p);
            } else {
                i10 = 0;
            }
            if ((this.f33591o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33593q);
            }
            for (int i12 = 0; i12 < this.f33594r.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f33594r.get(i12));
            }
            if ((this.f33591o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33595s);
            }
            if ((this.f33591o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33596t);
            }
            if ((this.f33591o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(6, this.f33597u);
            }
            if ((this.f33591o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33598v);
            }
            for (int i13 = 0; i13 < this.f33599w.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.f33599w.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f33600x.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33600x.get(i15)).intValue());
            }
            int size = i10 + i14 + (getVersionRequirementList().size() * 2);
            for (int i16 = 0; i16 < this.f33601y.size(); i16++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f33601y.get(i16));
            }
            int j10 = size + j() + this.f33590i.size();
            this.A = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33594r.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33594r.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33594r;
        }

        public Type getUnderlyingType() {
            return this.f33595s;
        }

        public int getUnderlyingTypeId() {
            return this.f33596t;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f33600x;
        }

        public boolean hasExpandedType() {
            if ((this.f33591o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasExpandedTypeId() {
            if ((this.f33591o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33591o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33591o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingType() {
            if ((this.f33591o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingTypeId() {
            if ((this.f33591o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33602z;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f33602z = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.f33602z = (byte) 0;
                    return false;
                }
            }
            if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                this.f33602z = (byte) 0;
                return false;
            } else if (hasExpandedType() && !getExpandedType().isInitialized()) {
                this.f33602z = (byte) 0;
                return false;
            } else {
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        this.f33602z = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.f33602z = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33602z = (byte) 0;
                    return false;
                }
                this.f33602z = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33591o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33592p);
            }
            if ((this.f33591o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33593q);
            }
            for (int i10 = 0; i10 < this.f33594r.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f33594r.get(i10));
            }
            if ((this.f33591o & 4) == 4) {
                codedOutputStream.writeMessage(4, this.f33595s);
            }
            if ((this.f33591o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f33596t);
            }
            if ((this.f33591o & 16) == 16) {
                codedOutputStream.writeMessage(6, this.f33597u);
            }
            if ((this.f33591o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f33598v);
            }
            for (int i11 = 0; i11 < this.f33599w.size(); i11++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.f33599w.get(i11));
            }
            for (int i12 = 0; i12 < this.f33600x.size(); i12++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f33600x.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.f33601y.size(); i13++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f33601y.get(i13));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33590i);
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
            this.f33602z = (byte) -1;
            this.A = -1;
            this.f33590i = extendableBuilder.getUnknownFields();
        }

        private TypeAlias(boolean z10) {
            this.f33602z = (byte) -1;
            this.A = -1;
            this.f33590i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private TypeAlias(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f33602z = (byte) -1;
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
                                    this.f33591o |= 1;
                                    this.f33592p = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f33591o |= 2;
                                    this.f33593q = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    if (!(z11 & true)) {
                                        this.f33594r = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33594r.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    builder = (this.f33591o & 4) == 4 ? this.f33595s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33595s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33595s = builder.buildPartial();
                                    }
                                    this.f33591o |= 4;
                                    continue;
                                case 40:
                                    this.f33591o |= 8;
                                    this.f33596t = codedInputStream.readInt32();
                                    continue;
                                case 50:
                                    builder = (this.f33591o & 16) == 16 ? this.f33597u.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33597u = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f33597u = builder.buildPartial();
                                    }
                                    this.f33591o |= 16;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33591o |= 32;
                                    this.f33598v = codedInputStream.readInt32();
                                    continue;
                                case 66:
                                    if (!(z11 & true)) {
                                        this.f33599w = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33599w.add(codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite));
                                    continue;
                                case 248:
                                    if (!(z11 & true)) {
                                        this.f33600x = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33600x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33600x = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33600x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    break;
                                case 258:
                                    if (!(z11 & true)) {
                                        this.f33601y = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33601y.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
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
                                this.f33594r = Collections.unmodifiableList(this.f33594r);
                            }
                            if ((z11 & true) == r52) {
                                this.f33599w = Collections.unmodifiableList(this.f33599w);
                            }
                            if (z11 & true) {
                                this.f33600x = Collections.unmodifiableList(this.f33600x);
                            }
                            if (z11 & true) {
                                this.f33601y = Collections.unmodifiableList(this.f33601y);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33590i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33590i = newOutput.toByteString();
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
                        this.f33594r = Collections.unmodifiableList(this.f33594r);
                    }
                    if (z11 & true) {
                        this.f33599w = Collections.unmodifiableList(this.f33599w);
                    }
                    if (z11 & true) {
                        this.f33600x = Collections.unmodifiableList(this.f33600x);
                    }
                    if (z11 & true) {
                        this.f33601y = Collections.unmodifiableList(this.f33601y);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f33590i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33590i = newOutput.toByteString();
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
        private static final TypeParameter f33614y;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33615i;

        /* renamed from: o  reason: collision with root package name */
        private int f33616o;

        /* renamed from: p  reason: collision with root package name */
        private int f33617p;

        /* renamed from: q  reason: collision with root package name */
        private int f33618q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f33619r;

        /* renamed from: s  reason: collision with root package name */
        private Variance f33620s;

        /* renamed from: t  reason: collision with root package name */
        private List f33621t;

        /* renamed from: u  reason: collision with root package name */
        private List f33622u;

        /* renamed from: v  reason: collision with root package name */
        private int f33623v;

        /* renamed from: w  reason: collision with root package name */
        private byte f33624w;

        /* renamed from: x  reason: collision with root package name */
        private int f33625x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeParameter, Builder> implements TypeParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33626o;

            /* renamed from: p  reason: collision with root package name */
            private int f33627p;

            /* renamed from: q  reason: collision with root package name */
            private int f33628q;

            /* renamed from: r  reason: collision with root package name */
            private boolean f33629r;

            /* renamed from: s  reason: collision with root package name */
            private Variance f33630s = Variance.INV;

            /* renamed from: t  reason: collision with root package name */
            private List f33631t;

            /* renamed from: u  reason: collision with root package name */
            private List f33632u;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33631t = list;
                this.f33632u = list;
                l();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33626o & 32) != 32) {
                    this.f33632u = new ArrayList(this.f33632u);
                    this.f33626o |= 32;
                }
            }

            private void k() {
                if ((this.f33626o & 16) != 16) {
                    this.f33631t = new ArrayList(this.f33631t);
                    this.f33626o |= 16;
                }
            }

            private void l() {
            }

            public TypeParameter buildPartial() {
                TypeParameter typeParameter = new TypeParameter(this);
                int i10 = this.f33626o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeParameter.f33617p = this.f33627p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeParameter.f33618q = this.f33628q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                typeParameter.f33619r = this.f33629r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                typeParameter.f33620s = this.f33630s;
                if ((this.f33626o & 16) == 16) {
                    this.f33631t = Collections.unmodifiableList(this.f33631t);
                    this.f33626o &= -17;
                }
                typeParameter.f33621t = this.f33631t;
                if ((this.f33626o & 32) == 32) {
                    this.f33632u = Collections.unmodifiableList(this.f33632u);
                    this.f33626o &= -33;
                }
                typeParameter.f33622u = this.f33632u;
                typeParameter.f33616o = i11;
                return typeParameter;
            }

            public Type getUpperBound(int i10) {
                return (Type) this.f33631t.get(i10);
            }

            public int getUpperBoundCount() {
                return this.f33631t.size();
            }

            public boolean hasId() {
                if ((this.f33626o & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33626o & 2) == 2) {
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
                this.f33626o |= 1;
                this.f33627p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33626o |= 2;
                this.f33628q = i10;
                return this;
            }

            public Builder setReified(boolean z10) {
                this.f33626o |= 4;
                this.f33629r = z10;
                return this;
            }

            public Builder setVariance(Variance variance) {
                variance.getClass();
                this.f33626o |= 8;
                this.f33630s = variance;
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
                if (!typeParameter.f33621t.isEmpty()) {
                    if (this.f33631t.isEmpty()) {
                        this.f33631t = typeParameter.f33621t;
                        this.f33626o &= -17;
                    } else {
                        k();
                        this.f33631t.addAll(typeParameter.f33621t);
                    }
                }
                if (!typeParameter.f33622u.isEmpty()) {
                    if (this.f33632u.isEmpty()) {
                        this.f33632u = typeParameter.f33622u;
                        this.f33626o &= -33;
                    } else {
                        j();
                        this.f33632u.addAll(typeParameter.f33622u);
                    }
                }
                f(typeParameter);
                setUnknownFields(getUnknownFields().concat(typeParameter.f33615i));
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
            private static Internal.EnumLiteMap f33633e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33635d;

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
                this.f33635d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33635d;
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
            f33614y = typeParameter;
            typeParameter.w();
        }

        public static TypeParameter getDefaultInstance() {
            return f33614y;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void w() {
            this.f33617p = 0;
            this.f33618q = 0;
            this.f33619r = false;
            this.f33620s = Variance.INV;
            List list = Collections.EMPTY_LIST;
            this.f33621t = list;
            this.f33622u = list;
        }

        public int getId() {
            return this.f33617p;
        }

        public int getName() {
            return this.f33618q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeParameter> getParserForType() {
            return PARSER;
        }

        public boolean getReified() {
            return this.f33619r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33625x;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33616o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33617p);
            } else {
                i10 = 0;
            }
            if ((this.f33616o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33618q);
            }
            if ((this.f33616o & 4) == 4) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f33619r);
            }
            if ((this.f33616o & 8) == 8) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f33620s.getNumber());
            }
            for (int i12 = 0; i12 < this.f33621t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33621t.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33622u.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33622u.get(i14)).intValue());
            }
            int i15 = i10 + i13;
            if (!getUpperBoundIdList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f33623v = i13;
            int j10 = i15 + j() + this.f33615i.size();
            this.f33625x = j10;
            return j10;
        }

        public Type getUpperBound(int i10) {
            return (Type) this.f33621t.get(i10);
        }

        public int getUpperBoundCount() {
            return this.f33621t.size();
        }

        public List<Integer> getUpperBoundIdList() {
            return this.f33622u;
        }

        public List<Type> getUpperBoundList() {
            return this.f33621t;
        }

        public Variance getVariance() {
            return this.f33620s;
        }

        public boolean hasId() {
            if ((this.f33616o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33616o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReified() {
            if ((this.f33616o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasVariance() {
            if ((this.f33616o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33624w;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f33624w = (byte) 0;
                return false;
            } else if (!hasName()) {
                this.f33624w = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        this.f33624w = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33624w = (byte) 0;
                    return false;
                }
                this.f33624w = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33616o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33617p);
            }
            if ((this.f33616o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33618q);
            }
            if ((this.f33616o & 4) == 4) {
                codedOutputStream.writeBool(3, this.f33619r);
            }
            if ((this.f33616o & 8) == 8) {
                codedOutputStream.writeEnum(4, this.f33620s.getNumber());
            }
            for (int i10 = 0; i10 < this.f33621t.size(); i10++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33621t.get(i10));
            }
            if (getUpperBoundIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(50);
                codedOutputStream.writeRawVarint32(this.f33623v);
            }
            for (int i11 = 0; i11 < this.f33622u.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33622u.get(i11)).intValue());
            }
            k10.writeUntil(1000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33615i);
        }

        public static Builder newBuilder(TypeParameter typeParameter) {
            return newBuilder().mergeFrom(typeParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeParameter getDefaultInstanceForType() {
            return f33614y;
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
            this.f33623v = -1;
            this.f33624w = (byte) -1;
            this.f33625x = -1;
            this.f33615i = extendableBuilder.getUnknownFields();
        }

        private TypeParameter(boolean z10) {
            this.f33623v = -1;
            this.f33624w = (byte) -1;
            this.f33625x = -1;
            this.f33615i = ByteString.EMPTY;
        }

        private TypeParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33623v = -1;
            this.f33624w = (byte) -1;
            this.f33625x = -1;
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
                                this.f33616o |= 1;
                                this.f33617p = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33616o |= 2;
                                this.f33618q = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                this.f33616o |= 4;
                                this.f33619r = codedInputStream.readBool();
                            } else if (readTag == 32) {
                                int readEnum = codedInputStream.readEnum();
                                Variance valueOf = Variance.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33616o |= 8;
                                    this.f33620s = valueOf;
                                }
                            } else if (readTag == 42) {
                                if (!(z11 & true)) {
                                    this.f33621t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33621t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag == 48) {
                                if (!(z11 & true)) {
                                    this.f33622u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33622u.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 50) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33622u = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33622u.add(Integer.valueOf(codedInputStream.readInt32()));
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
                        this.f33621t = Collections.unmodifiableList(this.f33621t);
                    }
                    if (z11 & true) {
                        this.f33622u = Collections.unmodifiableList(this.f33622u);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33615i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33615i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f33621t = Collections.unmodifiableList(this.f33621t);
            }
            if (z11 & true) {
                this.f33622u = Collections.unmodifiableList(this.f33622u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33615i = newOutput.toByteString();
                throw th4;
            }
            this.f33615i = newOutput.toByteString();
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
        private static final TypeTable f33636s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33637e;

        /* renamed from: i  reason: collision with root package name */
        private int f33638i;

        /* renamed from: o  reason: collision with root package name */
        private List f33639o;

        /* renamed from: p  reason: collision with root package name */
        private int f33640p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33641q;

        /* renamed from: r  reason: collision with root package name */
        private int f33642r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<TypeTable, Builder> implements TypeTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33643e;

            /* renamed from: i  reason: collision with root package name */
            private List f33644i = Collections.EMPTY_LIST;

            /* renamed from: o  reason: collision with root package name */
            private int f33645o = -1;

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
                if ((this.f33643e & 1) != 1) {
                    this.f33644i = new ArrayList(this.f33644i);
                    this.f33643e |= 1;
                }
            }

            private void e() {
            }

            public TypeTable buildPartial() {
                TypeTable typeTable = new TypeTable(this);
                int i10 = this.f33643e;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33644i = Collections.unmodifiableList(this.f33644i);
                    this.f33643e &= -2;
                }
                typeTable.f33639o = this.f33644i;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                typeTable.f33640p = this.f33645o;
                typeTable.f33638i = i11;
                return typeTable;
            }

            public Type getType(int i10) {
                return (Type) this.f33644i.get(i10);
            }

            public int getTypeCount() {
                return this.f33644i.size();
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
                this.f33643e |= 2;
                this.f33645o = i10;
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
                if (!typeTable.f33639o.isEmpty()) {
                    if (this.f33644i.isEmpty()) {
                        this.f33644i = typeTable.f33639o;
                        this.f33643e &= -2;
                    } else {
                        d();
                        this.f33644i.addAll(typeTable.f33639o);
                    }
                }
                if (typeTable.hasFirstNullable()) {
                    setFirstNullable(typeTable.getFirstNullable());
                }
                setUnknownFields(getUnknownFields().concat(typeTable.f33637e));
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
            f33636s = typeTable;
            typeTable.m();
        }

        public static TypeTable getDefaultInstance() {
            return f33636s;
        }

        private void m() {
            this.f33639o = Collections.EMPTY_LIST;
            this.f33640p = -1;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getFirstNullable() {
            return this.f33640p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33642r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33639o.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33639o.get(i12));
            }
            if ((this.f33638i & 1) == 1) {
                i11 += CodedOutputStream.computeInt32Size(2, this.f33640p);
            }
            int size = i11 + this.f33637e.size();
            this.f33642r = size;
            return size;
        }

        public Type getType(int i10) {
            return (Type) this.f33639o.get(i10);
        }

        public int getTypeCount() {
            return this.f33639o.size();
        }

        public List<Type> getTypeList() {
            return this.f33639o;
        }

        public boolean hasFirstNullable() {
            if ((this.f33638i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33641q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getTypeCount(); i10++) {
                if (!getType(i10).isInitialized()) {
                    this.f33641q = (byte) 0;
                    return false;
                }
            }
            this.f33641q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33639o.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33639o.get(i10));
            }
            if ((this.f33638i & 1) == 1) {
                codedOutputStream.writeInt32(2, this.f33640p);
            }
            codedOutputStream.writeRawBytes(this.f33637e);
        }

        public static Builder newBuilder(TypeTable typeTable) {
            return newBuilder().mergeFrom(typeTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeTable getDefaultInstanceForType() {
            return f33636s;
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
            this.f33641q = (byte) -1;
            this.f33642r = -1;
            this.f33637e = builder.getUnknownFields();
        }

        private TypeTable(boolean z10) {
            this.f33641q = (byte) -1;
            this.f33642r = -1;
            this.f33637e = ByteString.EMPTY;
        }

        private TypeTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33641q = (byte) -1;
            this.f33642r = -1;
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
                                    this.f33639o = new ArrayList();
                                    z11 = true;
                                }
                                this.f33639o.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33638i |= 1;
                                this.f33640p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11) {
                            this.f33639o = Collections.unmodifiableList(this.f33639o);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33637e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33637e = newOutput.toByteString();
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
                this.f33639o = Collections.unmodifiableList(this.f33639o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33637e = newOutput.toByteString();
                throw th4;
            }
            this.f33637e = newOutput.toByteString();
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
        private static final ValueParameter f33646x;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33647i;

        /* renamed from: o  reason: collision with root package name */
        private int f33648o;

        /* renamed from: p  reason: collision with root package name */
        private int f33649p;

        /* renamed from: q  reason: collision with root package name */
        private int f33650q;

        /* renamed from: r  reason: collision with root package name */
        private Type f33651r;

        /* renamed from: s  reason: collision with root package name */
        private int f33652s;

        /* renamed from: t  reason: collision with root package name */
        private Type f33653t;

        /* renamed from: u  reason: collision with root package name */
        private int f33654u;

        /* renamed from: v  reason: collision with root package name */
        private byte f33655v;

        /* renamed from: w  reason: collision with root package name */
        private int f33656w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<ValueParameter, Builder> implements ValueParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33657o;

            /* renamed from: p  reason: collision with root package name */
            private int f33658p;

            /* renamed from: q  reason: collision with root package name */
            private int f33659q;

            /* renamed from: s  reason: collision with root package name */
            private int f33661s;

            /* renamed from: u  reason: collision with root package name */
            private int f33663u;

            /* renamed from: r  reason: collision with root package name */
            private Type f33660r = Type.getDefaultInstance();

            /* renamed from: t  reason: collision with root package name */
            private Type f33662t = Type.getDefaultInstance();

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
                int i10 = this.f33657o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                valueParameter.f33649p = this.f33658p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                valueParameter.f33650q = this.f33659q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                valueParameter.f33651r = this.f33660r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                valueParameter.f33652s = this.f33661s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                valueParameter.f33653t = this.f33662t;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                valueParameter.f33654u = this.f33663u;
                valueParameter.f33648o = i11;
                return valueParameter;
            }

            public Type getType() {
                return this.f33660r;
            }

            public Type getVarargElementType() {
                return this.f33662t;
            }

            public boolean hasName() {
                if ((this.f33657o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f33657o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasVarargElementType() {
                if ((this.f33657o & 16) == 16) {
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
                if ((this.f33657o & 4) == 4 && this.f33660r != Type.getDefaultInstance()) {
                    this.f33660r = Type.newBuilder(this.f33660r).mergeFrom(type).buildPartial();
                } else {
                    this.f33660r = type;
                }
                this.f33657o |= 4;
                return this;
            }

            public Builder mergeVarargElementType(Type type) {
                if ((this.f33657o & 16) == 16 && this.f33662t != Type.getDefaultInstance()) {
                    this.f33662t = Type.newBuilder(this.f33662t).mergeFrom(type).buildPartial();
                } else {
                    this.f33662t = type;
                }
                this.f33657o |= 16;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33657o |= 1;
                this.f33658p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33657o |= 2;
                this.f33659q = i10;
                return this;
            }

            public Builder setTypeId(int i10) {
                this.f33657o |= 8;
                this.f33661s = i10;
                return this;
            }

            public Builder setVarargElementTypeId(int i10) {
                this.f33657o |= 32;
                this.f33663u = i10;
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
                setUnknownFields(getUnknownFields().concat(valueParameter.f33647i));
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
            f33646x = valueParameter;
            valueParameter.u();
        }

        public static ValueParameter getDefaultInstance() {
            return f33646x;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void u() {
            this.f33649p = 0;
            this.f33650q = 0;
            this.f33651r = Type.getDefaultInstance();
            this.f33652s = 0;
            this.f33653t = Type.getDefaultInstance();
            this.f33654u = 0;
        }

        public int getFlags() {
            return this.f33649p;
        }

        public int getName() {
            return this.f33650q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<ValueParameter> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33656w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33648o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33649p);
            } else {
                i10 = 0;
            }
            if ((this.f33648o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33650q);
            }
            if ((this.f33648o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33651r);
            }
            if ((this.f33648o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33653t);
            }
            if ((this.f33648o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33652s);
            }
            if ((this.f33648o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f33654u);
            }
            int j10 = i10 + j() + this.f33647i.size();
            this.f33656w = j10;
            return j10;
        }

        public Type getType() {
            return this.f33651r;
        }

        public int getTypeId() {
            return this.f33652s;
        }

        public Type getVarargElementType() {
            return this.f33653t;
        }

        public int getVarargElementTypeId() {
            return this.f33654u;
        }

        public boolean hasFlags() {
            if ((this.f33648o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33648o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasType() {
            if ((this.f33648o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasTypeId() {
            if ((this.f33648o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementType() {
            if ((this.f33648o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementTypeId() {
            if ((this.f33648o & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33655v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f33655v = (byte) 0;
                return false;
            } else if (hasType() && !getType().isInitialized()) {
                this.f33655v = (byte) 0;
                return false;
            } else if (hasVarargElementType() && !getVarargElementType().isInitialized()) {
                this.f33655v = (byte) 0;
                return false;
            } else if (!i()) {
                this.f33655v = (byte) 0;
                return false;
            } else {
                this.f33655v = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33648o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33649p);
            }
            if ((this.f33648o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33650q);
            }
            if ((this.f33648o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33651r);
            }
            if ((this.f33648o & 16) == 16) {
                codedOutputStream.writeMessage(4, this.f33653t);
            }
            if ((this.f33648o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f33652s);
            }
            if ((this.f33648o & 32) == 32) {
                codedOutputStream.writeInt32(6, this.f33654u);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33647i);
        }

        public static Builder newBuilder(ValueParameter valueParameter) {
            return newBuilder().mergeFrom(valueParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public ValueParameter getDefaultInstanceForType() {
            return f33646x;
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
            this.f33655v = (byte) -1;
            this.f33656w = -1;
            this.f33647i = extendableBuilder.getUnknownFields();
        }

        private ValueParameter(boolean z10) {
            this.f33655v = (byte) -1;
            this.f33656w = -1;
            this.f33647i = ByteString.EMPTY;
        }

        private ValueParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f33655v = (byte) -1;
            this.f33656w = -1;
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
                                this.f33648o |= 1;
                                this.f33649p = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (readTag == 26) {
                                    builder = (this.f33648o & 4) == 4 ? this.f33651r.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33651r = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33651r = builder.buildPartial();
                                    }
                                    this.f33648o |= 4;
                                } else if (readTag == 34) {
                                    builder = (this.f33648o & 16) == 16 ? this.f33653t.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33653t = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f33653t = builder.buildPartial();
                                    }
                                    this.f33648o |= 16;
                                } else if (readTag == 40) {
                                    this.f33648o |= 8;
                                    this.f33652s = codedInputStream.readInt32();
                                } else if (readTag != 48) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f33648o |= 32;
                                    this.f33654u = codedInputStream.readInt32();
                                }
                            } else {
                                this.f33648o |= 2;
                                this.f33650q = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33647i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33647i = newOutput.toByteString();
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
                this.f33647i = newOutput.toByteString();
                throw th4;
            }
            this.f33647i = newOutput.toByteString();
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
        private static final VersionRequirement f33664w;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33665e;

        /* renamed from: i  reason: collision with root package name */
        private int f33666i;

        /* renamed from: o  reason: collision with root package name */
        private int f33667o;

        /* renamed from: p  reason: collision with root package name */
        private int f33668p;

        /* renamed from: q  reason: collision with root package name */
        private Level f33669q;

        /* renamed from: r  reason: collision with root package name */
        private int f33670r;

        /* renamed from: s  reason: collision with root package name */
        private int f33671s;

        /* renamed from: t  reason: collision with root package name */
        private VersionKind f33672t;

        /* renamed from: u  reason: collision with root package name */
        private byte f33673u;

        /* renamed from: v  reason: collision with root package name */
        private int f33674v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirement, Builder> implements VersionRequirementOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33675e;

            /* renamed from: i  reason: collision with root package name */
            private int f33676i;

            /* renamed from: o  reason: collision with root package name */
            private int f33677o;

            /* renamed from: q  reason: collision with root package name */
            private int f33679q;

            /* renamed from: r  reason: collision with root package name */
            private int f33680r;

            /* renamed from: p  reason: collision with root package name */
            private Level f33678p = Level.ERROR;

            /* renamed from: s  reason: collision with root package name */
            private VersionKind f33681s = VersionKind.LANGUAGE_VERSION;

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
                int i10 = this.f33675e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                versionRequirement.f33667o = this.f33676i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                versionRequirement.f33668p = this.f33677o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                versionRequirement.f33669q = this.f33678p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                versionRequirement.f33670r = this.f33679q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                versionRequirement.f33671s = this.f33680r;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                versionRequirement.f33672t = this.f33681s;
                versionRequirement.f33666i = i11;
                return versionRequirement;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setErrorCode(int i10) {
                this.f33675e |= 8;
                this.f33679q = i10;
                return this;
            }

            public Builder setLevel(Level level) {
                level.getClass();
                this.f33675e |= 4;
                this.f33678p = level;
                return this;
            }

            public Builder setMessage(int i10) {
                this.f33675e |= 16;
                this.f33680r = i10;
                return this;
            }

            public Builder setVersion(int i10) {
                this.f33675e |= 1;
                this.f33676i = i10;
                return this;
            }

            public Builder setVersionFull(int i10) {
                this.f33675e |= 2;
                this.f33677o = i10;
                return this;
            }

            public Builder setVersionKind(VersionKind versionKind) {
                versionKind.getClass();
                this.f33675e |= 32;
                this.f33681s = versionKind;
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
                setUnknownFields(getUnknownFields().concat(versionRequirement.f33665e));
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
            private static Internal.EnumLiteMap f33682e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33684d;

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
                this.f33684d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33684d;
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
            private static Internal.EnumLiteMap f33685e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33687d;

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
                this.f33687d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33687d;
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
            f33664w = versionRequirement;
            versionRequirement.p();
        }

        public static VersionRequirement getDefaultInstance() {
            return f33664w;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void p() {
            this.f33667o = 0;
            this.f33668p = 0;
            this.f33669q = Level.ERROR;
            this.f33670r = 0;
            this.f33671s = 0;
            this.f33672t = VersionKind.LANGUAGE_VERSION;
        }

        public int getErrorCode() {
            return this.f33670r;
        }

        public Level getLevel() {
            return this.f33669q;
        }

        public int getMessage() {
            return this.f33671s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirement> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33674v;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33666i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33667o);
            } else {
                i10 = 0;
            }
            if ((this.f33666i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33668p);
            }
            if ((this.f33666i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f33669q.getNumber());
            }
            if ((this.f33666i & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f33670r);
            }
            if ((this.f33666i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33671s);
            }
            if ((this.f33666i & 32) == 32) {
                i10 += CodedOutputStream.computeEnumSize(6, this.f33672t.getNumber());
            }
            int size = i10 + this.f33665e.size();
            this.f33674v = size;
            return size;
        }

        public int getVersion() {
            return this.f33667o;
        }

        public int getVersionFull() {
            return this.f33668p;
        }

        public VersionKind getVersionKind() {
            return this.f33672t;
        }

        public boolean hasErrorCode() {
            if ((this.f33666i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasLevel() {
            if ((this.f33666i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasMessage() {
            if ((this.f33666i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVersion() {
            if ((this.f33666i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionFull() {
            if ((this.f33666i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasVersionKind() {
            if ((this.f33666i & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33673u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33673u = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33666i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33667o);
            }
            if ((this.f33666i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33668p);
            }
            if ((this.f33666i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f33669q.getNumber());
            }
            if ((this.f33666i & 8) == 8) {
                codedOutputStream.writeInt32(4, this.f33670r);
            }
            if ((this.f33666i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f33671s);
            }
            if ((this.f33666i & 32) == 32) {
                codedOutputStream.writeEnum(6, this.f33672t.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f33665e);
        }

        public static Builder newBuilder(VersionRequirement versionRequirement) {
            return newBuilder().mergeFrom(versionRequirement);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirement getDefaultInstanceForType() {
            return f33664w;
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
            this.f33673u = (byte) -1;
            this.f33674v = -1;
            this.f33665e = builder.getUnknownFields();
        }

        private VersionRequirement(boolean z10) {
            this.f33673u = (byte) -1;
            this.f33674v = -1;
            this.f33665e = ByteString.EMPTY;
        }

        private VersionRequirement(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33673u = (byte) -1;
            this.f33674v = -1;
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
                                this.f33666i |= 1;
                                this.f33667o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33666i |= 2;
                                this.f33668p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                Level valueOf = Level.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33666i |= 4;
                                    this.f33669q = valueOf;
                                }
                            } else if (readTag == 32) {
                                this.f33666i |= 8;
                                this.f33670r = codedInputStream.readInt32();
                            } else if (readTag == 40) {
                                this.f33666i |= 16;
                                this.f33671s = codedInputStream.readInt32();
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
                                    this.f33666i |= 32;
                                    this.f33672t = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33665e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33665e = newOutput.toByteString();
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
                this.f33665e = newOutput.toByteString();
                throw th4;
            }
            this.f33665e = newOutput.toByteString();
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
        private static final VersionRequirementTable f33688q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33689e;

        /* renamed from: i  reason: collision with root package name */
        private List f33690i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33691o;

        /* renamed from: p  reason: collision with root package name */
        private int f33692p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirementTable, Builder> implements VersionRequirementTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33693e;

            /* renamed from: i  reason: collision with root package name */
            private List f33694i = Collections.EMPTY_LIST;

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
                if ((this.f33693e & 1) != 1) {
                    this.f33694i = new ArrayList(this.f33694i);
                    this.f33693e |= 1;
                }
            }

            private void e() {
            }

            public VersionRequirementTable buildPartial() {
                VersionRequirementTable versionRequirementTable = new VersionRequirementTable(this);
                if ((this.f33693e & 1) == 1) {
                    this.f33694i = Collections.unmodifiableList(this.f33694i);
                    this.f33693e &= -2;
                }
                versionRequirementTable.f33690i = this.f33694i;
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
                if (!versionRequirementTable.f33690i.isEmpty()) {
                    if (this.f33694i.isEmpty()) {
                        this.f33694i = versionRequirementTable.f33690i;
                        this.f33693e &= -2;
                    } else {
                        d();
                        this.f33694i.addAll(versionRequirementTable.f33690i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(versionRequirementTable.f33689e));
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
            f33688q = versionRequirementTable;
            versionRequirementTable.k();
        }

        public static VersionRequirementTable getDefaultInstance() {
            return f33688q;
        }

        private void k() {
            this.f33690i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirementTable> getParserForType() {
            return PARSER;
        }

        public int getRequirementCount() {
            return this.f33690i.size();
        }

        public List<VersionRequirement> getRequirementList() {
            return this.f33690i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33692p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33690i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33690i.get(i12));
            }
            int size = i11 + this.f33689e.size();
            this.f33692p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33691o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33691o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33690i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33690i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33689e);
        }

        public static Builder newBuilder(VersionRequirementTable versionRequirementTable) {
            return newBuilder().mergeFrom(versionRequirementTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirementTable getDefaultInstanceForType() {
            return f33688q;
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
            this.f33691o = (byte) -1;
            this.f33692p = -1;
            this.f33689e = builder.getUnknownFields();
        }

        private VersionRequirementTable(boolean z10) {
            this.f33691o = (byte) -1;
            this.f33692p = -1;
            this.f33689e = ByteString.EMPTY;
        }

        private VersionRequirementTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33691o = (byte) -1;
            this.f33692p = -1;
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
                                        this.f33690i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33690i.add(codedInputStream.readMessage(VersionRequirement.PARSER, extensionRegistryLite));
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
                        this.f33690i = Collections.unmodifiableList(this.f33690i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33689e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33689e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33690i = Collections.unmodifiableList(this.f33690i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33689e = newOutput.toByteString();
                throw th4;
            }
            this.f33689e = newOutput.toByteString();
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
        private static Internal.EnumLiteMap f33695e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33697d;

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
            this.f33697d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33697d;
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
