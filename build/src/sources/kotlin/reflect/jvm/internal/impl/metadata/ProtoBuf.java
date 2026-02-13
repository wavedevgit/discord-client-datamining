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
        private static final Annotation f33844s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33845e;

        /* renamed from: i  reason: collision with root package name */
        private int f33846i;

        /* renamed from: o  reason: collision with root package name */
        private int f33847o;

        /* renamed from: p  reason: collision with root package name */
        private List f33848p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33849q;

        /* renamed from: r  reason: collision with root package name */
        private int f33850r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: s  reason: collision with root package name */
            private static final Argument f33851s;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33852e;

            /* renamed from: i  reason: collision with root package name */
            private int f33853i;

            /* renamed from: o  reason: collision with root package name */
            private int f33854o;

            /* renamed from: p  reason: collision with root package name */
            private Value f33855p;

            /* renamed from: q  reason: collision with root package name */
            private byte f33856q;

            /* renamed from: r  reason: collision with root package name */
            private int f33857r;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33858e;

                /* renamed from: i  reason: collision with root package name */
                private int f33859i;

                /* renamed from: o  reason: collision with root package name */
                private Value f33860o = Value.getDefaultInstance();

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
                    int i10 = this.f33858e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f33854o = this.f33859i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f33855p = this.f33860o;
                    argument.f33853i = i11;
                    return argument;
                }

                public Value getValue() {
                    return this.f33860o;
                }

                public boolean hasNameId() {
                    if ((this.f33858e & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                public boolean hasValue() {
                    if ((this.f33858e & 2) == 2) {
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
                    if ((this.f33858e & 2) == 2 && this.f33860o != Value.getDefaultInstance()) {
                        this.f33860o = Value.newBuilder(this.f33860o).mergeFrom(value).buildPartial();
                    } else {
                        this.f33860o = value;
                    }
                    this.f33858e |= 2;
                    return this;
                }

                public Builder setNameId(int i10) {
                    this.f33858e |= 1;
                    this.f33859i = i10;
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
                    setUnknownFields(getUnknownFields().concat(argument.f33852e));
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
                private final ByteString f33861e;

                /* renamed from: i  reason: collision with root package name */
                private int f33862i;

                /* renamed from: o  reason: collision with root package name */
                private Type f33863o;

                /* renamed from: p  reason: collision with root package name */
                private long f33864p;

                /* renamed from: q  reason: collision with root package name */
                private float f33865q;

                /* renamed from: r  reason: collision with root package name */
                private double f33866r;

                /* renamed from: s  reason: collision with root package name */
                private int f33867s;

                /* renamed from: t  reason: collision with root package name */
                private int f33868t;

                /* renamed from: u  reason: collision with root package name */
                private int f33869u;

                /* renamed from: v  reason: collision with root package name */
                private Annotation f33870v;

                /* renamed from: w  reason: collision with root package name */
                private List f33871w;

                /* renamed from: x  reason: collision with root package name */
                private int f33872x;

                /* renamed from: y  reason: collision with root package name */
                private int f33873y;

                /* renamed from: z  reason: collision with root package name */
                private byte f33874z;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class Builder extends GeneratedMessageLite.Builder<Value, Builder> implements ValueOrBuilder {

                    /* renamed from: e  reason: collision with root package name */
                    private int f33875e;

                    /* renamed from: o  reason: collision with root package name */
                    private long f33877o;

                    /* renamed from: p  reason: collision with root package name */
                    private float f33878p;

                    /* renamed from: q  reason: collision with root package name */
                    private double f33879q;

                    /* renamed from: r  reason: collision with root package name */
                    private int f33880r;

                    /* renamed from: s  reason: collision with root package name */
                    private int f33881s;

                    /* renamed from: t  reason: collision with root package name */
                    private int f33882t;

                    /* renamed from: w  reason: collision with root package name */
                    private int f33885w;

                    /* renamed from: x  reason: collision with root package name */
                    private int f33886x;

                    /* renamed from: i  reason: collision with root package name */
                    private Type f33876i = Type.BYTE;

                    /* renamed from: u  reason: collision with root package name */
                    private Annotation f33883u = Annotation.getDefaultInstance();

                    /* renamed from: v  reason: collision with root package name */
                    private List f33884v = Collections.EMPTY_LIST;

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
                        if ((this.f33875e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                            this.f33884v = new ArrayList(this.f33884v);
                            this.f33875e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                    }

                    private void e() {
                    }

                    public Value buildPartial() {
                        Value value = new Value(this);
                        int i10 = this.f33875e;
                        int i11 = 1;
                        if ((i10 & 1) != 1) {
                            i11 = 0;
                        }
                        value.f33863o = this.f33876i;
                        if ((i10 & 2) == 2) {
                            i11 |= 2;
                        }
                        value.f33864p = this.f33877o;
                        if ((i10 & 4) == 4) {
                            i11 |= 4;
                        }
                        value.f33865q = this.f33878p;
                        if ((i10 & 8) == 8) {
                            i11 |= 8;
                        }
                        value.f33866r = this.f33879q;
                        if ((i10 & 16) == 16) {
                            i11 |= 16;
                        }
                        value.f33867s = this.f33880r;
                        if ((i10 & 32) == 32) {
                            i11 |= 32;
                        }
                        value.f33868t = this.f33881s;
                        if ((i10 & 64) == 64) {
                            i11 |= 64;
                        }
                        value.f33869u = this.f33882t;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        }
                        value.f33870v = this.f33883u;
                        if ((this.f33875e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                            this.f33884v = Collections.unmodifiableList(this.f33884v);
                            this.f33875e &= -257;
                        }
                        value.f33871w = this.f33884v;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                        value.f33872x = this.f33885w;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        }
                        value.f33873y = this.f33886x;
                        value.f33862i = i11;
                        return value;
                    }

                    public Annotation getAnnotation() {
                        return this.f33883u;
                    }

                    public Value getArrayElement(int i10) {
                        return (Value) this.f33884v.get(i10);
                    }

                    public int getArrayElementCount() {
                        return this.f33884v.size();
                    }

                    public boolean hasAnnotation() {
                        if ((this.f33875e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
                        if ((this.f33875e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 && this.f33883u != Annotation.getDefaultInstance()) {
                            this.f33883u = Annotation.newBuilder(this.f33883u).mergeFrom(annotation).buildPartial();
                        } else {
                            this.f33883u = annotation;
                        }
                        this.f33875e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        return this;
                    }

                    public Builder setArrayDimensionCount(int i10) {
                        this.f33875e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        this.f33885w = i10;
                        return this;
                    }

                    public Builder setClassId(int i10) {
                        this.f33875e |= 32;
                        this.f33881s = i10;
                        return this;
                    }

                    public Builder setDoubleValue(double d10) {
                        this.f33875e |= 8;
                        this.f33879q = d10;
                        return this;
                    }

                    public Builder setEnumValueId(int i10) {
                        this.f33875e |= 64;
                        this.f33882t = i10;
                        return this;
                    }

                    public Builder setFlags(int i10) {
                        this.f33875e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        this.f33886x = i10;
                        return this;
                    }

                    public Builder setFloatValue(float f10) {
                        this.f33875e |= 4;
                        this.f33878p = f10;
                        return this;
                    }

                    public Builder setIntValue(long j10) {
                        this.f33875e |= 2;
                        this.f33877o = j10;
                        return this;
                    }

                    public Builder setStringValue(int i10) {
                        this.f33875e |= 16;
                        this.f33880r = i10;
                        return this;
                    }

                    public Builder setType(Type type) {
                        type.getClass();
                        this.f33875e |= 1;
                        this.f33876i = type;
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
                        if (!value.f33871w.isEmpty()) {
                            if (this.f33884v.isEmpty()) {
                                this.f33884v = value.f33871w;
                                this.f33875e &= -257;
                            } else {
                                d();
                                this.f33884v.addAll(value.f33871w);
                            }
                        }
                        if (value.hasArrayDimensionCount()) {
                            setArrayDimensionCount(value.getArrayDimensionCount());
                        }
                        if (value.hasFlags()) {
                            setFlags(value.getFlags());
                        }
                        setUnknownFields(getUnknownFields().concat(value.f33861e));
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
                    private static Internal.EnumLiteMap f33887e = new a();

                    /* renamed from: d  reason: collision with root package name */
                    private final int f33889d;

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
                        this.f33889d = i11;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                    public final int getNumber() {
                        return this.f33889d;
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
                    this.f33863o = Type.BYTE;
                    this.f33864p = 0L;
                    this.f33865q = 0.0f;
                    this.f33866r = 0.0d;
                    this.f33867s = 0;
                    this.f33868t = 0;
                    this.f33869u = 0;
                    this.f33870v = Annotation.getDefaultInstance();
                    this.f33871w = Collections.EMPTY_LIST;
                    this.f33872x = 0;
                    this.f33873y = 0;
                }

                public Annotation getAnnotation() {
                    return this.f33870v;
                }

                public int getArrayDimensionCount() {
                    return this.f33872x;
                }

                public Value getArrayElement(int i10) {
                    return (Value) this.f33871w.get(i10);
                }

                public int getArrayElementCount() {
                    return this.f33871w.size();
                }

                public List<Value> getArrayElementList() {
                    return this.f33871w;
                }

                public int getClassId() {
                    return this.f33868t;
                }

                public double getDoubleValue() {
                    return this.f33866r;
                }

                public int getEnumValueId() {
                    return this.f33869u;
                }

                public int getFlags() {
                    return this.f33873y;
                }

                public float getFloatValue() {
                    return this.f33865q;
                }

                public long getIntValue() {
                    return this.f33864p;
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
                    if ((this.f33862i & 1) == 1) {
                        i10 = CodedOutputStream.computeEnumSize(1, this.f33863o.getNumber());
                    } else {
                        i10 = 0;
                    }
                    if ((this.f33862i & 2) == 2) {
                        i10 += CodedOutputStream.computeSInt64Size(2, this.f33864p);
                    }
                    if ((this.f33862i & 4) == 4) {
                        i10 += CodedOutputStream.computeFloatSize(3, this.f33865q);
                    }
                    if ((this.f33862i & 8) == 8) {
                        i10 += CodedOutputStream.computeDoubleSize(4, this.f33866r);
                    }
                    if ((this.f33862i & 16) == 16) {
                        i10 += CodedOutputStream.computeInt32Size(5, this.f33867s);
                    }
                    if ((this.f33862i & 32) == 32) {
                        i10 += CodedOutputStream.computeInt32Size(6, this.f33868t);
                    }
                    if ((this.f33862i & 64) == 64) {
                        i10 += CodedOutputStream.computeInt32Size(7, this.f33869u);
                    }
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        i10 += CodedOutputStream.computeMessageSize(8, this.f33870v);
                    }
                    for (int i12 = 0; i12 < this.f33871w.size(); i12++) {
                        i10 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.f33871w.get(i12));
                    }
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        i10 += CodedOutputStream.computeInt32Size(10, this.f33873y);
                    }
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        i10 += CodedOutputStream.computeInt32Size(11, this.f33872x);
                    }
                    int size = i10 + this.f33861e.size();
                    this.A = size;
                    return size;
                }

                public int getStringValue() {
                    return this.f33867s;
                }

                public Type getType() {
                    return this.f33863o;
                }

                public boolean hasAnnotation() {
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        return true;
                    }
                    return false;
                }

                public boolean hasArrayDimensionCount() {
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        return true;
                    }
                    return false;
                }

                public boolean hasClassId() {
                    if ((this.f33862i & 32) == 32) {
                        return true;
                    }
                    return false;
                }

                public boolean hasDoubleValue() {
                    if ((this.f33862i & 8) == 8) {
                        return true;
                    }
                    return false;
                }

                public boolean hasEnumValueId() {
                    if ((this.f33862i & 64) == 64) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFlags() {
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFloatValue() {
                    if ((this.f33862i & 4) == 4) {
                        return true;
                    }
                    return false;
                }

                public boolean hasIntValue() {
                    if ((this.f33862i & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                public boolean hasStringValue() {
                    if ((this.f33862i & 16) == 16) {
                        return true;
                    }
                    return false;
                }

                public boolean hasType() {
                    if ((this.f33862i & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    byte b10 = this.f33874z;
                    if (b10 == 1) {
                        return true;
                    }
                    if (b10 == 0) {
                        return false;
                    }
                    if (hasAnnotation() && !getAnnotation().isInitialized()) {
                        this.f33874z = (byte) 0;
                        return false;
                    }
                    for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                        if (!getArrayElement(i10).isInitialized()) {
                            this.f33874z = (byte) 0;
                            return false;
                        }
                    }
                    this.f33874z = (byte) 1;
                    return true;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public void writeTo(CodedOutputStream codedOutputStream) {
                    getSerializedSize();
                    if ((this.f33862i & 1) == 1) {
                        codedOutputStream.writeEnum(1, this.f33863o.getNumber());
                    }
                    if ((this.f33862i & 2) == 2) {
                        codedOutputStream.writeSInt64(2, this.f33864p);
                    }
                    if ((this.f33862i & 4) == 4) {
                        codedOutputStream.writeFloat(3, this.f33865q);
                    }
                    if ((this.f33862i & 8) == 8) {
                        codedOutputStream.writeDouble(4, this.f33866r);
                    }
                    if ((this.f33862i & 16) == 16) {
                        codedOutputStream.writeInt32(5, this.f33867s);
                    }
                    if ((this.f33862i & 32) == 32) {
                        codedOutputStream.writeInt32(6, this.f33868t);
                    }
                    if ((this.f33862i & 64) == 64) {
                        codedOutputStream.writeInt32(7, this.f33869u);
                    }
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        codedOutputStream.writeMessage(8, this.f33870v);
                    }
                    for (int i10 = 0; i10 < this.f33871w.size(); i10++) {
                        codedOutputStream.writeMessage(9, (MessageLite) this.f33871w.get(i10));
                    }
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        codedOutputStream.writeInt32(10, this.f33873y);
                    }
                    if ((this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        codedOutputStream.writeInt32(11, this.f33872x);
                    }
                    codedOutputStream.writeRawBytes(this.f33861e);
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
                    this.f33874z = (byte) -1;
                    this.A = -1;
                    this.f33861e = builder.getUnknownFields();
                }

                private Value(boolean z10) {
                    this.f33874z = (byte) -1;
                    this.A = -1;
                    this.f33861e = ByteString.EMPTY;
                }

                /* JADX WARN: Multi-variable type inference failed */
                /* JADX WARN: Type inference failed for: r5v0 */
                /* JADX WARN: Type inference failed for: r5v1 */
                /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
                private Value(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    this.f33874z = (byte) -1;
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
                                                this.f33862i |= 1;
                                                this.f33863o = valueOf;
                                                continue;
                                            }
                                        case 16:
                                            this.f33862i |= 2;
                                            this.f33864p = codedInputStream.readSInt64();
                                            continue;
                                        case 29:
                                            this.f33862i |= 4;
                                            this.f33865q = codedInputStream.readFloat();
                                            continue;
                                        case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                                            this.f33862i |= 8;
                                            this.f33866r = codedInputStream.readDouble();
                                            continue;
                                        case 40:
                                            this.f33862i |= 16;
                                            this.f33867s = codedInputStream.readInt32();
                                            continue;
                                        case 48:
                                            this.f33862i |= 32;
                                            this.f33868t = codedInputStream.readInt32();
                                            continue;
                                        case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                            this.f33862i |= 64;
                                            this.f33869u = codedInputStream.readInt32();
                                            continue;
                                        case 66:
                                            Builder builder = (this.f33862i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.f33870v.toBuilder() : null;
                                            Annotation annotation = (Annotation) codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite);
                                            this.f33870v = annotation;
                                            if (builder != null) {
                                                builder.mergeFrom(annotation);
                                                this.f33870v = builder.buildPartial();
                                            }
                                            this.f33862i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                            continue;
                                        case 74:
                                            if (!(z11 & true)) {
                                                this.f33871w = new ArrayList();
                                                z11 = true;
                                            }
                                            this.f33871w.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                                            continue;
                                        case 80:
                                            this.f33862i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                            this.f33873y = codedInputStream.readInt32();
                                            continue;
                                        case 88:
                                            this.f33862i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                            this.f33872x = codedInputStream.readInt32();
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
                                        this.f33871w = Collections.unmodifiableList(this.f33871w);
                                    }
                                    try {
                                        newInstance.flush();
                                    } catch (IOException unused) {
                                    } catch (Throwable th3) {
                                        this.f33861e = newOutput.toByteString();
                                        throw th3;
                                    }
                                    this.f33861e = newOutput.toByteString();
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
                                this.f33871w = Collections.unmodifiableList(this.f33871w);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused2) {
                            } catch (Throwable th4) {
                                this.f33861e = newOutput.toByteString();
                                throw th4;
                            }
                            this.f33861e = newOutput.toByteString();
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
                f33851s = argument;
                argument.l();
            }

            public static Argument getDefaultInstance() {
                return f33851s;
            }

            private void l() {
                this.f33854o = 0;
                this.f33855p = Value.getDefaultInstance();
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public int getNameId() {
                return this.f33854o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33857r;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33853i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33854o);
                } else {
                    i10 = 0;
                }
                if ((this.f33853i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f33855p);
                }
                int size = i10 + this.f33852e.size();
                this.f33857r = size;
                return size;
            }

            public Value getValue() {
                return this.f33855p;
            }

            public boolean hasNameId() {
                if ((this.f33853i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasValue() {
                if ((this.f33853i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33856q;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasNameId()) {
                    this.f33856q = (byte) 0;
                    return false;
                } else if (!hasValue()) {
                    this.f33856q = (byte) 0;
                    return false;
                } else if (!getValue().isInitialized()) {
                    this.f33856q = (byte) 0;
                    return false;
                } else {
                    this.f33856q = (byte) 1;
                    return true;
                }
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33853i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33854o);
                }
                if ((this.f33853i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f33855p);
                }
                codedOutputStream.writeRawBytes(this.f33852e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f33851s;
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
                this.f33856q = (byte) -1;
                this.f33857r = -1;
                this.f33852e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f33856q = (byte) -1;
                this.f33857r = -1;
                this.f33852e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33856q = (byte) -1;
                this.f33857r = -1;
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
                                    this.f33853i |= 1;
                                    this.f33854o = codedInputStream.readInt32();
                                } else if (readTag != 18) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    Value.Builder builder = (this.f33853i & 2) == 2 ? this.f33855p.toBuilder() : null;
                                    Value value = (Value) codedInputStream.readMessage(Value.PARSER, extensionRegistryLite);
                                    this.f33855p = value;
                                    if (builder != null) {
                                        builder.mergeFrom(value);
                                        this.f33855p = builder.buildPartial();
                                    }
                                    this.f33853i |= 2;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33852e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33852e = newOutput.toByteString();
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
                    this.f33852e = newOutput.toByteString();
                    throw th4;
                }
                this.f33852e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Annotation, Builder> implements AnnotationOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33890e;

            /* renamed from: i  reason: collision with root package name */
            private int f33891i;

            /* renamed from: o  reason: collision with root package name */
            private List f33892o = Collections.EMPTY_LIST;

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
                if ((this.f33890e & 2) != 2) {
                    this.f33892o = new ArrayList(this.f33892o);
                    this.f33890e |= 2;
                }
            }

            private void e() {
            }

            public Annotation buildPartial() {
                Annotation annotation = new Annotation(this);
                int i10 = 1;
                if ((this.f33890e & 1) != 1) {
                    i10 = 0;
                }
                annotation.f33847o = this.f33891i;
                if ((this.f33890e & 2) == 2) {
                    this.f33892o = Collections.unmodifiableList(this.f33892o);
                    this.f33890e &= -3;
                }
                annotation.f33848p = this.f33892o;
                annotation.f33846i = i10;
                return annotation;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f33892o.get(i10);
            }

            public int getArgumentCount() {
                return this.f33892o.size();
            }

            public boolean hasId() {
                if ((this.f33890e & 1) == 1) {
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
                this.f33890e |= 1;
                this.f33891i = i10;
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
                if (!annotation.f33848p.isEmpty()) {
                    if (this.f33892o.isEmpty()) {
                        this.f33892o = annotation.f33848p;
                        this.f33890e &= -3;
                    } else {
                        d();
                        this.f33892o.addAll(annotation.f33848p);
                    }
                }
                setUnknownFields(getUnknownFields().concat(annotation.f33845e));
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
            f33844s = annotation;
            annotation.m();
        }

        public static Annotation getDefaultInstance() {
            return f33844s;
        }

        private void m() {
            this.f33847o = 0;
            this.f33848p = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f33848p.get(i10);
        }

        public int getArgumentCount() {
            return this.f33848p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f33848p;
        }

        public int getId() {
            return this.f33847o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Annotation> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33850r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33846i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33847o);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33848p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33848p.get(i12));
            }
            int size = i10 + this.f33845e.size();
            this.f33850r = size;
            return size;
        }

        public boolean hasId() {
            if ((this.f33846i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33849q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f33849q = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.f33849q = (byte) 0;
                    return false;
                }
            }
            this.f33849q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33846i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33847o);
            }
            for (int i10 = 0; i10 < this.f33848p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33848p.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33845e);
        }

        public static Builder newBuilder(Annotation annotation) {
            return newBuilder().mergeFrom(annotation);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Annotation getDefaultInstanceForType() {
            return f33844s;
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
            this.f33849q = (byte) -1;
            this.f33850r = -1;
            this.f33845e = builder.getUnknownFields();
        }

        private Annotation(boolean z10) {
            this.f33849q = (byte) -1;
            this.f33850r = -1;
            this.f33845e = ByteString.EMPTY;
        }

        private Annotation(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33849q = (byte) -1;
            this.f33850r = -1;
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
                                this.f33846i |= 1;
                                this.f33847o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33848p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33848p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33848p = Collections.unmodifiableList(this.f33848p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33845e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33845e = newOutput.toByteString();
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
                this.f33848p = Collections.unmodifiableList(this.f33848p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33845e = newOutput.toByteString();
                throw th4;
            }
            this.f33845e = newOutput.toByteString();
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
        private final ByteString f33893i;

        /* renamed from: o  reason: collision with root package name */
        private int f33894o;

        /* renamed from: p  reason: collision with root package name */
        private int f33895p;

        /* renamed from: q  reason: collision with root package name */
        private int f33896q;

        /* renamed from: r  reason: collision with root package name */
        private int f33897r;

        /* renamed from: s  reason: collision with root package name */
        private List f33898s;

        /* renamed from: t  reason: collision with root package name */
        private List f33899t;

        /* renamed from: u  reason: collision with root package name */
        private List f33900u;

        /* renamed from: v  reason: collision with root package name */
        private int f33901v;

        /* renamed from: w  reason: collision with root package name */
        private List f33902w;

        /* renamed from: x  reason: collision with root package name */
        private int f33903x;

        /* renamed from: y  reason: collision with root package name */
        private List f33904y;

        /* renamed from: z  reason: collision with root package name */
        private List f33905z;

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
            private int f33906o;

            /* renamed from: p  reason: collision with root package name */
            private int f33907p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33908q;

            /* renamed from: r  reason: collision with root package name */
            private int f33909r;

            /* renamed from: s  reason: collision with root package name */
            private List f33910s;

            /* renamed from: t  reason: collision with root package name */
            private List f33911t;

            /* renamed from: u  reason: collision with root package name */
            private List f33912u;

            /* renamed from: v  reason: collision with root package name */
            private List f33913v;

            /* renamed from: w  reason: collision with root package name */
            private List f33914w;

            /* renamed from: x  reason: collision with root package name */
            private List f33915x;

            /* renamed from: y  reason: collision with root package name */
            private List f33916y;

            /* renamed from: z  reason: collision with root package name */
            private List f33917z;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33910s = list;
                this.f33911t = list;
                this.f33912u = list;
                this.f33913v = list;
                this.f33914w = list;
                this.f33915x = list;
                this.f33916y = list;
                this.f33917z = list;
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
                D();
            }

            private void A() {
                if ((this.f33906o & 8) != 8) {
                    this.f33910s = new ArrayList(this.f33910s);
                    this.f33906o |= 8;
                }
            }

            private void B() {
                if ((this.f33906o & 4194304) != 4194304) {
                    this.L = new ArrayList(this.L);
                    this.f33906o |= 4194304;
                }
            }

            private void D() {
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f33906o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 16777216) {
                    this.N = new ArrayList(this.N);
                    this.f33906o |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
                }
            }

            private void k() {
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33916y = new ArrayList(this.f33916y);
                    this.f33906o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33915x = new ArrayList(this.f33915x);
                    this.f33906o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f33914w = new ArrayList(this.f33914w);
                    this.f33906o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void n() {
                if ((this.f33906o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33906o |= 8192;
                }
            }

            private void o() {
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33917z = new ArrayList(this.f33917z);
                    this.f33906o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void q() {
                if ((this.f33906o & 262144) != 262144) {
                    this.H = new ArrayList(this.H);
                    this.f33906o |= 262144;
                }
            }

            private void r() {
                if ((this.f33906o & 1048576) != 1048576) {
                    this.J = new ArrayList(this.J);
                    this.f33906o |= 1048576;
                }
            }

            private void t() {
                if ((this.f33906o & 524288) != 524288) {
                    this.I = new ArrayList(this.I);
                    this.f33906o |= 524288;
                }
            }

            private void u() {
                if ((this.f33906o & 64) != 64) {
                    this.f33913v = new ArrayList(this.f33913v);
                    this.f33906o |= 64;
                }
            }

            private void v() {
                if ((this.f33906o & RecyclerView.ItemAnimator.FLAG_MOVED) != 2048) {
                    this.A = new ArrayList(this.A);
                    this.f33906o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
            }

            private void w() {
                if ((this.f33906o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33906o |= 16384;
                }
            }

            private void x() {
                if ((this.f33906o & 32) != 32) {
                    this.f33912u = new ArrayList(this.f33912u);
                    this.f33906o |= 32;
                }
            }

            private void y() {
                if ((this.f33906o & 16) != 16) {
                    this.f33911t = new ArrayList(this.f33911t);
                    this.f33906o |= 16;
                }
            }

            private void z() {
                if ((this.f33906o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33906o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            public Class buildPartial() {
                Class r02 = new Class(this);
                int i10 = this.f33906o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                r02.f33895p = this.f33907p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                r02.f33896q = this.f33908q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                r02.f33897r = this.f33909r;
                if ((this.f33906o & 8) == 8) {
                    this.f33910s = Collections.unmodifiableList(this.f33910s);
                    this.f33906o &= -9;
                }
                r02.f33898s = this.f33910s;
                if ((this.f33906o & 16) == 16) {
                    this.f33911t = Collections.unmodifiableList(this.f33911t);
                    this.f33906o &= -17;
                }
                r02.f33899t = this.f33911t;
                if ((this.f33906o & 32) == 32) {
                    this.f33912u = Collections.unmodifiableList(this.f33912u);
                    this.f33906o &= -33;
                }
                r02.f33900u = this.f33912u;
                if ((this.f33906o & 64) == 64) {
                    this.f33913v = Collections.unmodifiableList(this.f33913v);
                    this.f33906o &= -65;
                }
                r02.f33902w = this.f33913v;
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f33914w = Collections.unmodifiableList(this.f33914w);
                    this.f33906o &= -129;
                }
                r02.f33904y = this.f33914w;
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33915x = Collections.unmodifiableList(this.f33915x);
                    this.f33906o &= -257;
                }
                r02.f33905z = this.f33915x;
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33916y = Collections.unmodifiableList(this.f33916y);
                    this.f33906o &= -513;
                }
                r02.B = this.f33916y;
                if ((this.f33906o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33917z = Collections.unmodifiableList(this.f33917z);
                    this.f33906o &= -1025;
                }
                r02.C = this.f33917z;
                if ((this.f33906o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    this.A = Collections.unmodifiableList(this.A);
                    this.f33906o &= -2049;
                }
                r02.D = this.A;
                if ((this.f33906o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33906o &= -4097;
                }
                r02.E = this.B;
                if ((this.f33906o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33906o &= -8193;
                }
                r02.F = this.C;
                if ((this.f33906o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33906o &= -16385;
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
                if ((this.f33906o & 262144) == 262144) {
                    this.H = Collections.unmodifiableList(this.H);
                    this.f33906o &= -262145;
                }
                r02.L = this.H;
                if ((this.f33906o & 524288) == 524288) {
                    this.I = Collections.unmodifiableList(this.I);
                    this.f33906o &= -524289;
                }
                r02.N = this.I;
                if ((this.f33906o & 1048576) == 1048576) {
                    this.J = Collections.unmodifiableList(this.J);
                    this.f33906o &= -1048577;
                }
                r02.O = this.J;
                if ((i10 & 2097152) == 2097152) {
                    i11 |= 64;
                }
                r02.Q = this.K;
                if ((this.f33906o & 4194304) == 4194304) {
                    this.L = Collections.unmodifiableList(this.L);
                    this.f33906o &= -4194305;
                }
                r02.R = this.L;
                if ((i10 & 8388608) == 8388608) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                r02.S = this.M;
                if ((this.f33906o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) == 16777216) {
                    this.N = Collections.unmodifiableList(this.N);
                    this.f33906o &= -16777217;
                }
                r02.T = this.N;
                r02.f33894o = i11;
                return r02;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.N.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.N.size();
            }

            public Constructor getConstructor(int i10) {
                return (Constructor) this.f33916y.get(i10);
            }

            public int getConstructorCount() {
                return this.f33916y.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33914w.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33914w.size();
            }

            public EnumEntry getEnumEntry(int i10) {
                return (EnumEntry) this.C.get(i10);
            }

            public int getEnumEntryCount() {
                return this.C.size();
            }

            public Function getFunction(int i10) {
                return (Function) this.f33917z.get(i10);
            }

            public int getFunctionCount() {
                return this.f33917z.size();
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
                return (Type) this.f33911t.get(i10);
            }

            public int getSupertypeCount() {
                return this.f33911t.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.B.get(i10);
            }

            public int getTypeAliasCount() {
                return this.B.size();
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33910s.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33910s.size();
            }

            public TypeTable getTypeTable() {
                return this.K;
            }

            public boolean hasFqName() {
                if ((this.f33906o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasInlineClassUnderlyingType() {
                if ((this.f33906o & 65536) == 65536) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33906o & 2097152) == 2097152) {
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
                if ((this.f33906o & 65536) == 65536 && this.F != Type.getDefaultInstance()) {
                    this.F = Type.newBuilder(this.F).mergeFrom(type).buildPartial();
                } else {
                    this.F = type;
                }
                this.f33906o |= 65536;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33906o & 2097152) == 2097152 && this.K != TypeTable.getDefaultInstance()) {
                    this.K = TypeTable.newBuilder(this.K).mergeFrom(typeTable).buildPartial();
                } else {
                    this.K = typeTable;
                }
                this.f33906o |= 2097152;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33906o & 8388608) == 8388608 && this.M != VersionRequirementTable.getDefaultInstance()) {
                    this.M = VersionRequirementTable.newBuilder(this.M).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.M = versionRequirementTable;
                }
                this.f33906o |= 8388608;
                return this;
            }

            public Builder setCompanionObjectName(int i10) {
                this.f33906o |= 4;
                this.f33909r = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33906o |= 1;
                this.f33907p = i10;
                return this;
            }

            public Builder setFqName(int i10) {
                this.f33906o |= 2;
                this.f33908q = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingPropertyName(int i10) {
                this.f33906o |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                this.E = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingTypeId(int i10) {
                this.f33906o |= 131072;
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
                if (!r32.f33898s.isEmpty()) {
                    if (this.f33910s.isEmpty()) {
                        this.f33910s = r32.f33898s;
                        this.f33906o &= -9;
                    } else {
                        A();
                        this.f33910s.addAll(r32.f33898s);
                    }
                }
                if (!r32.f33899t.isEmpty()) {
                    if (this.f33911t.isEmpty()) {
                        this.f33911t = r32.f33899t;
                        this.f33906o &= -17;
                    } else {
                        y();
                        this.f33911t.addAll(r32.f33899t);
                    }
                }
                if (!r32.f33900u.isEmpty()) {
                    if (this.f33912u.isEmpty()) {
                        this.f33912u = r32.f33900u;
                        this.f33906o &= -33;
                    } else {
                        x();
                        this.f33912u.addAll(r32.f33900u);
                    }
                }
                if (!r32.f33902w.isEmpty()) {
                    if (this.f33913v.isEmpty()) {
                        this.f33913v = r32.f33902w;
                        this.f33906o &= -65;
                    } else {
                        u();
                        this.f33913v.addAll(r32.f33902w);
                    }
                }
                if (!r32.f33904y.isEmpty()) {
                    if (this.f33914w.isEmpty()) {
                        this.f33914w = r32.f33904y;
                        this.f33906o &= -129;
                    } else {
                        m();
                        this.f33914w.addAll(r32.f33904y);
                    }
                }
                if (!r32.f33905z.isEmpty()) {
                    if (this.f33915x.isEmpty()) {
                        this.f33915x = r32.f33905z;
                        this.f33906o &= -257;
                    } else {
                        l();
                        this.f33915x.addAll(r32.f33905z);
                    }
                }
                if (!r32.B.isEmpty()) {
                    if (this.f33916y.isEmpty()) {
                        this.f33916y = r32.B;
                        this.f33906o &= -513;
                    } else {
                        k();
                        this.f33916y.addAll(r32.B);
                    }
                }
                if (!r32.C.isEmpty()) {
                    if (this.f33917z.isEmpty()) {
                        this.f33917z = r32.C;
                        this.f33906o &= -1025;
                    } else {
                        o();
                        this.f33917z.addAll(r32.C);
                    }
                }
                if (!r32.D.isEmpty()) {
                    if (this.A.isEmpty()) {
                        this.A = r32.D;
                        this.f33906o &= -2049;
                    } else {
                        v();
                        this.A.addAll(r32.D);
                    }
                }
                if (!r32.E.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = r32.E;
                        this.f33906o &= -4097;
                    } else {
                        z();
                        this.B.addAll(r32.E);
                    }
                }
                if (!r32.F.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = r32.F;
                        this.f33906o &= -8193;
                    } else {
                        n();
                        this.C.addAll(r32.F);
                    }
                }
                if (!r32.G.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = r32.G;
                        this.f33906o &= -16385;
                    } else {
                        w();
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
                        this.f33906o &= -262145;
                    } else {
                        q();
                        this.H.addAll(r32.L);
                    }
                }
                if (!r32.N.isEmpty()) {
                    if (this.I.isEmpty()) {
                        this.I = r32.N;
                        this.f33906o &= -524289;
                    } else {
                        t();
                        this.I.addAll(r32.N);
                    }
                }
                if (!r32.O.isEmpty()) {
                    if (this.J.isEmpty()) {
                        this.J = r32.O;
                        this.f33906o &= -1048577;
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
                        this.f33906o &= -4194305;
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
                        this.f33906o &= -16777217;
                    } else {
                        j();
                        this.N.addAll(r32.T);
                    }
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33893i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            private static Internal.EnumLiteMap f33918e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33920d;

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
                this.f33920d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33920d;
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
            this.f33895p = 6;
            this.f33896q = 0;
            this.f33897r = 0;
            List list = Collections.EMPTY_LIST;
            this.f33898s = list;
            this.f33899t = list;
            this.f33900u = list;
            this.f33902w = list;
            this.f33904y = list;
            this.f33905z = list;
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
            return this.f33897r;
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
            return (Type) this.f33904y.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33904y.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33905z;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33904y;
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
            return this.f33895p;
        }

        public int getFqName() {
            return this.f33896q;
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
            return this.f33902w;
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
            if ((this.f33894o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33895p);
            } else {
                i10 = 0;
            }
            int i12 = 0;
            for (int i13 = 0; i13 < this.f33900u.size(); i13++) {
                i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33900u.get(i13)).intValue());
            }
            int i14 = i10 + i12;
            if (!getSupertypeIdList().isEmpty()) {
                i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
            }
            this.f33901v = i12;
            if ((this.f33894o & 2) == 2) {
                i14 += CodedOutputStream.computeInt32Size(3, this.f33896q);
            }
            if ((this.f33894o & 4) == 4) {
                i14 += CodedOutputStream.computeInt32Size(4, this.f33897r);
            }
            for (int i15 = 0; i15 < this.f33898s.size(); i15++) {
                i14 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33898s.get(i15));
            }
            for (int i16 = 0; i16 < this.f33899t.size(); i16++) {
                i14 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33899t.get(i16));
            }
            int i17 = 0;
            for (int i18 = 0; i18 < this.f33902w.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33902w.get(i18)).intValue());
            }
            int i19 = i14 + i17;
            if (!getNestedClassNameList().isEmpty()) {
                i19 = i19 + 1 + CodedOutputStream.computeInt32SizeNoTag(i17);
            }
            this.f33903x = i17;
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
            if ((this.f33894o & 8) == 8) {
                i27 += CodedOutputStream.computeInt32Size(17, this.I);
            }
            if ((this.f33894o & 16) == 16) {
                i27 += CodedOutputStream.computeMessageSize(18, this.J);
            }
            if ((this.f33894o & 32) == 32) {
                i27 += CodedOutputStream.computeInt32Size(19, this.K);
            }
            for (int i28 = 0; i28 < this.f33904y.size(); i28++) {
                i27 += CodedOutputStream.computeMessageSize(20, (MessageLite) this.f33904y.get(i28));
            }
            int i29 = 0;
            for (int i30 = 0; i30 < this.f33905z.size(); i30++) {
                i29 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33905z.get(i30)).intValue());
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
            if ((this.f33894o & 64) == 64) {
                i38 += CodedOutputStream.computeMessageSize(30, this.Q);
            }
            int i39 = 0;
            for (int i40 = 0; i40 < this.R.size(); i40++) {
                i39 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.R.get(i40)).intValue());
            }
            int size = i38 + i39 + (getVersionRequirementList().size() * 2);
            if ((this.f33894o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                size += CodedOutputStream.computeMessageSize(32, this.S);
            }
            for (int i41 = 0; i41 < this.T.size(); i41++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.T.get(i41));
            }
            int j10 = size + j() + this.f33893i.size();
            this.V = j10;
            return j10;
        }

        public Type getSupertype(int i10) {
            return (Type) this.f33899t.get(i10);
        }

        public int getSupertypeCount() {
            return this.f33899t.size();
        }

        public List<Integer> getSupertypeIdList() {
            return this.f33900u;
        }

        public List<Type> getSupertypeList() {
            return this.f33899t;
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
            return (TypeParameter) this.f33898s.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33898s.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33898s;
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
            if ((this.f33894o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33894o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasFqName() {
            if ((this.f33894o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingPropertyName() {
            if ((this.f33894o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingType() {
            if ((this.f33894o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingTypeId() {
            if ((this.f33894o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33894o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33894o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33894o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33895p);
            }
            if (getSupertypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(18);
                codedOutputStream.writeRawVarint32(this.f33901v);
            }
            for (int i10 = 0; i10 < this.f33900u.size(); i10++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33900u.get(i10)).intValue());
            }
            if ((this.f33894o & 2) == 2) {
                codedOutputStream.writeInt32(3, this.f33896q);
            }
            if ((this.f33894o & 4) == 4) {
                codedOutputStream.writeInt32(4, this.f33897r);
            }
            for (int i11 = 0; i11 < this.f33898s.size(); i11++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33898s.get(i11));
            }
            for (int i12 = 0; i12 < this.f33899t.size(); i12++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33899t.get(i12));
            }
            if (getNestedClassNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(58);
                codedOutputStream.writeRawVarint32(this.f33903x);
            }
            for (int i13 = 0; i13 < this.f33902w.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33902w.get(i13)).intValue());
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
            if ((this.f33894o & 8) == 8) {
                codedOutputStream.writeInt32(17, this.I);
            }
            if ((this.f33894o & 16) == 16) {
                codedOutputStream.writeMessage(18, this.J);
            }
            if ((this.f33894o & 32) == 32) {
                codedOutputStream.writeInt32(19, this.K);
            }
            for (int i20 = 0; i20 < this.f33904y.size(); i20++) {
                codedOutputStream.writeMessage(20, (MessageLite) this.f33904y.get(i20));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(170);
                codedOutputStream.writeRawVarint32(this.A);
            }
            for (int i21 = 0; i21 < this.f33905z.size(); i21++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33905z.get(i21)).intValue());
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
            if ((this.f33894o & 64) == 64) {
                codedOutputStream.writeMessage(30, this.Q);
            }
            for (int i25 = 0; i25 < this.R.size(); i25++) {
                codedOutputStream.writeInt32(31, ((Integer) this.R.get(i25)).intValue());
            }
            if ((this.f33894o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(32, this.S);
            }
            for (int i26 = 0; i26 < this.T.size(); i26++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.T.get(i26));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33893i);
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
            this.f33901v = -1;
            this.f33903x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33893i = extendableBuilder.getUnknownFields();
        }

        private Class(boolean z10) {
            this.f33901v = -1;
            this.f33903x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33893i = ByteString.EMPTY;
        }

        /* JADX WARN: Type inference failed for: r4v2 */
        /* JADX WARN: Type inference failed for: r4v4 */
        /* JADX WARN: Type inference failed for: r4v8, types: [boolean] */
        private Class(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            boolean z11;
            this.f33901v = -1;
            this.f33903x = -1;
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
                                this.f33894o |= 1;
                                this.f33895p = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 16:
                                boolean z16 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z16) {
                                    this.f33900u = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33900u.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33900u = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33900u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                this.f33894o |= 2;
                                this.f33896q = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 32:
                                this.f33894o |= 4;
                                this.f33897r = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 42:
                                boolean z18 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z18) {
                                    this.f33898s = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33898s.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 50:
                                boolean z19 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z19) {
                                    this.f33899t = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33899t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                boolean z20 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z20) {
                                    this.f33902w = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33902w.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33902w = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33902w.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                this.f33894o |= 8;
                                this.I = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                                Type.Builder builder = (this.f33894o & 16) == 16 ? this.J.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.J = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.J = builder.buildPartial();
                                }
                                this.f33894o |= 16;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 152:
                                this.f33894o |= 32;
                                this.K = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 162:
                                boolean z29 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z29) {
                                    this.f33904y = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33904y.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 168:
                                boolean z30 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z30) {
                                    this.f33905z = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33905z.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33905z = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33905z.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                TypeTable.Builder builder2 = (this.f33894o & 64) == 64 ? this.Q.toBuilder() : null;
                                TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                this.Q = typeTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(typeTable);
                                    this.Q = builder2.buildPartial();
                                }
                                this.f33894o |= 64;
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
                                VersionRequirementTable.Builder builder3 = (this.f33894o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.S.toBuilder() : null;
                                VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                this.S = versionRequirementTable;
                                if (builder3 != null) {
                                    builder3.mergeFrom(versionRequirementTable);
                                    this.S = builder3.buildPartial();
                                }
                                this.f33894o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
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
                                            this.f33900u = Collections.unmodifiableList(this.f33900u);
                                        }
                                        if (z11 & true) {
                                            this.f33898s = Collections.unmodifiableList(this.f33898s);
                                        }
                                        if (z11 & true) {
                                            this.f33899t = Collections.unmodifiableList(this.f33899t);
                                        }
                                        if ((z11 & true) == c10) {
                                            this.f33902w = Collections.unmodifiableList(this.f33902w);
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
                                            this.f33904y = Collections.unmodifiableList(this.f33904y);
                                        }
                                        if (z11 & true) {
                                            this.f33905z = Collections.unmodifiableList(this.f33905z);
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
                                            this.f33893i = newOutput.toByteString();
                                            throw th3;
                                        }
                                        this.f33893i = newOutput.toByteString();
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
                        this.f33900u = Collections.unmodifiableList(this.f33900u);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33898s = Collections.unmodifiableList(this.f33898s);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33899t = Collections.unmodifiableList(this.f33899t);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33902w = Collections.unmodifiableList(this.f33902w);
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
                        this.f33904y = Collections.unmodifiableList(this.f33904y);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33905z = Collections.unmodifiableList(this.f33905z);
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
                        this.f33893i = newOutput.toByteString();
                        throw th5;
                    }
                    this.f33893i = newOutput.toByteString();
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
        private static final CompilerPluginData f33921s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33922e;

        /* renamed from: i  reason: collision with root package name */
        private int f33923i;

        /* renamed from: o  reason: collision with root package name */
        private int f33924o;

        /* renamed from: p  reason: collision with root package name */
        private ByteString f33925p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33926q;

        /* renamed from: r  reason: collision with root package name */
        private int f33927r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<CompilerPluginData, Builder> implements CompilerPluginDataOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33928e;

            /* renamed from: i  reason: collision with root package name */
            private int f33929i;

            /* renamed from: o  reason: collision with root package name */
            private ByteString f33930o = ByteString.EMPTY;

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
                int i10 = this.f33928e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                compilerPluginData.f33924o = this.f33929i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                compilerPluginData.f33925p = this.f33930o;
                compilerPluginData.f33923i = i11;
                return compilerPluginData;
            }

            public boolean hasData() {
                if ((this.f33928e & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasPluginId() {
                if ((this.f33928e & 1) == 1) {
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
                this.f33928e |= 2;
                this.f33930o = byteString;
                return this;
            }

            public Builder setPluginId(int i10) {
                this.f33928e |= 1;
                this.f33929i = i10;
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
                setUnknownFields(getUnknownFields().concat(compilerPluginData.f33922e));
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
            f33921s = compilerPluginData;
            compilerPluginData.l();
        }

        public static CompilerPluginData getDefaultInstance() {
            return f33921s;
        }

        private void l() {
            this.f33924o = 0;
            this.f33925p = ByteString.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public ByteString getData() {
            return this.f33925p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<CompilerPluginData> getParserForType() {
            return PARSER;
        }

        public int getPluginId() {
            return this.f33924o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33927r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33923i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33924o);
            } else {
                i10 = 0;
            }
            if ((this.f33923i & 2) == 2) {
                i10 += CodedOutputStream.computeBytesSize(2, this.f33925p);
            }
            int size = i10 + this.f33922e.size();
            this.f33927r = size;
            return size;
        }

        public boolean hasData() {
            if ((this.f33923i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasPluginId() {
            if ((this.f33923i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33926q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasPluginId()) {
                this.f33926q = (byte) 0;
                return false;
            } else if (!hasData()) {
                this.f33926q = (byte) 0;
                return false;
            } else {
                this.f33926q = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33923i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33924o);
            }
            if ((this.f33923i & 2) == 2) {
                codedOutputStream.writeBytes(2, this.f33925p);
            }
            codedOutputStream.writeRawBytes(this.f33922e);
        }

        public static Builder newBuilder(CompilerPluginData compilerPluginData) {
            return newBuilder().mergeFrom(compilerPluginData);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public CompilerPluginData getDefaultInstanceForType() {
            return f33921s;
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
            this.f33926q = (byte) -1;
            this.f33927r = -1;
            this.f33922e = builder.getUnknownFields();
        }

        private CompilerPluginData(boolean z10) {
            this.f33926q = (byte) -1;
            this.f33927r = -1;
            this.f33922e = ByteString.EMPTY;
        }

        private CompilerPluginData(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33926q = (byte) -1;
            this.f33927r = -1;
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
                                this.f33923i |= 1;
                                this.f33924o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33923i |= 2;
                                this.f33925p = codedInputStream.readBytes();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33922e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33922e = newOutput.toByteString();
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
                this.f33922e = newOutput.toByteString();
                throw th4;
            }
            this.f33922e = newOutput.toByteString();
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
        private static final Constructor f33931v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33932i;

        /* renamed from: o  reason: collision with root package name */
        private int f33933o;

        /* renamed from: p  reason: collision with root package name */
        private int f33934p;

        /* renamed from: q  reason: collision with root package name */
        private List f33935q;

        /* renamed from: r  reason: collision with root package name */
        private List f33936r;

        /* renamed from: s  reason: collision with root package name */
        private List f33937s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33938t;

        /* renamed from: u  reason: collision with root package name */
        private int f33939u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Constructor, Builder> implements ConstructorOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33940o;

            /* renamed from: p  reason: collision with root package name */
            private int f33941p = 6;

            /* renamed from: q  reason: collision with root package name */
            private List f33942q;

            /* renamed from: r  reason: collision with root package name */
            private List f33943r;

            /* renamed from: s  reason: collision with root package name */
            private List f33944s;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33942q = list;
                this.f33943r = list;
                this.f33944s = list;
                m();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f33940o & 8) != 8) {
                    this.f33944s = new ArrayList(this.f33944s);
                    this.f33940o |= 8;
                }
            }

            private void k() {
                if ((this.f33940o & 2) != 2) {
                    this.f33942q = new ArrayList(this.f33942q);
                    this.f33940o |= 2;
                }
            }

            private void l() {
                if ((this.f33940o & 4) != 4) {
                    this.f33943r = new ArrayList(this.f33943r);
                    this.f33940o |= 4;
                }
            }

            private void m() {
            }

            public Constructor buildPartial() {
                Constructor constructor = new Constructor(this);
                int i10 = 1;
                if ((this.f33940o & 1) != 1) {
                    i10 = 0;
                }
                constructor.f33934p = this.f33941p;
                if ((this.f33940o & 2) == 2) {
                    this.f33942q = Collections.unmodifiableList(this.f33942q);
                    this.f33940o &= -3;
                }
                constructor.f33935q = this.f33942q;
                if ((this.f33940o & 4) == 4) {
                    this.f33943r = Collections.unmodifiableList(this.f33943r);
                    this.f33940o &= -5;
                }
                constructor.f33936r = this.f33943r;
                if ((this.f33940o & 8) == 8) {
                    this.f33944s = Collections.unmodifiableList(this.f33944s);
                    this.f33940o &= -9;
                }
                constructor.f33937s = this.f33944s;
                constructor.f33933o = i10;
                return constructor;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f33944s.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f33944s.size();
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33942q.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33942q.size();
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
                this.f33940o |= 1;
                this.f33941p = i10;
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
                if (!constructor.f33935q.isEmpty()) {
                    if (this.f33942q.isEmpty()) {
                        this.f33942q = constructor.f33935q;
                        this.f33940o &= -3;
                    } else {
                        k();
                        this.f33942q.addAll(constructor.f33935q);
                    }
                }
                if (!constructor.f33936r.isEmpty()) {
                    if (this.f33943r.isEmpty()) {
                        this.f33943r = constructor.f33936r;
                        this.f33940o &= -5;
                    } else {
                        l();
                        this.f33943r.addAll(constructor.f33936r);
                    }
                }
                if (!constructor.f33937s.isEmpty()) {
                    if (this.f33944s.isEmpty()) {
                        this.f33944s = constructor.f33937s;
                        this.f33940o &= -9;
                    } else {
                        j();
                        this.f33944s.addAll(constructor.f33937s);
                    }
                }
                f(constructor);
                setUnknownFields(getUnknownFields().concat(constructor.f33932i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            f33931v = constructor;
            constructor.v();
        }

        public static Constructor getDefaultInstance() {
            return f33931v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void v() {
            this.f33934p = 6;
            List list = Collections.EMPTY_LIST;
            this.f33935q = list;
            this.f33936r = list;
            this.f33937s = list;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f33937s.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f33937s.size();
        }

        public int getFlags() {
            return this.f33934p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Constructor> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33939u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33933o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33934p);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33935q.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33935q.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33936r.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33936r.get(i14)).intValue());
            }
            int size = i10 + i13 + (getVersionRequirementList().size() * 2);
            for (int i15 = 0; i15 < this.f33937s.size(); i15++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f33937s.get(i15));
            }
            int j10 = size + j() + this.f33932i.size();
            this.f33939u = j10;
            return j10;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.f33935q.get(i10);
        }

        public int getValueParameterCount() {
            return this.f33935q.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.f33935q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f33936r;
        }

        public boolean hasFlags() {
            if ((this.f33933o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33938t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                if (!getValueParameter(i10).isInitialized()) {
                    this.f33938t = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                if (!getCompilerPluginData(i11).isInitialized()) {
                    this.f33938t = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.f33938t = (byte) 0;
                return false;
            }
            this.f33938t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33933o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33934p);
            }
            for (int i10 = 0; i10 < this.f33935q.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33935q.get(i10));
            }
            for (int i11 = 0; i11 < this.f33936r.size(); i11++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f33936r.get(i11)).intValue());
            }
            for (int i12 = 0; i12 < this.f33937s.size(); i12++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f33937s.get(i12));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33932i);
        }

        public static Builder newBuilder(Constructor constructor) {
            return newBuilder().mergeFrom(constructor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Constructor getDefaultInstanceForType() {
            return f33931v;
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
            this.f33938t = (byte) -1;
            this.f33939u = -1;
            this.f33932i = extendableBuilder.getUnknownFields();
        }

        private Constructor(boolean z10) {
            this.f33938t = (byte) -1;
            this.f33939u = -1;
            this.f33932i = ByteString.EMPTY;
        }

        private Constructor(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33938t = (byte) -1;
            this.f33939u = -1;
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
                                this.f33933o |= 1;
                                this.f33934p = codedInputStream.readInt32();
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33935q = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33935q.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                            } else if (readTag == 248) {
                                if (!(z11 & true)) {
                                    this.f33936r = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33936r.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag == 250) {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33936r = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33936r.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            } else if (readTag != 258) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33937s = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33937s.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33935q = Collections.unmodifiableList(this.f33935q);
                        }
                        if (z11 & true) {
                            this.f33936r = Collections.unmodifiableList(this.f33936r);
                        }
                        if (z11 & true) {
                            this.f33937s = Collections.unmodifiableList(this.f33937s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33932i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33932i = newOutput.toByteString();
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
                this.f33935q = Collections.unmodifiableList(this.f33935q);
            }
            if (z11 & true) {
                this.f33936r = Collections.unmodifiableList(this.f33936r);
            }
            if (z11 & true) {
                this.f33937s = Collections.unmodifiableList(this.f33937s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33932i = newOutput.toByteString();
                throw th4;
            }
            this.f33932i = newOutput.toByteString();
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
        private static final Contract f33945q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33946e;

        /* renamed from: i  reason: collision with root package name */
        private List f33947i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33948o;

        /* renamed from: p  reason: collision with root package name */
        private int f33949p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Contract, Builder> implements ContractOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33950e;

            /* renamed from: i  reason: collision with root package name */
            private List f33951i = Collections.EMPTY_LIST;

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
                if ((this.f33950e & 1) != 1) {
                    this.f33951i = new ArrayList(this.f33951i);
                    this.f33950e |= 1;
                }
            }

            private void e() {
            }

            public Contract buildPartial() {
                Contract contract = new Contract(this);
                if ((this.f33950e & 1) == 1) {
                    this.f33951i = Collections.unmodifiableList(this.f33951i);
                    this.f33950e &= -2;
                }
                contract.f33947i = this.f33951i;
                return contract;
            }

            public Effect getEffect(int i10) {
                return (Effect) this.f33951i.get(i10);
            }

            public int getEffectCount() {
                return this.f33951i.size();
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
                if (!contract.f33947i.isEmpty()) {
                    if (this.f33951i.isEmpty()) {
                        this.f33951i = contract.f33947i;
                        this.f33950e &= -2;
                    } else {
                        d();
                        this.f33951i.addAll(contract.f33947i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(contract.f33946e));
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
            f33945q = contract;
            contract.k();
        }

        public static Contract getDefaultInstance() {
            return f33945q;
        }

        private void k() {
            this.f33947i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Effect getEffect(int i10) {
            return (Effect) this.f33947i.get(i10);
        }

        public int getEffectCount() {
            return this.f33947i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Contract> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33949p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33947i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33947i.get(i12));
            }
            int size = i11 + this.f33946e.size();
            this.f33949p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33948o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectCount(); i10++) {
                if (!getEffect(i10).isInitialized()) {
                    this.f33948o = (byte) 0;
                    return false;
                }
            }
            this.f33948o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33947i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33947i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33946e);
        }

        public static Builder newBuilder(Contract contract) {
            return newBuilder().mergeFrom(contract);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Contract getDefaultInstanceForType() {
            return f33945q;
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
            this.f33948o = (byte) -1;
            this.f33949p = -1;
            this.f33946e = builder.getUnknownFields();
        }

        private Contract(boolean z10) {
            this.f33948o = (byte) -1;
            this.f33949p = -1;
            this.f33946e = ByteString.EMPTY;
        }

        private Contract(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33948o = (byte) -1;
            this.f33949p = -1;
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
                                        this.f33947i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33947i.add(codedInputStream.readMessage(Effect.PARSER, extensionRegistryLite));
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
                        this.f33947i = Collections.unmodifiableList(this.f33947i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33946e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33946e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33947i = Collections.unmodifiableList(this.f33947i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33946e = newOutput.toByteString();
                throw th4;
            }
            this.f33946e = newOutput.toByteString();
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
        private static final Effect f33952u;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33953e;

        /* renamed from: i  reason: collision with root package name */
        private int f33954i;

        /* renamed from: o  reason: collision with root package name */
        private EffectType f33955o;

        /* renamed from: p  reason: collision with root package name */
        private List f33956p;

        /* renamed from: q  reason: collision with root package name */
        private Expression f33957q;

        /* renamed from: r  reason: collision with root package name */
        private InvocationKind f33958r;

        /* renamed from: s  reason: collision with root package name */
        private byte f33959s;

        /* renamed from: t  reason: collision with root package name */
        private int f33960t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Effect, Builder> implements EffectOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33961e;

            /* renamed from: i  reason: collision with root package name */
            private EffectType f33962i = EffectType.RETURNS_CONSTANT;

            /* renamed from: o  reason: collision with root package name */
            private List f33963o = Collections.EMPTY_LIST;

            /* renamed from: p  reason: collision with root package name */
            private Expression f33964p = Expression.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private InvocationKind f33965q = InvocationKind.AT_MOST_ONCE;

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
                if ((this.f33961e & 2) != 2) {
                    this.f33963o = new ArrayList(this.f33963o);
                    this.f33961e |= 2;
                }
            }

            private void e() {
            }

            public Effect buildPartial() {
                Effect effect = new Effect(this);
                int i10 = this.f33961e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                effect.f33955o = this.f33962i;
                if ((this.f33961e & 2) == 2) {
                    this.f33963o = Collections.unmodifiableList(this.f33963o);
                    this.f33961e &= -3;
                }
                effect.f33956p = this.f33963o;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                effect.f33957q = this.f33964p;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                effect.f33958r = this.f33965q;
                effect.f33954i = i11;
                return effect;
            }

            public Expression getConclusionOfConditionalEffect() {
                return this.f33964p;
            }

            public Expression getEffectConstructorArgument(int i10) {
                return (Expression) this.f33963o.get(i10);
            }

            public int getEffectConstructorArgumentCount() {
                return this.f33963o.size();
            }

            public boolean hasConclusionOfConditionalEffect() {
                if ((this.f33961e & 4) == 4) {
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
                if ((this.f33961e & 4) == 4 && this.f33964p != Expression.getDefaultInstance()) {
                    this.f33964p = Expression.newBuilder(this.f33964p).mergeFrom(expression).buildPartial();
                } else {
                    this.f33964p = expression;
                }
                this.f33961e |= 4;
                return this;
            }

            public Builder setEffectType(EffectType effectType) {
                effectType.getClass();
                this.f33961e |= 1;
                this.f33962i = effectType;
                return this;
            }

            public Builder setKind(InvocationKind invocationKind) {
                invocationKind.getClass();
                this.f33961e |= 8;
                this.f33965q = invocationKind;
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
                if (!effect.f33956p.isEmpty()) {
                    if (this.f33963o.isEmpty()) {
                        this.f33963o = effect.f33956p;
                        this.f33961e &= -3;
                    } else {
                        d();
                        this.f33963o.addAll(effect.f33956p);
                    }
                }
                if (effect.hasConclusionOfConditionalEffect()) {
                    mergeConclusionOfConditionalEffect(effect.getConclusionOfConditionalEffect());
                }
                if (effect.hasKind()) {
                    setKind(effect.getKind());
                }
                setUnknownFields(getUnknownFields().concat(effect.f33953e));
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
            private static Internal.EnumLiteMap f33966e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33968d;

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
                this.f33968d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33968d;
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
            private static Internal.EnumLiteMap f33969e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33971d;

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
                this.f33971d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33971d;
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
            f33952u = effect;
            effect.o();
        }

        public static Effect getDefaultInstance() {
            return f33952u;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f33955o = EffectType.RETURNS_CONSTANT;
            this.f33956p = Collections.EMPTY_LIST;
            this.f33957q = Expression.getDefaultInstance();
            this.f33958r = InvocationKind.AT_MOST_ONCE;
        }

        public Expression getConclusionOfConditionalEffect() {
            return this.f33957q;
        }

        public Expression getEffectConstructorArgument(int i10) {
            return (Expression) this.f33956p.get(i10);
        }

        public int getEffectConstructorArgumentCount() {
            return this.f33956p.size();
        }

        public EffectType getEffectType() {
            return this.f33955o;
        }

        public InvocationKind getKind() {
            return this.f33958r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Effect> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33960t;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33954i & 1) == 1) {
                i10 = CodedOutputStream.computeEnumSize(1, this.f33955o.getNumber());
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33956p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33956p.get(i12));
            }
            if ((this.f33954i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33957q);
            }
            if ((this.f33954i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f33958r.getNumber());
            }
            int size = i10 + this.f33953e.size();
            this.f33960t = size;
            return size;
        }

        public boolean hasConclusionOfConditionalEffect() {
            if ((this.f33954i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasEffectType() {
            if ((this.f33954i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasKind() {
            if ((this.f33954i & 4) == 4) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33959s;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                if (!getEffectConstructorArgument(i10).isInitialized()) {
                    this.f33959s = (byte) 0;
                    return false;
                }
            }
            if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                this.f33959s = (byte) 0;
                return false;
            }
            this.f33959s = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33954i & 1) == 1) {
                codedOutputStream.writeEnum(1, this.f33955o.getNumber());
            }
            for (int i10 = 0; i10 < this.f33956p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33956p.get(i10));
            }
            if ((this.f33954i & 2) == 2) {
                codedOutputStream.writeMessage(3, this.f33957q);
            }
            if ((this.f33954i & 4) == 4) {
                codedOutputStream.writeEnum(4, this.f33958r.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f33953e);
        }

        public static Builder newBuilder(Effect effect) {
            return newBuilder().mergeFrom(effect);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Effect getDefaultInstanceForType() {
            return f33952u;
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
            this.f33959s = (byte) -1;
            this.f33960t = -1;
            this.f33953e = builder.getUnknownFields();
        }

        private Effect(boolean z10) {
            this.f33959s = (byte) -1;
            this.f33960t = -1;
            this.f33953e = ByteString.EMPTY;
        }

        private Effect(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33959s = (byte) -1;
            this.f33960t = -1;
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
                                    this.f33954i |= 1;
                                    this.f33955o = valueOf;
                                }
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33956p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33956p.add(codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite));
                            } else if (readTag == 26) {
                                Expression.Builder builder = (this.f33954i & 2) == 2 ? this.f33957q.toBuilder() : null;
                                Expression expression = (Expression) codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite);
                                this.f33957q = expression;
                                if (builder != null) {
                                    builder.mergeFrom(expression);
                                    this.f33957q = builder.buildPartial();
                                }
                                this.f33954i |= 2;
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
                                    this.f33954i |= 4;
                                    this.f33958r = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33956p = Collections.unmodifiableList(this.f33956p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33953e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33953e = newOutput.toByteString();
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
                this.f33956p = Collections.unmodifiableList(this.f33956p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33953e = newOutput.toByteString();
                throw th4;
            }
            this.f33953e = newOutput.toByteString();
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
        private static final EnumEntry f33972s;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33973i;

        /* renamed from: o  reason: collision with root package name */
        private int f33974o;

        /* renamed from: p  reason: collision with root package name */
        private int f33975p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33976q;

        /* renamed from: r  reason: collision with root package name */
        private int f33977r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<EnumEntry, Builder> implements EnumEntryOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33978o;

            /* renamed from: p  reason: collision with root package name */
            private int f33979p;

            private Builder() {
                j();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
            }

            public EnumEntry buildPartial() {
                EnumEntry enumEntry = new EnumEntry(this);
                int i10 = 1;
                if ((this.f33978o & 1) != 1) {
                    i10 = 0;
                }
                enumEntry.f33975p = this.f33979p;
                enumEntry.f33974o = i10;
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
                this.f33978o |= 1;
                this.f33979p = i10;
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
                setUnknownFields(getUnknownFields().concat(enumEntry.f33973i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            f33972s = enumEntry;
            enumEntry.p();
        }

        public static EnumEntry getDefaultInstance() {
            return f33972s;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void p() {
            this.f33975p = 0;
        }

        public int getName() {
            return this.f33975p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<EnumEntry> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33977r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33974o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33975p);
            } else {
                i10 = 0;
            }
            int j10 = i10 + j() + this.f33973i.size();
            this.f33977r = j10;
            return j10;
        }

        public boolean hasName() {
            if ((this.f33974o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33976q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!i()) {
                this.f33976q = (byte) 0;
                return false;
            }
            this.f33976q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33974o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33975p);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33973i);
        }

        public static Builder newBuilder(EnumEntry enumEntry) {
            return newBuilder().mergeFrom(enumEntry);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public EnumEntry getDefaultInstanceForType() {
            return f33972s;
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
            this.f33976q = (byte) -1;
            this.f33977r = -1;
            this.f33973i = extendableBuilder.getUnknownFields();
        }

        private EnumEntry(boolean z10) {
            this.f33976q = (byte) -1;
            this.f33977r = -1;
            this.f33973i = ByteString.EMPTY;
        }

        private EnumEntry(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33976q = (byte) -1;
            this.f33977r = -1;
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
                                    this.f33974o |= 1;
                                    this.f33975p = codedInputStream.readInt32();
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
                        this.f33973i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33973i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33973i = newOutput.toByteString();
                throw th4;
            }
            this.f33973i = newOutput.toByteString();
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
        private static final Expression f33980x;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33981e;

        /* renamed from: i  reason: collision with root package name */
        private int f33982i;

        /* renamed from: o  reason: collision with root package name */
        private int f33983o;

        /* renamed from: p  reason: collision with root package name */
        private int f33984p;

        /* renamed from: q  reason: collision with root package name */
        private ConstantValue f33985q;

        /* renamed from: r  reason: collision with root package name */
        private Type f33986r;

        /* renamed from: s  reason: collision with root package name */
        private int f33987s;

        /* renamed from: t  reason: collision with root package name */
        private List f33988t;

        /* renamed from: u  reason: collision with root package name */
        private List f33989u;

        /* renamed from: v  reason: collision with root package name */
        private byte f33990v;

        /* renamed from: w  reason: collision with root package name */
        private int f33991w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Expression, Builder> implements ExpressionOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33992e;

            /* renamed from: i  reason: collision with root package name */
            private int f33993i;

            /* renamed from: o  reason: collision with root package name */
            private int f33994o;

            /* renamed from: p  reason: collision with root package name */
            private ConstantValue f33995p = ConstantValue.TRUE;

            /* renamed from: q  reason: collision with root package name */
            private Type f33996q = Type.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private int f33997r;

            /* renamed from: s  reason: collision with root package name */
            private List f33998s;

            /* renamed from: t  reason: collision with root package name */
            private List f33999t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33998s = list;
                this.f33999t = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33992e & 32) != 32) {
                    this.f33998s = new ArrayList(this.f33998s);
                    this.f33992e |= 32;
                }
            }

            private void e() {
                if ((this.f33992e & 64) != 64) {
                    this.f33999t = new ArrayList(this.f33999t);
                    this.f33992e |= 64;
                }
            }

            private void f() {
            }

            public Expression buildPartial() {
                Expression expression = new Expression(this);
                int i10 = this.f33992e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                expression.f33983o = this.f33993i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                expression.f33984p = this.f33994o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                expression.f33985q = this.f33995p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                expression.f33986r = this.f33996q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                expression.f33987s = this.f33997r;
                if ((this.f33992e & 32) == 32) {
                    this.f33998s = Collections.unmodifiableList(this.f33998s);
                    this.f33992e &= -33;
                }
                expression.f33988t = this.f33998s;
                if ((this.f33992e & 64) == 64) {
                    this.f33999t = Collections.unmodifiableList(this.f33999t);
                    this.f33992e &= -65;
                }
                expression.f33989u = this.f33999t;
                expression.f33982i = i11;
                return expression;
            }

            public Expression getAndArgument(int i10) {
                return (Expression) this.f33998s.get(i10);
            }

            public int getAndArgumentCount() {
                return this.f33998s.size();
            }

            public Type getIsInstanceType() {
                return this.f33996q;
            }

            public Expression getOrArgument(int i10) {
                return (Expression) this.f33999t.get(i10);
            }

            public int getOrArgumentCount() {
                return this.f33999t.size();
            }

            public boolean hasIsInstanceType() {
                if ((this.f33992e & 8) == 8) {
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
                if ((this.f33992e & 8) == 8 && this.f33996q != Type.getDefaultInstance()) {
                    this.f33996q = Type.newBuilder(this.f33996q).mergeFrom(type).buildPartial();
                } else {
                    this.f33996q = type;
                }
                this.f33992e |= 8;
                return this;
            }

            public Builder setConstantValue(ConstantValue constantValue) {
                constantValue.getClass();
                this.f33992e |= 4;
                this.f33995p = constantValue;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33992e |= 1;
                this.f33993i = i10;
                return this;
            }

            public Builder setIsInstanceTypeId(int i10) {
                this.f33992e |= 16;
                this.f33997r = i10;
                return this;
            }

            public Builder setValueParameterReference(int i10) {
                this.f33992e |= 2;
                this.f33994o = i10;
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
                if (!expression.f33988t.isEmpty()) {
                    if (this.f33998s.isEmpty()) {
                        this.f33998s = expression.f33988t;
                        this.f33992e &= -33;
                    } else {
                        d();
                        this.f33998s.addAll(expression.f33988t);
                    }
                }
                if (!expression.f33989u.isEmpty()) {
                    if (this.f33999t.isEmpty()) {
                        this.f33999t = expression.f33989u;
                        this.f33992e &= -65;
                    } else {
                        e();
                        this.f33999t.addAll(expression.f33989u);
                    }
                }
                setUnknownFields(getUnknownFields().concat(expression.f33981e));
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
            private static Internal.EnumLiteMap f34000e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34002d;

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
                this.f34002d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34002d;
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
            f33980x = expression;
            expression.s();
        }

        public static Expression getDefaultInstance() {
            return f33980x;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void s() {
            this.f33983o = 0;
            this.f33984p = 0;
            this.f33985q = ConstantValue.TRUE;
            this.f33986r = Type.getDefaultInstance();
            this.f33987s = 0;
            List list = Collections.EMPTY_LIST;
            this.f33988t = list;
            this.f33989u = list;
        }

        public Expression getAndArgument(int i10) {
            return (Expression) this.f33988t.get(i10);
        }

        public int getAndArgumentCount() {
            return this.f33988t.size();
        }

        public ConstantValue getConstantValue() {
            return this.f33985q;
        }

        public int getFlags() {
            return this.f33983o;
        }

        public Type getIsInstanceType() {
            return this.f33986r;
        }

        public int getIsInstanceTypeId() {
            return this.f33987s;
        }

        public Expression getOrArgument(int i10) {
            return (Expression) this.f33989u.get(i10);
        }

        public int getOrArgumentCount() {
            return this.f33989u.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Expression> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33991w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33982i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33983o);
            } else {
                i10 = 0;
            }
            if ((this.f33982i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33984p);
            }
            if ((this.f33982i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f33985q.getNumber());
            }
            if ((this.f33982i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33986r);
            }
            if ((this.f33982i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33987s);
            }
            for (int i12 = 0; i12 < this.f33988t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33988t.get(i12));
            }
            for (int i13 = 0; i13 < this.f33989u.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(7, (MessageLite) this.f33989u.get(i13));
            }
            int size = i10 + this.f33981e.size();
            this.f33991w = size;
            return size;
        }

        public int getValueParameterReference() {
            return this.f33984p;
        }

        public boolean hasConstantValue() {
            if ((this.f33982i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33982i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceType() {
            if ((this.f33982i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceTypeId() {
            if ((this.f33982i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasValueParameterReference() {
            if ((this.f33982i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33990v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                this.f33990v = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                if (!getAndArgument(i10).isInitialized()) {
                    this.f33990v = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                if (!getOrArgument(i11).isInitialized()) {
                    this.f33990v = (byte) 0;
                    return false;
                }
            }
            this.f33990v = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33982i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33983o);
            }
            if ((this.f33982i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33984p);
            }
            if ((this.f33982i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f33985q.getNumber());
            }
            if ((this.f33982i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f33986r);
            }
            if ((this.f33982i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f33987s);
            }
            for (int i10 = 0; i10 < this.f33988t.size(); i10++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33988t.get(i10));
            }
            for (int i11 = 0; i11 < this.f33989u.size(); i11++) {
                codedOutputStream.writeMessage(7, (MessageLite) this.f33989u.get(i11));
            }
            codedOutputStream.writeRawBytes(this.f33981e);
        }

        public static Builder newBuilder(Expression expression) {
            return newBuilder().mergeFrom(expression);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Expression getDefaultInstanceForType() {
            return f33980x;
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
            this.f33990v = (byte) -1;
            this.f33991w = -1;
            this.f33981e = builder.getUnknownFields();
        }

        private Expression(boolean z10) {
            this.f33990v = (byte) -1;
            this.f33991w = -1;
            this.f33981e = ByteString.EMPTY;
        }

        private Expression(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33990v = (byte) -1;
            this.f33991w = -1;
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
                                this.f33982i |= 1;
                                this.f33983o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33982i |= 2;
                                this.f33984p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                ConstantValue valueOf = ConstantValue.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33982i |= 4;
                                    this.f33985q = valueOf;
                                }
                            } else if (readTag == 34) {
                                Type.Builder builder = (this.f33982i & 8) == 8 ? this.f33986r.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.f33986r = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.f33986r = builder.buildPartial();
                                }
                                this.f33982i |= 8;
                            } else if (readTag == 40) {
                                this.f33982i |= 16;
                                this.f33987s = codedInputStream.readInt32();
                            } else if (readTag == 50) {
                                if (!(z11 & true)) {
                                    this.f33988t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33988t.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            } else if (readTag != 58) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33989u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33989u.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33988t = Collections.unmodifiableList(this.f33988t);
                        }
                        if (z11 & true) {
                            this.f33989u = Collections.unmodifiableList(this.f33989u);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33981e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33981e = newOutput.toByteString();
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
                this.f33988t = Collections.unmodifiableList(this.f33988t);
            }
            if (z11 & true) {
                this.f33989u = Collections.unmodifiableList(this.f33989u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33981e = newOutput.toByteString();
                throw th4;
            }
            this.f33981e = newOutput.toByteString();
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
        private final ByteString f34003i;

        /* renamed from: o  reason: collision with root package name */
        private int f34004o;

        /* renamed from: p  reason: collision with root package name */
        private int f34005p;

        /* renamed from: q  reason: collision with root package name */
        private int f34006q;

        /* renamed from: r  reason: collision with root package name */
        private int f34007r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34008s;

        /* renamed from: t  reason: collision with root package name */
        private int f34009t;

        /* renamed from: u  reason: collision with root package name */
        private List f34010u;

        /* renamed from: v  reason: collision with root package name */
        private Type f34011v;

        /* renamed from: w  reason: collision with root package name */
        private int f34012w;

        /* renamed from: x  reason: collision with root package name */
        private List f34013x;

        /* renamed from: y  reason: collision with root package name */
        private List f34014y;

        /* renamed from: z  reason: collision with root package name */
        private int f34015z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Function, Builder> implements FunctionOrBuilder {
            private TypeTable A;
            private List B;
            private Contract C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f34016o;

            /* renamed from: r  reason: collision with root package name */
            private int f34019r;

            /* renamed from: t  reason: collision with root package name */
            private int f34021t;

            /* renamed from: u  reason: collision with root package name */
            private List f34022u;

            /* renamed from: v  reason: collision with root package name */
            private Type f34023v;

            /* renamed from: w  reason: collision with root package name */
            private int f34024w;

            /* renamed from: x  reason: collision with root package name */
            private List f34025x;

            /* renamed from: y  reason: collision with root package name */
            private List f34026y;

            /* renamed from: z  reason: collision with root package name */
            private List f34027z;

            /* renamed from: p  reason: collision with root package name */
            private int f34017p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f34018q = 6;

            /* renamed from: s  reason: collision with root package name */
            private Type f34020s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34022u = list;
                this.f34023v = Type.getDefaultInstance();
                this.f34025x = list;
                this.f34026y = list;
                this.f34027z = list;
                this.A = TypeTable.getDefaultInstance();
                this.B = list;
                this.C = Contract.getDefaultInstance();
                this.D = list;
                q();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34016o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f34016o |= 16384;
                }
            }

            private void k() {
                if ((this.f34016o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34026y = new ArrayList(this.f34026y);
                    this.f34016o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34016o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34025x = new ArrayList(this.f34025x);
                    this.f34016o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f34016o & 32) != 32) {
                    this.f34022u = new ArrayList(this.f34022u);
                    this.f34016o |= 32;
                }
            }

            private void n() {
                if ((this.f34016o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f34027z = new ArrayList(this.f34027z);
                    this.f34016o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void o() {
                if ((this.f34016o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f34016o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            private void q() {
            }

            public Function buildPartial() {
                Function function = new Function(this);
                int i10 = this.f34016o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                function.f34005p = this.f34017p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                function.f34006q = this.f34018q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                function.f34007r = this.f34019r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                function.f34008s = this.f34020s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                function.f34009t = this.f34021t;
                if ((this.f34016o & 32) == 32) {
                    this.f34022u = Collections.unmodifiableList(this.f34022u);
                    this.f34016o &= -33;
                }
                function.f34010u = this.f34022u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                function.f34011v = this.f34023v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                function.f34012w = this.f34024w;
                if ((this.f34016o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34025x = Collections.unmodifiableList(this.f34025x);
                    this.f34016o &= -257;
                }
                function.f34013x = this.f34025x;
                if ((this.f34016o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34026y = Collections.unmodifiableList(this.f34026y);
                    this.f34016o &= -513;
                }
                function.f34014y = this.f34026y;
                if ((this.f34016o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f34027z = Collections.unmodifiableList(this.f34027z);
                    this.f34016o &= -1025;
                }
                function.A = this.f34027z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                function.B = this.A;
                if ((this.f34016o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f34016o &= -4097;
                }
                function.C = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                function.D = this.C;
                if ((this.f34016o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f34016o &= -16385;
                }
                function.E = this.D;
                function.f34004o = i11;
                return function;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f34025x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f34025x.size();
            }

            public Contract getContract() {
                return this.C;
            }

            public Type getReceiverType() {
                return this.f34023v;
            }

            public Type getReturnType() {
                return this.f34020s;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34022u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34022u.size();
            }

            public TypeTable getTypeTable() {
                return this.A;
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f34027z.get(i10);
            }

            public int getValueParameterCount() {
                return this.f34027z.size();
            }

            public boolean hasContract() {
                if ((this.f34016o & 8192) == 8192) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34016o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f34016o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f34016o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f34016o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
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
                if ((this.f34016o & 8192) == 8192 && this.C != Contract.getDefaultInstance()) {
                    this.C = Contract.newBuilder(this.C).mergeFrom(contract).buildPartial();
                } else {
                    this.C = contract;
                }
                this.f34016o |= 8192;
                return this;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f34016o & 64) == 64 && this.f34023v != Type.getDefaultInstance()) {
                    this.f34023v = Type.newBuilder(this.f34023v).mergeFrom(type).buildPartial();
                } else {
                    this.f34023v = type;
                }
                this.f34016o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f34016o & 8) == 8 && this.f34020s != Type.getDefaultInstance()) {
                    this.f34020s = Type.newBuilder(this.f34020s).mergeFrom(type).buildPartial();
                } else {
                    this.f34020s = type;
                }
                this.f34016o |= 8;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f34016o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != TypeTable.getDefaultInstance()) {
                    this.A = TypeTable.newBuilder(this.A).mergeFrom(typeTable).buildPartial();
                } else {
                    this.A = typeTable;
                }
                this.f34016o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34016o |= 1;
                this.f34017p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34016o |= 4;
                this.f34019r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f34016o |= 2;
                this.f34018q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f34016o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34024w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f34016o |= 16;
                this.f34021t = i10;
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
                if (!function.f34010u.isEmpty()) {
                    if (this.f34022u.isEmpty()) {
                        this.f34022u = function.f34010u;
                        this.f34016o &= -33;
                    } else {
                        m();
                        this.f34022u.addAll(function.f34010u);
                    }
                }
                if (function.hasReceiverType()) {
                    mergeReceiverType(function.getReceiverType());
                }
                if (function.hasReceiverTypeId()) {
                    setReceiverTypeId(function.getReceiverTypeId());
                }
                if (!function.f34013x.isEmpty()) {
                    if (this.f34025x.isEmpty()) {
                        this.f34025x = function.f34013x;
                        this.f34016o &= -257;
                    } else {
                        l();
                        this.f34025x.addAll(function.f34013x);
                    }
                }
                if (!function.f34014y.isEmpty()) {
                    if (this.f34026y.isEmpty()) {
                        this.f34026y = function.f34014y;
                        this.f34016o &= -513;
                    } else {
                        k();
                        this.f34026y.addAll(function.f34014y);
                    }
                }
                if (!function.A.isEmpty()) {
                    if (this.f34027z.isEmpty()) {
                        this.f34027z = function.A;
                        this.f34016o &= -1025;
                    } else {
                        n();
                        this.f34027z.addAll(function.A);
                    }
                }
                if (function.hasTypeTable()) {
                    mergeTypeTable(function.getTypeTable());
                }
                if (!function.C.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = function.C;
                        this.f34016o &= -4097;
                    } else {
                        o();
                        this.B.addAll(function.C);
                    }
                }
                if (function.hasContract()) {
                    mergeContract(function.getContract());
                }
                if (!function.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = function.E;
                        this.f34016o &= -16385;
                    } else {
                        j();
                        this.D.addAll(function.E);
                    }
                }
                f(function);
                setUnknownFields(getUnknownFields().concat(function.f34003i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            this.f34005p = 6;
            this.f34006q = 6;
            this.f34007r = 0;
            this.f34008s = Type.getDefaultInstance();
            this.f34009t = 0;
            List list = Collections.EMPTY_LIST;
            this.f34010u = list;
            this.f34011v = Type.getDefaultInstance();
            this.f34012w = 0;
            this.f34013x = list;
            this.f34014y = list;
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
            return (Type) this.f34013x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f34013x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f34014y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f34013x;
        }

        public Contract getContract() {
            return this.D;
        }

        public int getFlags() {
            return this.f34005p;
        }

        public int getName() {
            return this.f34007r;
        }

        public int getOldFlags() {
            return this.f34006q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Function> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f34011v;
        }

        public int getReceiverTypeId() {
            return this.f34012w;
        }

        public Type getReturnType() {
            return this.f34008s;
        }

        public int getReturnTypeId() {
            return this.f34009t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34004o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34006q);
            } else {
                i10 = 0;
            }
            if ((this.f34004o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34007r);
            }
            if ((this.f34004o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34008s);
            }
            for (int i12 = 0; i12 < this.f34010u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34010u.get(i12));
            }
            if ((this.f34004o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34011v);
            }
            for (int i13 = 0; i13 < this.A.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.A.get(i13));
            }
            if ((this.f34004o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34009t);
            }
            if ((this.f34004o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f34012w);
            }
            if ((this.f34004o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34005p);
            }
            for (int i14 = 0; i14 < this.f34013x.size(); i14++) {
                i10 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.f34013x.get(i14));
            }
            int i15 = 0;
            for (int i16 = 0; i16 < this.f34014y.size(); i16++) {
                i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34014y.get(i16)).intValue());
            }
            int i17 = i10 + i15;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
            }
            this.f34015z = i15;
            if ((this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i17 += CodedOutputStream.computeMessageSize(30, this.B);
            }
            int i18 = 0;
            for (int i19 = 0; i19 < this.C.size(); i19++) {
                i18 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.C.get(i19)).intValue());
            }
            int size = i17 + i18 + (getVersionRequirementList().size() * 2);
            if ((this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                size += CodedOutputStream.computeMessageSize(32, this.D);
            }
            for (int i20 = 0; i20 < this.E.size(); i20++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.E.get(i20));
            }
            int j10 = size + j() + this.f34003i.size();
            this.G = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34010u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34010u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34010u;
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
            if ((this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34004o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34004o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f34004o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f34004o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f34004o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f34004o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f34004o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f34004o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f34006q);
            }
            if ((this.f34004o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f34007r);
            }
            if ((this.f34004o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f34008s);
            }
            for (int i10 = 0; i10 < this.f34010u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34010u.get(i10));
            }
            if ((this.f34004o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f34011v);
            }
            for (int i11 = 0; i11 < this.A.size(); i11++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.A.get(i11));
            }
            if ((this.f34004o & 16) == 16) {
                codedOutputStream.writeInt32(7, this.f34009t);
            }
            if ((this.f34004o & 64) == 64) {
                codedOutputStream.writeInt32(8, this.f34012w);
            }
            if ((this.f34004o & 1) == 1) {
                codedOutputStream.writeInt32(9, this.f34005p);
            }
            for (int i12 = 0; i12 < this.f34013x.size(); i12++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.f34013x.get(i12));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(90);
                codedOutputStream.writeRawVarint32(this.f34015z);
            }
            for (int i13 = 0; i13 < this.f34014y.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34014y.get(i13)).intValue());
            }
            if ((this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(30, this.B);
            }
            for (int i14 = 0; i14 < this.C.size(); i14++) {
                codedOutputStream.writeInt32(31, ((Integer) this.C.get(i14)).intValue());
            }
            if ((this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(32, this.D);
            }
            for (int i15 = 0; i15 < this.E.size(); i15++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.E.get(i15));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34003i);
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
            this.f34015z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34003i = extendableBuilder.getUnknownFields();
        }

        private Function(boolean z10) {
            this.f34015z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34003i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v0 */
        /* JADX WARN: Type inference failed for: r8v1 */
        /* JADX WARN: Type inference failed for: r8v2, types: [boolean] */
        private Function(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            this.f34015z = -1;
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
                                    this.f34004o |= 2;
                                    this.f34006q = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 16:
                                    z10 = z11;
                                    this.f34004o |= 4;
                                    this.f34007r = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    z10 = z11;
                                    Type.Builder builder = (this.f34004o & 8) == 8 ? this.f34008s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34008s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34008s = builder.buildPartial();
                                    }
                                    this.f34004o |= 8;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    z10 = z11;
                                    boolean z14 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z14) {
                                        this.f34010u = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f34010u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 42:
                                    z10 = z11;
                                    Type.Builder builder2 = (this.f34004o & 32) == 32 ? this.f34011v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34011v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f34011v = builder2.buildPartial();
                                    }
                                    this.f34004o |= 32;
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
                                    this.f34004o |= 16;
                                    this.f34009t = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 64:
                                    z10 = z11;
                                    this.f34004o |= 64;
                                    this.f34012w = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 72:
                                    z10 = z11;
                                    this.f34004o |= 1;
                                    this.f34005p = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 82:
                                    z10 = z11;
                                    boolean z16 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z16) {
                                        this.f34013x = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f34013x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 88:
                                    z10 = z11;
                                    boolean z17 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z17) {
                                        this.f34014y = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f34014y.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                            this.f34014y = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34014y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 242:
                                    z10 = z11;
                                    TypeTable.Builder builder3 = (this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.B.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.B = typeTable;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(typeTable);
                                        this.B = builder3.buildPartial();
                                    }
                                    this.f34004o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
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
                                    Contract.Builder builder4 = (this.f34004o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.D.toBuilder() : null;
                                    Contract contract = (Contract) codedInputStream.readMessage(Contract.PARSER, extensionRegistryLite);
                                    this.D = contract;
                                    if (builder4 != null) {
                                        builder4.mergeFrom(contract);
                                        this.D = builder4.buildPartial();
                                    }
                                    this.f34004o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
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
                                this.f34010u = Collections.unmodifiableList(this.f34010u);
                            }
                            if (((z13 ? 1 : 0) & true) == r82) {
                                this.A = Collections.unmodifiableList(this.A);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f34013x = Collections.unmodifiableList(this.f34013x);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f34014y = Collections.unmodifiableList(this.f34014y);
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
                                this.f34003i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34003i = newOutput.toByteString();
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
                        this.f34010u = Collections.unmodifiableList(this.f34010u);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.A = Collections.unmodifiableList(this.A);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f34013x = Collections.unmodifiableList(this.f34013x);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f34014y = Collections.unmodifiableList(this.f34014y);
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
                        this.f34003i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34003i = newOutput.toByteString();
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
        private static Internal.EnumLiteMap f34028e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f34030d;

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
            this.f34030d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f34030d;
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
        private static Internal.EnumLiteMap f34031e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f34033d;

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
            this.f34033d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f34033d;
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
        private static final Package f34034w;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34035i;

        /* renamed from: o  reason: collision with root package name */
        private int f34036o;

        /* renamed from: p  reason: collision with root package name */
        private List f34037p;

        /* renamed from: q  reason: collision with root package name */
        private List f34038q;

        /* renamed from: r  reason: collision with root package name */
        private List f34039r;

        /* renamed from: s  reason: collision with root package name */
        private TypeTable f34040s;

        /* renamed from: t  reason: collision with root package name */
        private VersionRequirementTable f34041t;

        /* renamed from: u  reason: collision with root package name */
        private byte f34042u;

        /* renamed from: v  reason: collision with root package name */
        private int f34043v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Package, Builder> implements PackageOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34044o;

            /* renamed from: p  reason: collision with root package name */
            private List f34045p;

            /* renamed from: q  reason: collision with root package name */
            private List f34046q;

            /* renamed from: r  reason: collision with root package name */
            private List f34047r;

            /* renamed from: s  reason: collision with root package name */
            private TypeTable f34048s;

            /* renamed from: t  reason: collision with root package name */
            private VersionRequirementTable f34049t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34045p = list;
                this.f34046q = list;
                this.f34047r = list;
                this.f34048s = TypeTable.getDefaultInstance();
                this.f34049t = VersionRequirementTable.getDefaultInstance();
                m();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34044o & 1) != 1) {
                    this.f34045p = new ArrayList(this.f34045p);
                    this.f34044o |= 1;
                }
            }

            private void k() {
                if ((this.f34044o & 2) != 2) {
                    this.f34046q = new ArrayList(this.f34046q);
                    this.f34044o |= 2;
                }
            }

            private void l() {
                if ((this.f34044o & 4) != 4) {
                    this.f34047r = new ArrayList(this.f34047r);
                    this.f34044o |= 4;
                }
            }

            private void m() {
            }

            public Package buildPartial() {
                Package r02 = new Package(this);
                int i10 = this.f34044o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34045p = Collections.unmodifiableList(this.f34045p);
                    this.f34044o &= -2;
                }
                r02.f34037p = this.f34045p;
                if ((this.f34044o & 2) == 2) {
                    this.f34046q = Collections.unmodifiableList(this.f34046q);
                    this.f34044o &= -3;
                }
                r02.f34038q = this.f34046q;
                if ((this.f34044o & 4) == 4) {
                    this.f34047r = Collections.unmodifiableList(this.f34047r);
                    this.f34044o &= -5;
                }
                r02.f34039r = this.f34047r;
                if ((i10 & 8) != 8) {
                    i11 = 0;
                }
                r02.f34040s = this.f34048s;
                if ((i10 & 16) == 16) {
                    i11 |= 2;
                }
                r02.f34041t = this.f34049t;
                r02.f34036o = i11;
                return r02;
            }

            public Function getFunction(int i10) {
                return (Function) this.f34045p.get(i10);
            }

            public int getFunctionCount() {
                return this.f34045p.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.f34046q.get(i10);
            }

            public int getPropertyCount() {
                return this.f34046q.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.f34047r.get(i10);
            }

            public int getTypeAliasCount() {
                return this.f34047r.size();
            }

            public TypeTable getTypeTable() {
                return this.f34048s;
            }

            public boolean hasTypeTable() {
                if ((this.f34044o & 8) == 8) {
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
                if ((this.f34044o & 8) == 8 && this.f34048s != TypeTable.getDefaultInstance()) {
                    this.f34048s = TypeTable.newBuilder(this.f34048s).mergeFrom(typeTable).buildPartial();
                } else {
                    this.f34048s = typeTable;
                }
                this.f34044o |= 8;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f34044o & 16) == 16 && this.f34049t != VersionRequirementTable.getDefaultInstance()) {
                    this.f34049t = VersionRequirementTable.newBuilder(this.f34049t).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.f34049t = versionRequirementTable;
                }
                this.f34044o |= 16;
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
                if (!r32.f34037p.isEmpty()) {
                    if (this.f34045p.isEmpty()) {
                        this.f34045p = r32.f34037p;
                        this.f34044o &= -2;
                    } else {
                        j();
                        this.f34045p.addAll(r32.f34037p);
                    }
                }
                if (!r32.f34038q.isEmpty()) {
                    if (this.f34046q.isEmpty()) {
                        this.f34046q = r32.f34038q;
                        this.f34044o &= -3;
                    } else {
                        k();
                        this.f34046q.addAll(r32.f34038q);
                    }
                }
                if (!r32.f34039r.isEmpty()) {
                    if (this.f34047r.isEmpty()) {
                        this.f34047r = r32.f34039r;
                        this.f34044o &= -5;
                    } else {
                        l();
                        this.f34047r.addAll(r32.f34039r);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f34035i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            f34034w = r02;
            r02.w();
        }

        public static Package getDefaultInstance() {
            return f34034w;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static Package parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void w() {
            List list = Collections.EMPTY_LIST;
            this.f34037p = list;
            this.f34038q = list;
            this.f34039r = list;
            this.f34040s = TypeTable.getDefaultInstance();
            this.f34041t = VersionRequirementTable.getDefaultInstance();
        }

        public Function getFunction(int i10) {
            return (Function) this.f34037p.get(i10);
        }

        public int getFunctionCount() {
            return this.f34037p.size();
        }

        public List<Function> getFunctionList() {
            return this.f34037p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Package> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.f34038q.get(i10);
        }

        public int getPropertyCount() {
            return this.f34038q.size();
        }

        public List<Property> getPropertyList() {
            return this.f34038q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34043v;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34037p.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f34037p.get(i12));
            }
            for (int i13 = 0; i13 < this.f34038q.size(); i13++) {
                i11 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34038q.get(i13));
            }
            for (int i14 = 0; i14 < this.f34039r.size(); i14++) {
                i11 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f34039r.get(i14));
            }
            if ((this.f34036o & 1) == 1) {
                i11 += CodedOutputStream.computeMessageSize(30, this.f34040s);
            }
            if ((this.f34036o & 2) == 2) {
                i11 += CodedOutputStream.computeMessageSize(32, this.f34041t);
            }
            int j10 = i11 + j() + this.f34035i.size();
            this.f34043v = j10;
            return j10;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.f34039r.get(i10);
        }

        public int getTypeAliasCount() {
            return this.f34039r.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.f34039r;
        }

        public TypeTable getTypeTable() {
            return this.f34040s;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.f34041t;
        }

        public boolean hasTypeTable() {
            if ((this.f34036o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f34036o & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34042u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                if (!getFunction(i10).isInitialized()) {
                    this.f34042u = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                if (!getProperty(i11).isInitialized()) {
                    this.f34042u = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                if (!getTypeAlias(i12).isInitialized()) {
                    this.f34042u = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.f34042u = (byte) 0;
                return false;
            } else if (!i()) {
                this.f34042u = (byte) 0;
                return false;
            } else {
                this.f34042u = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            for (int i10 = 0; i10 < this.f34037p.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f34037p.get(i10));
            }
            for (int i11 = 0; i11 < this.f34038q.size(); i11++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34038q.get(i11));
            }
            for (int i12 = 0; i12 < this.f34039r.size(); i12++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f34039r.get(i12));
            }
            if ((this.f34036o & 1) == 1) {
                codedOutputStream.writeMessage(30, this.f34040s);
            }
            if ((this.f34036o & 2) == 2) {
                codedOutputStream.writeMessage(32, this.f34041t);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34035i);
        }

        public static Builder newBuilder(Package r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Package getDefaultInstanceForType() {
            return f34034w;
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
            this.f34042u = (byte) -1;
            this.f34043v = -1;
            this.f34035i = extendableBuilder.getUnknownFields();
        }

        private Package(boolean z10) {
            this.f34042u = (byte) -1;
            this.f34043v = -1;
            this.f34035i = ByteString.EMPTY;
        }

        private Package(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34042u = (byte) -1;
            this.f34043v = -1;
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
                                    this.f34037p = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f34037p.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                            } else if (readTag == 34) {
                                boolean z13 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z13) {
                                    this.f34038q = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f34038q.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                            } else if (readTag != 42) {
                                if (readTag == 242) {
                                    TypeTable.Builder builder = (this.f34036o & 1) == 1 ? this.f34040s.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.f34040s = typeTable;
                                    if (builder != null) {
                                        builder.mergeFrom(typeTable);
                                        this.f34040s = builder.buildPartial();
                                    }
                                    this.f34036o |= 1;
                                } else if (readTag != 258) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    VersionRequirementTable.Builder builder2 = (this.f34036o & 2) == 2 ? this.f34041t.toBuilder() : null;
                                    VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                    this.f34041t = versionRequirementTable;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(versionRequirementTable);
                                        this.f34041t = builder2.buildPartial();
                                    }
                                    this.f34036o |= 2;
                                }
                            } else {
                                boolean z14 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z14) {
                                    this.f34039r = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f34039r.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f34037p = Collections.unmodifiableList(this.f34037p);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34038q = Collections.unmodifiableList(this.f34038q);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34039r = Collections.unmodifiableList(this.f34039r);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34035i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34035i = newOutput.toByteString();
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
                this.f34037p = Collections.unmodifiableList(this.f34037p);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f34038q = Collections.unmodifiableList(this.f34038q);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f34039r = Collections.unmodifiableList(this.f34039r);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34035i = newOutput.toByteString();
                throw th4;
            }
            this.f34035i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PackageFragment extends GeneratedMessageLite.ExtendableMessage<PackageFragment> implements PackageFragmentOrBuilder {
        public static Parser<PackageFragment> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final PackageFragment f34050v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34051i;

        /* renamed from: o  reason: collision with root package name */
        private int f34052o;

        /* renamed from: p  reason: collision with root package name */
        private StringTable f34053p;

        /* renamed from: q  reason: collision with root package name */
        private QualifiedNameTable f34054q;

        /* renamed from: r  reason: collision with root package name */
        private Package f34055r;

        /* renamed from: s  reason: collision with root package name */
        private List f34056s;

        /* renamed from: t  reason: collision with root package name */
        private byte f34057t;

        /* renamed from: u  reason: collision with root package name */
        private int f34058u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<PackageFragment, Builder> implements PackageFragmentOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34059o;

            /* renamed from: p  reason: collision with root package name */
            private StringTable f34060p = StringTable.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private QualifiedNameTable f34061q = QualifiedNameTable.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private Package f34062r = Package.getDefaultInstance();

            /* renamed from: s  reason: collision with root package name */
            private List f34063s = Collections.EMPTY_LIST;

            private Builder() {
                k();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34059o & 8) != 8) {
                    this.f34063s = new ArrayList(this.f34063s);
                    this.f34059o |= 8;
                }
            }

            private void k() {
            }

            public PackageFragment buildPartial() {
                PackageFragment packageFragment = new PackageFragment(this);
                int i10 = this.f34059o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                packageFragment.f34053p = this.f34060p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                packageFragment.f34054q = this.f34061q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                packageFragment.f34055r = this.f34062r;
                if ((this.f34059o & 8) == 8) {
                    this.f34063s = Collections.unmodifiableList(this.f34063s);
                    this.f34059o &= -9;
                }
                packageFragment.f34056s = this.f34063s;
                packageFragment.f34052o = i11;
                return packageFragment;
            }

            public Class getClass_(int i10) {
                return (Class) this.f34063s.get(i10);
            }

            public int getClass_Count() {
                return this.f34063s.size();
            }

            public Package getPackage() {
                return this.f34062r;
            }

            public QualifiedNameTable getQualifiedNames() {
                return this.f34061q;
            }

            public boolean hasPackage() {
                if ((this.f34059o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasQualifiedNames() {
                if ((this.f34059o & 2) == 2) {
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
                if ((this.f34059o & 4) == 4 && this.f34062r != Package.getDefaultInstance()) {
                    this.f34062r = Package.newBuilder(this.f34062r).mergeFrom(r42).buildPartial();
                } else {
                    this.f34062r = r42;
                }
                this.f34059o |= 4;
                return this;
            }

            public Builder mergeQualifiedNames(QualifiedNameTable qualifiedNameTable) {
                if ((this.f34059o & 2) == 2 && this.f34061q != QualifiedNameTable.getDefaultInstance()) {
                    this.f34061q = QualifiedNameTable.newBuilder(this.f34061q).mergeFrom(qualifiedNameTable).buildPartial();
                } else {
                    this.f34061q = qualifiedNameTable;
                }
                this.f34059o |= 2;
                return this;
            }

            public Builder mergeStrings(StringTable stringTable) {
                if ((this.f34059o & 1) == 1 && this.f34060p != StringTable.getDefaultInstance()) {
                    this.f34060p = StringTable.newBuilder(this.f34060p).mergeFrom(stringTable).buildPartial();
                } else {
                    this.f34060p = stringTable;
                }
                this.f34059o |= 1;
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
                if (!packageFragment.f34056s.isEmpty()) {
                    if (this.f34063s.isEmpty()) {
                        this.f34063s = packageFragment.f34056s;
                        this.f34059o &= -9;
                    } else {
                        j();
                        this.f34063s.addAll(packageFragment.f34056s);
                    }
                }
                f(packageFragment);
                setUnknownFields(getUnknownFields().concat(packageFragment.f34051i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            f34050v = packageFragment;
            packageFragment.t();
        }

        public static PackageFragment getDefaultInstance() {
            return f34050v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static PackageFragment parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void t() {
            this.f34053p = StringTable.getDefaultInstance();
            this.f34054q = QualifiedNameTable.getDefaultInstance();
            this.f34055r = Package.getDefaultInstance();
            this.f34056s = Collections.EMPTY_LIST;
        }

        public Class getClass_(int i10) {
            return (Class) this.f34056s.get(i10);
        }

        public int getClass_Count() {
            return this.f34056s.size();
        }

        public List<Class> getClass_List() {
            return this.f34056s;
        }

        public Package getPackage() {
            return this.f34055r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<PackageFragment> getParserForType() {
            return PARSER;
        }

        public QualifiedNameTable getQualifiedNames() {
            return this.f34054q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34058u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34052o & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f34053p);
            } else {
                i10 = 0;
            }
            if ((this.f34052o & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f34054q);
            }
            if ((this.f34052o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34055r);
            }
            for (int i12 = 0; i12 < this.f34056s.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34056s.get(i12));
            }
            int j10 = i10 + j() + this.f34051i.size();
            this.f34058u = j10;
            return j10;
        }

        public StringTable getStrings() {
            return this.f34053p;
        }

        public boolean hasPackage() {
            if ((this.f34052o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasQualifiedNames() {
            if ((this.f34052o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasStrings() {
            if ((this.f34052o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34057t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                this.f34057t = (byte) 0;
                return false;
            } else if (hasPackage() && !getPackage().isInitialized()) {
                this.f34057t = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        this.f34057t = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34057t = (byte) 0;
                    return false;
                }
                this.f34057t = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34052o & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f34053p);
            }
            if ((this.f34052o & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f34054q);
            }
            if ((this.f34052o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f34055r);
            }
            for (int i10 = 0; i10 < this.f34056s.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34056s.get(i10));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34051i);
        }

        public static Builder newBuilder(PackageFragment packageFragment) {
            return newBuilder().mergeFrom(packageFragment);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public PackageFragment getDefaultInstanceForType() {
            return f34050v;
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
            this.f34057t = (byte) -1;
            this.f34058u = -1;
            this.f34051i = extendableBuilder.getUnknownFields();
        }

        private PackageFragment(boolean z10) {
            this.f34057t = (byte) -1;
            this.f34058u = -1;
            this.f34051i = ByteString.EMPTY;
        }

        private PackageFragment(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34057t = (byte) -1;
            this.f34058u = -1;
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
                                StringTable.Builder builder = (this.f34052o & 1) == 1 ? this.f34053p.toBuilder() : null;
                                StringTable stringTable = (StringTable) codedInputStream.readMessage(StringTable.PARSER, extensionRegistryLite);
                                this.f34053p = stringTable;
                                if (builder != null) {
                                    builder.mergeFrom(stringTable);
                                    this.f34053p = builder.buildPartial();
                                }
                                this.f34052o |= 1;
                            } else if (readTag == 18) {
                                QualifiedNameTable.Builder builder2 = (this.f34052o & 2) == 2 ? this.f34054q.toBuilder() : null;
                                QualifiedNameTable qualifiedNameTable = (QualifiedNameTable) codedInputStream.readMessage(QualifiedNameTable.PARSER, extensionRegistryLite);
                                this.f34054q = qualifiedNameTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(qualifiedNameTable);
                                    this.f34054q = builder2.buildPartial();
                                }
                                this.f34052o |= 2;
                            } else if (readTag == 26) {
                                Package.Builder builder3 = (this.f34052o & 4) == 4 ? this.f34055r.toBuilder() : null;
                                Package r62 = (Package) codedInputStream.readMessage(Package.PARSER, extensionRegistryLite);
                                this.f34055r = r62;
                                if (builder3 != null) {
                                    builder3.mergeFrom(r62);
                                    this.f34055r = builder3.buildPartial();
                                }
                                this.f34052o |= 4;
                            } else if (readTag != 34) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f34056s = new ArrayList();
                                    z11 = true;
                                }
                                this.f34056s.add(codedInputStream.readMessage(Class.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f34056s = Collections.unmodifiableList(this.f34056s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34051i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34051i = newOutput.toByteString();
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
                this.f34056s = Collections.unmodifiableList(this.f34056s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34051i = newOutput.toByteString();
                throw th4;
            }
            this.f34051i = newOutput.toByteString();
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
        private final ByteString f34064i;

        /* renamed from: o  reason: collision with root package name */
        private int f34065o;

        /* renamed from: p  reason: collision with root package name */
        private int f34066p;

        /* renamed from: q  reason: collision with root package name */
        private int f34067q;

        /* renamed from: r  reason: collision with root package name */
        private int f34068r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34069s;

        /* renamed from: t  reason: collision with root package name */
        private int f34070t;

        /* renamed from: u  reason: collision with root package name */
        private List f34071u;

        /* renamed from: v  reason: collision with root package name */
        private Type f34072v;

        /* renamed from: w  reason: collision with root package name */
        private int f34073w;

        /* renamed from: x  reason: collision with root package name */
        private List f34074x;

        /* renamed from: y  reason: collision with root package name */
        private List f34075y;

        /* renamed from: z  reason: collision with root package name */
        private int f34076z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Property, Builder> implements PropertyOrBuilder {
            private int A;
            private int B;
            private List C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f34077o;

            /* renamed from: r  reason: collision with root package name */
            private int f34080r;

            /* renamed from: t  reason: collision with root package name */
            private int f34082t;

            /* renamed from: u  reason: collision with root package name */
            private List f34083u;

            /* renamed from: v  reason: collision with root package name */
            private Type f34084v;

            /* renamed from: w  reason: collision with root package name */
            private int f34085w;

            /* renamed from: x  reason: collision with root package name */
            private List f34086x;

            /* renamed from: y  reason: collision with root package name */
            private List f34087y;

            /* renamed from: z  reason: collision with root package name */
            private ValueParameter f34088z;

            /* renamed from: p  reason: collision with root package name */
            private int f34078p = 518;

            /* renamed from: q  reason: collision with root package name */
            private int f34079q = 2054;

            /* renamed from: s  reason: collision with root package name */
            private Type f34081s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34083u = list;
                this.f34084v = Type.getDefaultInstance();
                this.f34086x = list;
                this.f34087y = list;
                this.f34088z = ValueParameter.getDefaultInstance();
                this.C = list;
                this.D = list;
                o();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34077o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f34077o |= 16384;
                }
            }

            private void k() {
                if ((this.f34077o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34087y = new ArrayList(this.f34087y);
                    this.f34077o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34077o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34086x = new ArrayList(this.f34086x);
                    this.f34077o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f34077o & 32) != 32) {
                    this.f34083u = new ArrayList(this.f34083u);
                    this.f34077o |= 32;
                }
            }

            private void n() {
                if ((this.f34077o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f34077o |= 8192;
                }
            }

            private void o() {
            }

            public Property buildPartial() {
                Property property = new Property(this);
                int i10 = this.f34077o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                property.f34066p = this.f34078p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                property.f34067q = this.f34079q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                property.f34068r = this.f34080r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                property.f34069s = this.f34081s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                property.f34070t = this.f34082t;
                if ((this.f34077o & 32) == 32) {
                    this.f34083u = Collections.unmodifiableList(this.f34083u);
                    this.f34077o &= -33;
                }
                property.f34071u = this.f34083u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                property.f34072v = this.f34084v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                property.f34073w = this.f34085w;
                if ((this.f34077o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34086x = Collections.unmodifiableList(this.f34086x);
                    this.f34077o &= -257;
                }
                property.f34074x = this.f34086x;
                if ((this.f34077o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34087y = Collections.unmodifiableList(this.f34087y);
                    this.f34077o &= -513;
                }
                property.f34075y = this.f34087y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                property.A = this.f34088z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                property.B = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                property.C = this.B;
                if ((this.f34077o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f34077o &= -8193;
                }
                property.D = this.C;
                if ((this.f34077o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f34077o &= -16385;
                }
                property.E = this.D;
                property.f34065o = i11;
                return property;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f34086x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f34086x.size();
            }

            public Type getReceiverType() {
                return this.f34084v;
            }

            public Type getReturnType() {
                return this.f34081s;
            }

            public ValueParameter getSetterValueParameter() {
                return this.f34088z;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34083u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34083u.size();
            }

            public boolean hasName() {
                if ((this.f34077o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f34077o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f34077o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasSetterValueParameter() {
                if ((this.f34077o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
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
                if ((this.f34077o & 64) == 64 && this.f34084v != Type.getDefaultInstance()) {
                    this.f34084v = Type.newBuilder(this.f34084v).mergeFrom(type).buildPartial();
                } else {
                    this.f34084v = type;
                }
                this.f34077o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f34077o & 8) == 8 && this.f34081s != Type.getDefaultInstance()) {
                    this.f34081s = Type.newBuilder(this.f34081s).mergeFrom(type).buildPartial();
                } else {
                    this.f34081s = type;
                }
                this.f34077o |= 8;
                return this;
            }

            public Builder mergeSetterValueParameter(ValueParameter valueParameter) {
                if ((this.f34077o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 && this.f34088z != ValueParameter.getDefaultInstance()) {
                    this.f34088z = ValueParameter.newBuilder(this.f34088z).mergeFrom(valueParameter).buildPartial();
                } else {
                    this.f34088z = valueParameter;
                }
                this.f34077o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34077o |= 1;
                this.f34078p = i10;
                return this;
            }

            public Builder setGetterFlags(int i10) {
                this.f34077o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                this.A = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34077o |= 4;
                this.f34080r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f34077o |= 2;
                this.f34079q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f34077o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34085w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f34077o |= 16;
                this.f34082t = i10;
                return this;
            }

            public Builder setSetterFlags(int i10) {
                this.f34077o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
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
                if (!property.f34071u.isEmpty()) {
                    if (this.f34083u.isEmpty()) {
                        this.f34083u = property.f34071u;
                        this.f34077o &= -33;
                    } else {
                        m();
                        this.f34083u.addAll(property.f34071u);
                    }
                }
                if (property.hasReceiverType()) {
                    mergeReceiverType(property.getReceiverType());
                }
                if (property.hasReceiverTypeId()) {
                    setReceiverTypeId(property.getReceiverTypeId());
                }
                if (!property.f34074x.isEmpty()) {
                    if (this.f34086x.isEmpty()) {
                        this.f34086x = property.f34074x;
                        this.f34077o &= -257;
                    } else {
                        l();
                        this.f34086x.addAll(property.f34074x);
                    }
                }
                if (!property.f34075y.isEmpty()) {
                    if (this.f34087y.isEmpty()) {
                        this.f34087y = property.f34075y;
                        this.f34077o &= -513;
                    } else {
                        k();
                        this.f34087y.addAll(property.f34075y);
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
                        this.f34077o &= -8193;
                    } else {
                        n();
                        this.C.addAll(property.D);
                    }
                }
                if (!property.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = property.E;
                        this.f34077o &= -16385;
                    } else {
                        j();
                        this.D.addAll(property.E);
                    }
                }
                f(property);
                setUnknownFields(getUnknownFields().concat(property.f34064i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            this.f34066p = 518;
            this.f34067q = 2054;
            this.f34068r = 0;
            this.f34069s = Type.getDefaultInstance();
            this.f34070t = 0;
            List list = Collections.EMPTY_LIST;
            this.f34071u = list;
            this.f34072v = Type.getDefaultInstance();
            this.f34073w = 0;
            this.f34074x = list;
            this.f34075y = list;
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
            return (Type) this.f34074x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f34074x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f34075y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f34074x;
        }

        public int getFlags() {
            return this.f34066p;
        }

        public int getGetterFlags() {
            return this.B;
        }

        public int getName() {
            return this.f34068r;
        }

        public int getOldFlags() {
            return this.f34067q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Property> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f34072v;
        }

        public int getReceiverTypeId() {
            return this.f34073w;
        }

        public Type getReturnType() {
            return this.f34069s;
        }

        public int getReturnTypeId() {
            return this.f34070t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34065o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34067q);
            } else {
                i10 = 0;
            }
            if ((this.f34065o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34068r);
            }
            if ((this.f34065o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34069s);
            }
            for (int i12 = 0; i12 < this.f34071u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f34071u.get(i12));
            }
            if ((this.f34065o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34072v);
            }
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeMessageSize(6, this.A);
            }
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeInt32Size(7, this.B);
            }
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(8, this.C);
            }
            if ((this.f34065o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34070t);
            }
            if ((this.f34065o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(10, this.f34073w);
            }
            if ((this.f34065o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f34066p);
            }
            for (int i13 = 0; i13 < this.f34074x.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(12, (MessageLite) this.f34074x.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f34075y.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34075y.get(i15)).intValue());
            }
            int i16 = i10 + i14;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i16 = i16 + 1 + CodedOutputStream.computeInt32SizeNoTag(i14);
            }
            this.f34076z = i14;
            int i17 = 0;
            for (int i18 = 0; i18 < this.D.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.D.get(i18)).intValue());
            }
            int size = i16 + i17 + (getVersionRequirementList().size() * 2);
            for (int i19 = 0; i19 < this.E.size(); i19++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.E.get(i19));
            }
            int j10 = size + j() + this.f34064i.size();
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
            return (TypeParameter) this.f34071u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34071u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34071u;
        }

        public List<Integer> getVersionRequirementList() {
            return this.D;
        }

        public boolean hasFlags() {
            if ((this.f34065o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetterFlags() {
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34065o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f34065o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f34065o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f34065o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f34065o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f34065o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasSetterFlags() {
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasSetterValueParameter() {
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f34065o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f34067q);
            }
            if ((this.f34065o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f34068r);
            }
            if ((this.f34065o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f34069s);
            }
            for (int i10 = 0; i10 < this.f34071u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f34071u.get(i10));
            }
            if ((this.f34065o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f34072v);
            }
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(6, this.A);
            }
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeInt32(7, this.B);
            }
            if ((this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(8, this.C);
            }
            if ((this.f34065o & 16) == 16) {
                codedOutputStream.writeInt32(9, this.f34070t);
            }
            if ((this.f34065o & 64) == 64) {
                codedOutputStream.writeInt32(10, this.f34073w);
            }
            if ((this.f34065o & 1) == 1) {
                codedOutputStream.writeInt32(11, this.f34066p);
            }
            for (int i11 = 0; i11 < this.f34074x.size(); i11++) {
                codedOutputStream.writeMessage(12, (MessageLite) this.f34074x.get(i11));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(106);
                codedOutputStream.writeRawVarint32(this.f34076z);
            }
            for (int i12 = 0; i12 < this.f34075y.size(); i12++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34075y.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.D.size(); i13++) {
                codedOutputStream.writeInt32(31, ((Integer) this.D.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.E.size(); i14++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.E.get(i14));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34064i);
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
            this.f34076z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34064i = extendableBuilder.getUnknownFields();
        }

        private Property(boolean z10) {
            this.f34076z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f34064i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private Property(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34076z = -1;
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
                                    this.f34065o |= 2;
                                    this.f34067q = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f34065o |= 4;
                                    this.f34068r = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    Type.Builder builder = (this.f34065o & 8) == 8 ? this.f34069s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34069s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34069s = builder.buildPartial();
                                    }
                                    this.f34065o |= 8;
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    boolean z12 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z12) {
                                        this.f34071u = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f34071u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case 42:
                                    Type.Builder builder2 = (this.f34065o & 32) == 32 ? this.f34072v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34072v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f34072v = builder2.buildPartial();
                                    }
                                    this.f34065o |= 32;
                                    continue;
                                case 50:
                                    ValueParameter.Builder builder3 = (this.f34065o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.A.toBuilder() : null;
                                    ValueParameter valueParameter = (ValueParameter) codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite);
                                    this.A = valueParameter;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(valueParameter);
                                        this.A = builder3.buildPartial();
                                    }
                                    this.f34065o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34065o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f34065o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f34065o |= 16;
                                    this.f34070t = codedInputStream.readInt32();
                                    continue;
                                case 80:
                                    this.f34065o |= 64;
                                    this.f34073w = codedInputStream.readInt32();
                                    continue;
                                case 88:
                                    this.f34065o |= 1;
                                    this.f34066p = codedInputStream.readInt32();
                                    continue;
                                case 98:
                                    boolean z13 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z13) {
                                        this.f34074x = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f34074x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                case 104:
                                    boolean z14 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z14) {
                                        this.f34075y = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f34075y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case 106:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z15 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z15) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f34075y = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34075y.add(Integer.valueOf(codedInputStream.readInt32()));
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
                            this.f34071u = Collections.unmodifiableList(this.f34071u);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34074x = Collections.unmodifiableList(this.f34074x);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f34075y = Collections.unmodifiableList(this.f34075y);
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
                            this.f34064i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34064i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } else {
                    if ((z11 ? 1 : 0) & true) {
                        this.f34071u = Collections.unmodifiableList(this.f34071u);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f34074x = Collections.unmodifiableList(this.f34074x);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f34075y = Collections.unmodifiableList(this.f34075y);
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
                        this.f34064i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34064i = newOutput.toByteString();
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
        private static final QualifiedNameTable f34089q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34090e;

        /* renamed from: i  reason: collision with root package name */
        private List f34091i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34092o;

        /* renamed from: p  reason: collision with root package name */
        private int f34093p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<QualifiedNameTable, Builder> implements QualifiedNameTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34094e;

            /* renamed from: i  reason: collision with root package name */
            private List f34095i = Collections.EMPTY_LIST;

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
                if ((this.f34094e & 1) != 1) {
                    this.f34095i = new ArrayList(this.f34095i);
                    this.f34094e |= 1;
                }
            }

            private void e() {
            }

            public QualifiedNameTable buildPartial() {
                QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(this);
                if ((this.f34094e & 1) == 1) {
                    this.f34095i = Collections.unmodifiableList(this.f34095i);
                    this.f34094e &= -2;
                }
                qualifiedNameTable.f34091i = this.f34095i;
                return qualifiedNameTable;
            }

            public QualifiedName getQualifiedName(int i10) {
                return (QualifiedName) this.f34095i.get(i10);
            }

            public int getQualifiedNameCount() {
                return this.f34095i.size();
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
                if (!qualifiedNameTable.f34091i.isEmpty()) {
                    if (this.f34095i.isEmpty()) {
                        this.f34095i = qualifiedNameTable.f34091i;
                        this.f34094e &= -2;
                    } else {
                        d();
                        this.f34095i.addAll(qualifiedNameTable.f34091i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(qualifiedNameTable.f34090e));
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
            private static final QualifiedName f34096t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34097e;

            /* renamed from: i  reason: collision with root package name */
            private int f34098i;

            /* renamed from: o  reason: collision with root package name */
            private int f34099o;

            /* renamed from: p  reason: collision with root package name */
            private int f34100p;

            /* renamed from: q  reason: collision with root package name */
            private Kind f34101q;

            /* renamed from: r  reason: collision with root package name */
            private byte f34102r;

            /* renamed from: s  reason: collision with root package name */
            private int f34103s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<QualifiedName, Builder> implements QualifiedNameOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34104e;

                /* renamed from: o  reason: collision with root package name */
                private int f34106o;

                /* renamed from: i  reason: collision with root package name */
                private int f34105i = -1;

                /* renamed from: p  reason: collision with root package name */
                private Kind f34107p = Kind.PACKAGE;

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
                    int i10 = this.f34104e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    qualifiedName.f34099o = this.f34105i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    qualifiedName.f34100p = this.f34106o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    qualifiedName.f34101q = this.f34107p;
                    qualifiedName.f34098i = i11;
                    return qualifiedName;
                }

                public boolean hasShortName() {
                    if ((this.f34104e & 2) == 2) {
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
                    this.f34104e |= 4;
                    this.f34107p = kind;
                    return this;
                }

                public Builder setParentQualifiedName(int i10) {
                    this.f34104e |= 1;
                    this.f34105i = i10;
                    return this;
                }

                public Builder setShortName(int i10) {
                    this.f34104e |= 2;
                    this.f34106o = i10;
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
                    setUnknownFields(getUnknownFields().concat(qualifiedName.f34097e));
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
                private static Internal.EnumLiteMap f34108e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34110d;

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
                    this.f34110d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34110d;
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
                f34096t = qualifiedName;
                qualifiedName.m();
            }

            public static QualifiedName getDefaultInstance() {
                return f34096t;
            }

            private void m() {
                this.f34099o = -1;
                this.f34100p = 0;
                this.f34101q = Kind.PACKAGE;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public Kind getKind() {
                return this.f34101q;
            }

            public int getParentQualifiedName() {
                return this.f34099o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<QualifiedName> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34103s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34098i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f34099o);
                } else {
                    i10 = 0;
                }
                if ((this.f34098i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f34100p);
                }
                if ((this.f34098i & 4) == 4) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f34101q.getNumber());
                }
                int size = i10 + this.f34097e.size();
                this.f34103s = size;
                return size;
            }

            public int getShortName() {
                return this.f34100p;
            }

            public boolean hasKind() {
                if ((this.f34098i & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasParentQualifiedName() {
                if ((this.f34098i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasShortName() {
                if ((this.f34098i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34102r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasShortName()) {
                    this.f34102r = (byte) 0;
                    return false;
                }
                this.f34102r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34098i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f34099o);
                }
                if ((this.f34098i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f34100p);
                }
                if ((this.f34098i & 4) == 4) {
                    codedOutputStream.writeEnum(3, this.f34101q.getNumber());
                }
                codedOutputStream.writeRawBytes(this.f34097e);
            }

            public static Builder newBuilder(QualifiedName qualifiedName) {
                return newBuilder().mergeFrom(qualifiedName);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedName getDefaultInstanceForType() {
                return f34096t;
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
                this.f34102r = (byte) -1;
                this.f34103s = -1;
                this.f34097e = builder.getUnknownFields();
            }

            private QualifiedName(boolean z10) {
                this.f34102r = (byte) -1;
                this.f34103s = -1;
                this.f34097e = ByteString.EMPTY;
            }

            private QualifiedName(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34102r = (byte) -1;
                this.f34103s = -1;
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
                                        this.f34098i |= 1;
                                        this.f34099o = codedInputStream.readInt32();
                                    } else if (readTag == 16) {
                                        this.f34098i |= 2;
                                        this.f34100p = codedInputStream.readInt32();
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
                                            this.f34098i |= 4;
                                            this.f34101q = valueOf;
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
                            this.f34097e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34097e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34097e = newOutput.toByteString();
                    throw th4;
                }
                this.f34097e = newOutput.toByteString();
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
            f34089q = qualifiedNameTable;
            qualifiedNameTable.k();
        }

        public static QualifiedNameTable getDefaultInstance() {
            return f34089q;
        }

        private void k() {
            this.f34091i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<QualifiedNameTable> getParserForType() {
            return PARSER;
        }

        public QualifiedName getQualifiedName(int i10) {
            return (QualifiedName) this.f34091i.get(i10);
        }

        public int getQualifiedNameCount() {
            return this.f34091i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34093p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34091i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34091i.get(i12));
            }
            int size = i11 + this.f34090e.size();
            this.f34093p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34092o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                if (!getQualifiedName(i10).isInitialized()) {
                    this.f34092o = (byte) 0;
                    return false;
                }
            }
            this.f34092o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34091i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34091i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34090e);
        }

        public static Builder newBuilder(QualifiedNameTable qualifiedNameTable) {
            return newBuilder().mergeFrom(qualifiedNameTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public QualifiedNameTable getDefaultInstanceForType() {
            return f34089q;
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
            this.f34092o = (byte) -1;
            this.f34093p = -1;
            this.f34090e = builder.getUnknownFields();
        }

        private QualifiedNameTable(boolean z10) {
            this.f34092o = (byte) -1;
            this.f34093p = -1;
            this.f34090e = ByteString.EMPTY;
        }

        private QualifiedNameTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34092o = (byte) -1;
            this.f34093p = -1;
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
                                        this.f34091i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34091i.add(codedInputStream.readMessage(QualifiedName.PARSER, extensionRegistryLite));
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
                        this.f34091i = Collections.unmodifiableList(this.f34091i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34090e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34090e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34091i = Collections.unmodifiableList(this.f34091i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34090e = newOutput.toByteString();
                throw th4;
            }
            this.f34090e = newOutput.toByteString();
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
        private static final StringTable f34111q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34112e;

        /* renamed from: i  reason: collision with root package name */
        private LazyStringList f34113i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34114o;

        /* renamed from: p  reason: collision with root package name */
        private int f34115p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTable, Builder> implements StringTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34116e;

            /* renamed from: i  reason: collision with root package name */
            private LazyStringList f34117i = LazyStringArrayList.EMPTY;

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
                if ((this.f34116e & 1) != 1) {
                    this.f34117i = new LazyStringArrayList(this.f34117i);
                    this.f34116e |= 1;
                }
            }

            private void e() {
            }

            public StringTable buildPartial() {
                StringTable stringTable = new StringTable(this);
                if ((this.f34116e & 1) == 1) {
                    this.f34117i = this.f34117i.getUnmodifiableView();
                    this.f34116e &= -2;
                }
                stringTable.f34113i = this.f34117i;
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
                if (!stringTable.f34113i.isEmpty()) {
                    if (this.f34117i.isEmpty()) {
                        this.f34117i = stringTable.f34113i;
                        this.f34116e &= -2;
                    } else {
                        d();
                        this.f34117i.addAll(stringTable.f34113i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTable.f34112e));
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
            f34111q = stringTable;
            stringTable.k();
        }

        public static StringTable getDefaultInstance() {
            return f34111q;
        }

        private void k() {
            this.f34113i = LazyStringArrayList.EMPTY;
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
            int i10 = this.f34115p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34113i.size(); i12++) {
                i11 += CodedOutputStream.computeBytesSizeNoTag(this.f34113i.getByteString(i12));
            }
            int size = i11 + getStringList().size() + this.f34112e.size();
            this.f34115p = size;
            return size;
        }

        public String getString(int i10) {
            return this.f34113i.get(i10);
        }

        public ProtocolStringList getStringList() {
            return this.f34113i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34114o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34114o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34113i.size(); i10++) {
                codedOutputStream.writeBytes(1, this.f34113i.getByteString(i10));
            }
            codedOutputStream.writeRawBytes(this.f34112e);
        }

        public static Builder newBuilder(StringTable stringTable) {
            return newBuilder().mergeFrom(stringTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTable getDefaultInstanceForType() {
            return f34111q;
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
            this.f34114o = (byte) -1;
            this.f34115p = -1;
            this.f34112e = builder.getUnknownFields();
        }

        private StringTable(boolean z10) {
            this.f34114o = (byte) -1;
            this.f34115p = -1;
            this.f34112e = ByteString.EMPTY;
        }

        private StringTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34114o = (byte) -1;
            this.f34115p = -1;
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
                                        this.f34113i = new LazyStringArrayList();
                                        z11 = true;
                                    }
                                    this.f34113i.add(readBytes);
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
                        this.f34113i = this.f34113i.getUnmodifiableView();
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34112e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34112e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34113i = this.f34113i.getUnmodifiableView();
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34112e = newOutput.toByteString();
                throw th4;
            }
            this.f34112e = newOutput.toByteString();
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
        private final ByteString f34118i;

        /* renamed from: o  reason: collision with root package name */
        private int f34119o;

        /* renamed from: p  reason: collision with root package name */
        private List f34120p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f34121q;

        /* renamed from: r  reason: collision with root package name */
        private int f34122r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34123s;

        /* renamed from: t  reason: collision with root package name */
        private int f34124t;

        /* renamed from: u  reason: collision with root package name */
        private int f34125u;

        /* renamed from: v  reason: collision with root package name */
        private int f34126v;

        /* renamed from: w  reason: collision with root package name */
        private int f34127w;

        /* renamed from: x  reason: collision with root package name */
        private int f34128x;

        /* renamed from: y  reason: collision with root package name */
        private Type f34129y;

        /* renamed from: z  reason: collision with root package name */
        private int f34130z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final Argument f34131t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34132e;

            /* renamed from: i  reason: collision with root package name */
            private int f34133i;

            /* renamed from: o  reason: collision with root package name */
            private Projection f34134o;

            /* renamed from: p  reason: collision with root package name */
            private Type f34135p;

            /* renamed from: q  reason: collision with root package name */
            private int f34136q;

            /* renamed from: r  reason: collision with root package name */
            private byte f34137r;

            /* renamed from: s  reason: collision with root package name */
            private int f34138s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34139e;

                /* renamed from: i  reason: collision with root package name */
                private Projection f34140i = Projection.INV;

                /* renamed from: o  reason: collision with root package name */
                private Type f34141o = Type.getDefaultInstance();

                /* renamed from: p  reason: collision with root package name */
                private int f34142p;

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
                    int i10 = this.f34139e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f34134o = this.f34140i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f34135p = this.f34141o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    argument.f34136q = this.f34142p;
                    argument.f34133i = i11;
                    return argument;
                }

                public Type getType() {
                    return this.f34141o;
                }

                public boolean hasType() {
                    if ((this.f34139e & 2) == 2) {
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
                    if ((this.f34139e & 2) == 2 && this.f34141o != Type.getDefaultInstance()) {
                        this.f34141o = Type.newBuilder(this.f34141o).mergeFrom(type).buildPartial();
                    } else {
                        this.f34141o = type;
                    }
                    this.f34139e |= 2;
                    return this;
                }

                public Builder setProjection(Projection projection) {
                    projection.getClass();
                    this.f34139e |= 1;
                    this.f34140i = projection;
                    return this;
                }

                public Builder setTypeId(int i10) {
                    this.f34139e |= 4;
                    this.f34142p = i10;
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
                    setUnknownFields(getUnknownFields().concat(argument.f34132e));
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
                private static Internal.EnumLiteMap f34143e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34145d;

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
                    this.f34145d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34145d;
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
                f34131t = argument;
                argument.m();
            }

            public static Argument getDefaultInstance() {
                return f34131t;
            }

            private void m() {
                this.f34134o = Projection.INV;
                this.f34135p = Type.getDefaultInstance();
                this.f34136q = 0;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            public Projection getProjection() {
                return this.f34134o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34138s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34133i & 1) == 1) {
                    i10 = CodedOutputStream.computeEnumSize(1, this.f34134o.getNumber());
                } else {
                    i10 = 0;
                }
                if ((this.f34133i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f34135p);
                }
                if ((this.f34133i & 4) == 4) {
                    i10 += CodedOutputStream.computeInt32Size(3, this.f34136q);
                }
                int size = i10 + this.f34132e.size();
                this.f34138s = size;
                return size;
            }

            public Type getType() {
                return this.f34135p;
            }

            public int getTypeId() {
                return this.f34136q;
            }

            public boolean hasProjection() {
                if ((this.f34133i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f34133i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeId() {
                if ((this.f34133i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34137r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    this.f34137r = (byte) 0;
                    return false;
                }
                this.f34137r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34133i & 1) == 1) {
                    codedOutputStream.writeEnum(1, this.f34134o.getNumber());
                }
                if ((this.f34133i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f34135p);
                }
                if ((this.f34133i & 4) == 4) {
                    codedOutputStream.writeInt32(3, this.f34136q);
                }
                codedOutputStream.writeRawBytes(this.f34132e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f34131t;
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
                this.f34137r = (byte) -1;
                this.f34138s = -1;
                this.f34132e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f34137r = (byte) -1;
                this.f34138s = -1;
                this.f34132e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34137r = (byte) -1;
                this.f34138s = -1;
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
                                            this.f34133i |= 1;
                                            this.f34134o = valueOf;
                                        }
                                    } else if (readTag == 18) {
                                        Builder builder = (this.f34133i & 2) == 2 ? this.f34135p.toBuilder() : null;
                                        Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                        this.f34135p = type;
                                        if (builder != null) {
                                            builder.mergeFrom(type);
                                            this.f34135p = builder.buildPartial();
                                        }
                                        this.f34133i |= 2;
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        this.f34133i |= 4;
                                        this.f34136q = codedInputStream.readInt32();
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
                            this.f34132e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34132e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34132e = newOutput.toByteString();
                    throw th4;
                }
                this.f34132e = newOutput.toByteString();
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
            private int f34146o;

            /* renamed from: q  reason: collision with root package name */
            private boolean f34148q;

            /* renamed from: r  reason: collision with root package name */
            private int f34149r;

            /* renamed from: t  reason: collision with root package name */
            private int f34151t;

            /* renamed from: u  reason: collision with root package name */
            private int f34152u;

            /* renamed from: v  reason: collision with root package name */
            private int f34153v;

            /* renamed from: w  reason: collision with root package name */
            private int f34154w;

            /* renamed from: x  reason: collision with root package name */
            private int f34155x;

            /* renamed from: z  reason: collision with root package name */
            private int f34157z;

            /* renamed from: p  reason: collision with root package name */
            private List f34147p = Collections.EMPTY_LIST;

            /* renamed from: s  reason: collision with root package name */
            private Type f34150s = Type.getDefaultInstance();

            /* renamed from: y  reason: collision with root package name */
            private Type f34156y = Type.getDefaultInstance();
            private Type A = Type.getDefaultInstance();

            private Builder() {
                k();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34146o & 1) != 1) {
                    this.f34147p = new ArrayList(this.f34147p);
                    this.f34146o |= 1;
                }
            }

            private void k() {
            }

            public Type buildPartial() {
                Type type = new Type(this);
                int i10 = this.f34146o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34147p = Collections.unmodifiableList(this.f34147p);
                    this.f34146o &= -2;
                }
                type.f34120p = this.f34147p;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                type.f34121q = this.f34148q;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                type.f34122r = this.f34149r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                type.f34123s = this.f34150s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                type.f34124t = this.f34151t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                type.f34125u = this.f34152u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                type.f34126v = this.f34153v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                type.f34127w = this.f34154w;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                type.f34128x = this.f34155x;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                type.f34129y = this.f34156y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                type.f34130z = this.f34157z;
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
                type.f34119o = i11;
                return type;
            }

            public Type getAbbreviatedType() {
                return this.A;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f34147p.get(i10);
            }

            public int getArgumentCount() {
                return this.f34147p.size();
            }

            public Type getFlexibleUpperBound() {
                return this.f34150s;
            }

            public Type getOuterType() {
                return this.f34156y;
            }

            public boolean hasAbbreviatedType() {
                if ((this.f34146o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            public boolean hasFlexibleUpperBound() {
                if ((this.f34146o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasOuterType() {
                if ((this.f34146o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
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
                if ((this.f34146o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != Type.getDefaultInstance()) {
                    this.A = Type.newBuilder(this.A).mergeFrom(type).buildPartial();
                } else {
                    this.A = type;
                }
                this.f34146o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder mergeFlexibleUpperBound(Type type) {
                if ((this.f34146o & 8) == 8 && this.f34150s != Type.getDefaultInstance()) {
                    this.f34150s = Type.newBuilder(this.f34150s).mergeFrom(type).buildPartial();
                } else {
                    this.f34150s = type;
                }
                this.f34146o |= 8;
                return this;
            }

            public Builder mergeOuterType(Type type) {
                if ((this.f34146o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512 && this.f34156y != Type.getDefaultInstance()) {
                    this.f34156y = Type.newBuilder(this.f34156y).mergeFrom(type).buildPartial();
                } else {
                    this.f34156y = type;
                }
                this.f34146o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                return this;
            }

            public Builder setAbbreviatedTypeId(int i10) {
                this.f34146o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            public Builder setClassName(int i10) {
                this.f34146o |= 32;
                this.f34152u = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34146o |= 8192;
                this.C = i10;
                return this;
            }

            public Builder setFlexibleTypeCapabilitiesId(int i10) {
                this.f34146o |= 4;
                this.f34149r = i10;
                return this;
            }

            public Builder setFlexibleUpperBoundId(int i10) {
                this.f34146o |= 16;
                this.f34151t = i10;
                return this;
            }

            public Builder setNullable(boolean z10) {
                this.f34146o |= 2;
                this.f34148q = z10;
                return this;
            }

            public Builder setOuterTypeId(int i10) {
                this.f34146o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                this.f34157z = i10;
                return this;
            }

            public Builder setTypeAliasName(int i10) {
                this.f34146o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                this.f34155x = i10;
                return this;
            }

            public Builder setTypeParameter(int i10) {
                this.f34146o |= 64;
                this.f34153v = i10;
                return this;
            }

            public Builder setTypeParameterName(int i10) {
                this.f34146o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34154w = i10;
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
                if (!type.f34120p.isEmpty()) {
                    if (this.f34147p.isEmpty()) {
                        this.f34147p = type.f34120p;
                        this.f34146o &= -2;
                    } else {
                        j();
                        this.f34147p.addAll(type.f34120p);
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
                setUnknownFields(getUnknownFields().concat(type.f34118i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            this.f34120p = Collections.EMPTY_LIST;
            this.f34121q = false;
            this.f34122r = 0;
            this.f34123s = getDefaultInstance();
            this.f34124t = 0;
            this.f34125u = 0;
            this.f34126v = 0;
            this.f34127w = 0;
            this.f34128x = 0;
            this.f34129y = getDefaultInstance();
            this.f34130z = 0;
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
            return (Argument) this.f34120p.get(i10);
        }

        public int getArgumentCount() {
            return this.f34120p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f34120p;
        }

        public int getClassName() {
            return this.f34125u;
        }

        public int getFlags() {
            return this.C;
        }

        public int getFlexibleTypeCapabilitiesId() {
            return this.f34122r;
        }

        public Type getFlexibleUpperBound() {
            return this.f34123s;
        }

        public int getFlexibleUpperBoundId() {
            return this.f34124t;
        }

        public boolean getNullable() {
            return this.f34121q;
        }

        public Type getOuterType() {
            return this.f34129y;
        }

        public int getOuterTypeId() {
            return this.f34130z;
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
            if ((this.f34119o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                i10 = CodedOutputStream.computeInt32Size(1, this.C);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f34120p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f34120p.get(i12));
            }
            if ((this.f34119o & 1) == 1) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f34121q);
            }
            if ((this.f34119o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f34122r);
            }
            if ((this.f34119o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34123s);
            }
            if ((this.f34119o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f34125u);
            }
            if ((this.f34119o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34126v);
            }
            if ((this.f34119o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f34124t);
            }
            if ((this.f34119o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34127w);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeMessageSize(10, this.f34129y);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f34130z);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeInt32Size(12, this.f34128x);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                i10 += CodedOutputStream.computeMessageSize(13, this.A);
            }
            if ((this.f34119o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                i10 += CodedOutputStream.computeInt32Size(14, this.B);
            }
            int j10 = i10 + j() + this.f34118i.size();
            this.E = j10;
            return j10;
        }

        public int getTypeAliasName() {
            return this.f34128x;
        }

        public int getTypeParameter() {
            return this.f34126v;
        }

        public int getTypeParameterName() {
            return this.f34127w;
        }

        public boolean hasAbbreviatedType() {
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                return true;
            }
            return false;
        }

        public boolean hasAbbreviatedTypeId() {
            if ((this.f34119o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                return true;
            }
            return false;
        }

        public boolean hasClassName() {
            if ((this.f34119o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34119o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleTypeCapabilitiesId() {
            if ((this.f34119o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBound() {
            if ((this.f34119o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBoundId() {
            if ((this.f34119o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasNullable() {
            if ((this.f34119o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasOuterType() {
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasOuterTypeId() {
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasTypeAliasName() {
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameter() {
            if ((this.f34119o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameterName() {
            if ((this.f34119o & 64) == 64) {
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
            if ((this.f34119o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                codedOutputStream.writeInt32(1, this.C);
            }
            for (int i10 = 0; i10 < this.f34120p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f34120p.get(i10));
            }
            if ((this.f34119o & 1) == 1) {
                codedOutputStream.writeBool(3, this.f34121q);
            }
            if ((this.f34119o & 2) == 2) {
                codedOutputStream.writeInt32(4, this.f34122r);
            }
            if ((this.f34119o & 4) == 4) {
                codedOutputStream.writeMessage(5, this.f34123s);
            }
            if ((this.f34119o & 16) == 16) {
                codedOutputStream.writeInt32(6, this.f34125u);
            }
            if ((this.f34119o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f34126v);
            }
            if ((this.f34119o & 8) == 8) {
                codedOutputStream.writeInt32(8, this.f34124t);
            }
            if ((this.f34119o & 64) == 64) {
                codedOutputStream.writeInt32(9, this.f34127w);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(10, this.f34129y);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(11, this.f34130z);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeInt32(12, this.f34128x);
            }
            if ((this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                codedOutputStream.writeMessage(13, this.A);
            }
            if ((this.f34119o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                codedOutputStream.writeInt32(14, this.B);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34118i);
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
            this.f34118i = extendableBuilder.getUnknownFields();
        }

        private Type(boolean z10) {
            this.D = (byte) -1;
            this.E = -1;
            this.f34118i = ByteString.EMPTY;
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
                                    this.f34119o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                    if (!z11) {
                                        this.f34120p = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34120p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                    this.f34119o |= 1;
                                    this.f34121q = codedInputStream.readBool();
                                    continue;
                                case 32:
                                    this.f34119o |= 2;
                                    this.f34122r = codedInputStream.readInt32();
                                    continue;
                                case 42:
                                    builder = (this.f34119o & 4) == 4 ? this.f34123s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f34123s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34123s = builder.buildPartial();
                                    }
                                    this.f34119o |= 4;
                                    continue;
                                case 48:
                                    this.f34119o |= 16;
                                    this.f34125u = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34119o |= 32;
                                    this.f34126v = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f34119o |= 8;
                                    this.f34124t = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f34119o |= 64;
                                    this.f34127w = codedInputStream.readInt32();
                                    continue;
                                case 82:
                                    builder = (this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.f34129y.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f34129y = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34129y = builder.buildPartial();
                                    }
                                    this.f34119o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    continue;
                                case 88:
                                    this.f34119o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.f34130z = codedInputStream.readInt32();
                                    continue;
                                case 96:
                                    this.f34119o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    this.f34128x = codedInputStream.readInt32();
                                    continue;
                                case 106:
                                    builder = (this.f34119o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 ? this.A.toBuilder() : null;
                                    Type type3 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.A = type3;
                                    if (builder != null) {
                                        builder.mergeFrom(type3);
                                        this.A = builder.buildPartial();
                                    }
                                    this.f34119o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                                    continue;
                                case 112:
                                    this.f34119o |= RecyclerView.ItemAnimator.FLAG_MOVED;
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
                        this.f34120p = Collections.unmodifiableList(this.f34120p);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34118i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34118i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34120p = Collections.unmodifiableList(this.f34120p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34118i = newOutput.toByteString();
                throw th4;
            }
            this.f34118i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeAlias extends GeneratedMessageLite.ExtendableMessage<TypeAlias> implements TypeAliasOrBuilder {
        private static final TypeAlias B;
        public static Parser<TypeAlias> PARSER = new a();
        private int A;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34158i;

        /* renamed from: o  reason: collision with root package name */
        private int f34159o;

        /* renamed from: p  reason: collision with root package name */
        private int f34160p;

        /* renamed from: q  reason: collision with root package name */
        private int f34161q;

        /* renamed from: r  reason: collision with root package name */
        private List f34162r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34163s;

        /* renamed from: t  reason: collision with root package name */
        private int f34164t;

        /* renamed from: u  reason: collision with root package name */
        private Type f34165u;

        /* renamed from: v  reason: collision with root package name */
        private int f34166v;

        /* renamed from: w  reason: collision with root package name */
        private List f34167w;

        /* renamed from: x  reason: collision with root package name */
        private List f34168x;

        /* renamed from: y  reason: collision with root package name */
        private List f34169y;

        /* renamed from: z  reason: collision with root package name */
        private byte f34170z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeAlias, Builder> implements TypeAliasOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34171o;

            /* renamed from: p  reason: collision with root package name */
            private int f34172p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f34173q;

            /* renamed from: r  reason: collision with root package name */
            private List f34174r;

            /* renamed from: s  reason: collision with root package name */
            private Type f34175s;

            /* renamed from: t  reason: collision with root package name */
            private int f34176t;

            /* renamed from: u  reason: collision with root package name */
            private Type f34177u;

            /* renamed from: v  reason: collision with root package name */
            private int f34178v;

            /* renamed from: w  reason: collision with root package name */
            private List f34179w;

            /* renamed from: x  reason: collision with root package name */
            private List f34180x;

            /* renamed from: y  reason: collision with root package name */
            private List f34181y;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34174r = list;
                this.f34175s = Type.getDefaultInstance();
                this.f34177u = Type.getDefaultInstance();
                this.f34179w = list;
                this.f34180x = list;
                this.f34181y = list;
                n();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34171o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f34179w = new ArrayList(this.f34179w);
                    this.f34171o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void k() {
                if ((this.f34171o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34181y = new ArrayList(this.f34181y);
                    this.f34171o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34171o & 4) != 4) {
                    this.f34174r = new ArrayList(this.f34174r);
                    this.f34171o |= 4;
                }
            }

            private void m() {
                if ((this.f34171o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34180x = new ArrayList(this.f34180x);
                    this.f34171o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void n() {
            }

            public TypeAlias buildPartial() {
                TypeAlias typeAlias = new TypeAlias(this);
                int i10 = this.f34171o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeAlias.f34160p = this.f34172p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeAlias.f34161q = this.f34173q;
                if ((this.f34171o & 4) == 4) {
                    this.f34174r = Collections.unmodifiableList(this.f34174r);
                    this.f34171o &= -5;
                }
                typeAlias.f34162r = this.f34174r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                typeAlias.f34163s = this.f34175s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                typeAlias.f34164t = this.f34176t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                typeAlias.f34165u = this.f34177u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                typeAlias.f34166v = this.f34178v;
                if ((this.f34171o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f34179w = Collections.unmodifiableList(this.f34179w);
                    this.f34171o &= -129;
                }
                typeAlias.f34167w = this.f34179w;
                if ((this.f34171o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34180x = Collections.unmodifiableList(this.f34180x);
                    this.f34171o &= -257;
                }
                typeAlias.f34168x = this.f34180x;
                if ((this.f34171o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34181y = Collections.unmodifiableList(this.f34181y);
                    this.f34171o &= -513;
                }
                typeAlias.f34169y = this.f34181y;
                typeAlias.f34159o = i11;
                return typeAlias;
            }

            public Annotation getAnnotation(int i10) {
                return (Annotation) this.f34179w.get(i10);
            }

            public int getAnnotationCount() {
                return this.f34179w.size();
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f34181y.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f34181y.size();
            }

            public Type getExpandedType() {
                return this.f34177u;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34174r.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34174r.size();
            }

            public Type getUnderlyingType() {
                return this.f34175s;
            }

            public boolean hasExpandedType() {
                if ((this.f34171o & 32) == 32) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34171o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasUnderlyingType() {
                if ((this.f34171o & 8) == 8) {
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
                if ((this.f34171o & 32) == 32 && this.f34177u != Type.getDefaultInstance()) {
                    this.f34177u = Type.newBuilder(this.f34177u).mergeFrom(type).buildPartial();
                } else {
                    this.f34177u = type;
                }
                this.f34171o |= 32;
                return this;
            }

            public Builder mergeUnderlyingType(Type type) {
                if ((this.f34171o & 8) == 8 && this.f34175s != Type.getDefaultInstance()) {
                    this.f34175s = Type.newBuilder(this.f34175s).mergeFrom(type).buildPartial();
                } else {
                    this.f34175s = type;
                }
                this.f34171o |= 8;
                return this;
            }

            public Builder setExpandedTypeId(int i10) {
                this.f34171o |= 64;
                this.f34178v = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34171o |= 1;
                this.f34172p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34171o |= 2;
                this.f34173q = i10;
                return this;
            }

            public Builder setUnderlyingTypeId(int i10) {
                this.f34171o |= 16;
                this.f34176t = i10;
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
                if (!typeAlias.f34162r.isEmpty()) {
                    if (this.f34174r.isEmpty()) {
                        this.f34174r = typeAlias.f34162r;
                        this.f34171o &= -5;
                    } else {
                        l();
                        this.f34174r.addAll(typeAlias.f34162r);
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
                if (!typeAlias.f34167w.isEmpty()) {
                    if (this.f34179w.isEmpty()) {
                        this.f34179w = typeAlias.f34167w;
                        this.f34171o &= -129;
                    } else {
                        j();
                        this.f34179w.addAll(typeAlias.f34167w);
                    }
                }
                if (!typeAlias.f34168x.isEmpty()) {
                    if (this.f34180x.isEmpty()) {
                        this.f34180x = typeAlias.f34168x;
                        this.f34171o &= -257;
                    } else {
                        m();
                        this.f34180x.addAll(typeAlias.f34168x);
                    }
                }
                if (!typeAlias.f34169y.isEmpty()) {
                    if (this.f34181y.isEmpty()) {
                        this.f34181y = typeAlias.f34169y;
                        this.f34171o &= -513;
                    } else {
                        k();
                        this.f34181y.addAll(typeAlias.f34169y);
                    }
                }
                f(typeAlias);
                setUnknownFields(getUnknownFields().concat(typeAlias.f34158i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            this.f34160p = 6;
            this.f34161q = 0;
            List list = Collections.EMPTY_LIST;
            this.f34162r = list;
            this.f34163s = Type.getDefaultInstance();
            this.f34164t = 0;
            this.f34165u = Type.getDefaultInstance();
            this.f34166v = 0;
            this.f34167w = list;
            this.f34168x = list;
            this.f34169y = list;
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
            return (Annotation) this.f34167w.get(i10);
        }

        public int getAnnotationCount() {
            return this.f34167w.size();
        }

        public List<Annotation> getAnnotationList() {
            return this.f34167w;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f34169y.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f34169y.size();
        }

        public Type getExpandedType() {
            return this.f34165u;
        }

        public int getExpandedTypeId() {
            return this.f34166v;
        }

        public int getFlags() {
            return this.f34160p;
        }

        public int getName() {
            return this.f34161q;
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
            if ((this.f34159o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34160p);
            } else {
                i10 = 0;
            }
            if ((this.f34159o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34161q);
            }
            for (int i12 = 0; i12 < this.f34162r.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f34162r.get(i12));
            }
            if ((this.f34159o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34163s);
            }
            if ((this.f34159o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34164t);
            }
            if ((this.f34159o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(6, this.f34165u);
            }
            if ((this.f34159o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34166v);
            }
            for (int i13 = 0; i13 < this.f34167w.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.f34167w.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f34168x.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34168x.get(i15)).intValue());
            }
            int size = i10 + i14 + (getVersionRequirementList().size() * 2);
            for (int i16 = 0; i16 < this.f34169y.size(); i16++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f34169y.get(i16));
            }
            int j10 = size + j() + this.f34158i.size();
            this.A = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34162r.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34162r.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34162r;
        }

        public Type getUnderlyingType() {
            return this.f34163s;
        }

        public int getUnderlyingTypeId() {
            return this.f34164t;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f34168x;
        }

        public boolean hasExpandedType() {
            if ((this.f34159o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasExpandedTypeId() {
            if ((this.f34159o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34159o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34159o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingType() {
            if ((this.f34159o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingTypeId() {
            if ((this.f34159o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34170z;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f34170z = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.f34170z = (byte) 0;
                    return false;
                }
            }
            if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                this.f34170z = (byte) 0;
                return false;
            } else if (hasExpandedType() && !getExpandedType().isInitialized()) {
                this.f34170z = (byte) 0;
                return false;
            } else {
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        this.f34170z = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.f34170z = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34170z = (byte) 0;
                    return false;
                }
                this.f34170z = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34159o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34160p);
            }
            if ((this.f34159o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34161q);
            }
            for (int i10 = 0; i10 < this.f34162r.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f34162r.get(i10));
            }
            if ((this.f34159o & 4) == 4) {
                codedOutputStream.writeMessage(4, this.f34163s);
            }
            if ((this.f34159o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f34164t);
            }
            if ((this.f34159o & 16) == 16) {
                codedOutputStream.writeMessage(6, this.f34165u);
            }
            if ((this.f34159o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f34166v);
            }
            for (int i11 = 0; i11 < this.f34167w.size(); i11++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.f34167w.get(i11));
            }
            for (int i12 = 0; i12 < this.f34168x.size(); i12++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f34168x.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.f34169y.size(); i13++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f34169y.get(i13));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34158i);
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
            this.f34170z = (byte) -1;
            this.A = -1;
            this.f34158i = extendableBuilder.getUnknownFields();
        }

        private TypeAlias(boolean z10) {
            this.f34170z = (byte) -1;
            this.A = -1;
            this.f34158i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private TypeAlias(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f34170z = (byte) -1;
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
                                    this.f34159o |= 1;
                                    this.f34160p = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f34159o |= 2;
                                    this.f34161q = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    if (!(z11 & true)) {
                                        this.f34162r = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34162r.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    builder = (this.f34159o & 4) == 4 ? this.f34163s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34163s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34163s = builder.buildPartial();
                                    }
                                    this.f34159o |= 4;
                                    continue;
                                case 40:
                                    this.f34159o |= 8;
                                    this.f34164t = codedInputStream.readInt32();
                                    continue;
                                case 50:
                                    builder = (this.f34159o & 16) == 16 ? this.f34165u.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34165u = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34165u = builder.buildPartial();
                                    }
                                    this.f34159o |= 16;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34159o |= 32;
                                    this.f34166v = codedInputStream.readInt32();
                                    continue;
                                case 66:
                                    if (!(z11 & true)) {
                                        this.f34167w = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34167w.add(codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite));
                                    continue;
                                case 248:
                                    if (!(z11 & true)) {
                                        this.f34168x = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34168x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34168x = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34168x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    break;
                                case 258:
                                    if (!(z11 & true)) {
                                        this.f34169y = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34169y.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
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
                                this.f34162r = Collections.unmodifiableList(this.f34162r);
                            }
                            if ((z11 & true) == r52) {
                                this.f34167w = Collections.unmodifiableList(this.f34167w);
                            }
                            if (z11 & true) {
                                this.f34168x = Collections.unmodifiableList(this.f34168x);
                            }
                            if (z11 & true) {
                                this.f34169y = Collections.unmodifiableList(this.f34169y);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f34158i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34158i = newOutput.toByteString();
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
                        this.f34162r = Collections.unmodifiableList(this.f34162r);
                    }
                    if (z11 & true) {
                        this.f34167w = Collections.unmodifiableList(this.f34167w);
                    }
                    if (z11 & true) {
                        this.f34168x = Collections.unmodifiableList(this.f34168x);
                    }
                    if (z11 & true) {
                        this.f34169y = Collections.unmodifiableList(this.f34169y);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f34158i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34158i = newOutput.toByteString();
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
        private static final TypeParameter f34182y;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34183i;

        /* renamed from: o  reason: collision with root package name */
        private int f34184o;

        /* renamed from: p  reason: collision with root package name */
        private int f34185p;

        /* renamed from: q  reason: collision with root package name */
        private int f34186q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f34187r;

        /* renamed from: s  reason: collision with root package name */
        private Variance f34188s;

        /* renamed from: t  reason: collision with root package name */
        private List f34189t;

        /* renamed from: u  reason: collision with root package name */
        private List f34190u;

        /* renamed from: v  reason: collision with root package name */
        private int f34191v;

        /* renamed from: w  reason: collision with root package name */
        private byte f34192w;

        /* renamed from: x  reason: collision with root package name */
        private int f34193x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeParameter, Builder> implements TypeParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34194o;

            /* renamed from: p  reason: collision with root package name */
            private int f34195p;

            /* renamed from: q  reason: collision with root package name */
            private int f34196q;

            /* renamed from: r  reason: collision with root package name */
            private boolean f34197r;

            /* renamed from: s  reason: collision with root package name */
            private Variance f34198s = Variance.INV;

            /* renamed from: t  reason: collision with root package name */
            private List f34199t;

            /* renamed from: u  reason: collision with root package name */
            private List f34200u;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34199t = list;
                this.f34200u = list;
                l();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
                if ((this.f34194o & 32) != 32) {
                    this.f34200u = new ArrayList(this.f34200u);
                    this.f34194o |= 32;
                }
            }

            private void k() {
                if ((this.f34194o & 16) != 16) {
                    this.f34199t = new ArrayList(this.f34199t);
                    this.f34194o |= 16;
                }
            }

            private void l() {
            }

            public TypeParameter buildPartial() {
                TypeParameter typeParameter = new TypeParameter(this);
                int i10 = this.f34194o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeParameter.f34185p = this.f34195p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeParameter.f34186q = this.f34196q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                typeParameter.f34187r = this.f34197r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                typeParameter.f34188s = this.f34198s;
                if ((this.f34194o & 16) == 16) {
                    this.f34199t = Collections.unmodifiableList(this.f34199t);
                    this.f34194o &= -17;
                }
                typeParameter.f34189t = this.f34199t;
                if ((this.f34194o & 32) == 32) {
                    this.f34200u = Collections.unmodifiableList(this.f34200u);
                    this.f34194o &= -33;
                }
                typeParameter.f34190u = this.f34200u;
                typeParameter.f34184o = i11;
                return typeParameter;
            }

            public Type getUpperBound(int i10) {
                return (Type) this.f34199t.get(i10);
            }

            public int getUpperBoundCount() {
                return this.f34199t.size();
            }

            public boolean hasId() {
                if ((this.f34194o & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34194o & 2) == 2) {
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
                this.f34194o |= 1;
                this.f34195p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34194o |= 2;
                this.f34196q = i10;
                return this;
            }

            public Builder setReified(boolean z10) {
                this.f34194o |= 4;
                this.f34197r = z10;
                return this;
            }

            public Builder setVariance(Variance variance) {
                variance.getClass();
                this.f34194o |= 8;
                this.f34198s = variance;
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
                if (!typeParameter.f34189t.isEmpty()) {
                    if (this.f34199t.isEmpty()) {
                        this.f34199t = typeParameter.f34189t;
                        this.f34194o &= -17;
                    } else {
                        k();
                        this.f34199t.addAll(typeParameter.f34189t);
                    }
                }
                if (!typeParameter.f34190u.isEmpty()) {
                    if (this.f34200u.isEmpty()) {
                        this.f34200u = typeParameter.f34190u;
                        this.f34194o &= -33;
                    } else {
                        j();
                        this.f34200u.addAll(typeParameter.f34190u);
                    }
                }
                f(typeParameter);
                setUnknownFields(getUnknownFields().concat(typeParameter.f34183i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            private static Internal.EnumLiteMap f34201e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34203d;

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
                this.f34203d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34203d;
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
            f34182y = typeParameter;
            typeParameter.w();
        }

        public static TypeParameter getDefaultInstance() {
            return f34182y;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void w() {
            this.f34185p = 0;
            this.f34186q = 0;
            this.f34187r = false;
            this.f34188s = Variance.INV;
            List list = Collections.EMPTY_LIST;
            this.f34189t = list;
            this.f34190u = list;
        }

        public int getId() {
            return this.f34185p;
        }

        public int getName() {
            return this.f34186q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeParameter> getParserForType() {
            return PARSER;
        }

        public boolean getReified() {
            return this.f34187r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34193x;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34184o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34185p);
            } else {
                i10 = 0;
            }
            if ((this.f34184o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34186q);
            }
            if ((this.f34184o & 4) == 4) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f34187r);
            }
            if ((this.f34184o & 8) == 8) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f34188s.getNumber());
            }
            for (int i12 = 0; i12 < this.f34189t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f34189t.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f34190u.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34190u.get(i14)).intValue());
            }
            int i15 = i10 + i13;
            if (!getUpperBoundIdList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f34191v = i13;
            int j10 = i15 + j() + this.f34183i.size();
            this.f34193x = j10;
            return j10;
        }

        public Type getUpperBound(int i10) {
            return (Type) this.f34189t.get(i10);
        }

        public int getUpperBoundCount() {
            return this.f34189t.size();
        }

        public List<Integer> getUpperBoundIdList() {
            return this.f34190u;
        }

        public List<Type> getUpperBoundList() {
            return this.f34189t;
        }

        public Variance getVariance() {
            return this.f34188s;
        }

        public boolean hasId() {
            if ((this.f34184o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34184o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReified() {
            if ((this.f34184o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasVariance() {
            if ((this.f34184o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34192w;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f34192w = (byte) 0;
                return false;
            } else if (!hasName()) {
                this.f34192w = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        this.f34192w = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34192w = (byte) 0;
                    return false;
                }
                this.f34192w = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34184o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34185p);
            }
            if ((this.f34184o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34186q);
            }
            if ((this.f34184o & 4) == 4) {
                codedOutputStream.writeBool(3, this.f34187r);
            }
            if ((this.f34184o & 8) == 8) {
                codedOutputStream.writeEnum(4, this.f34188s.getNumber());
            }
            for (int i10 = 0; i10 < this.f34189t.size(); i10++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f34189t.get(i10));
            }
            if (getUpperBoundIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(50);
                codedOutputStream.writeRawVarint32(this.f34191v);
            }
            for (int i11 = 0; i11 < this.f34190u.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34190u.get(i11)).intValue());
            }
            k10.writeUntil(1000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34183i);
        }

        public static Builder newBuilder(TypeParameter typeParameter) {
            return newBuilder().mergeFrom(typeParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeParameter getDefaultInstanceForType() {
            return f34182y;
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
            this.f34191v = -1;
            this.f34192w = (byte) -1;
            this.f34193x = -1;
            this.f34183i = extendableBuilder.getUnknownFields();
        }

        private TypeParameter(boolean z10) {
            this.f34191v = -1;
            this.f34192w = (byte) -1;
            this.f34193x = -1;
            this.f34183i = ByteString.EMPTY;
        }

        private TypeParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34191v = -1;
            this.f34192w = (byte) -1;
            this.f34193x = -1;
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
                                this.f34184o |= 1;
                                this.f34185p = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34184o |= 2;
                                this.f34186q = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                this.f34184o |= 4;
                                this.f34187r = codedInputStream.readBool();
                            } else if (readTag == 32) {
                                int readEnum = codedInputStream.readEnum();
                                Variance valueOf = Variance.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34184o |= 8;
                                    this.f34188s = valueOf;
                                }
                            } else if (readTag == 42) {
                                if (!(z11 & true)) {
                                    this.f34189t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34189t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag == 48) {
                                if (!(z11 & true)) {
                                    this.f34190u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34190u.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 50) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34190u = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34190u.add(Integer.valueOf(codedInputStream.readInt32()));
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
                        this.f34189t = Collections.unmodifiableList(this.f34189t);
                    }
                    if (z11 & true) {
                        this.f34190u = Collections.unmodifiableList(this.f34190u);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34183i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34183i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f34189t = Collections.unmodifiableList(this.f34189t);
            }
            if (z11 & true) {
                this.f34190u = Collections.unmodifiableList(this.f34190u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34183i = newOutput.toByteString();
                throw th4;
            }
            this.f34183i = newOutput.toByteString();
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
        private static final TypeTable f34204s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34205e;

        /* renamed from: i  reason: collision with root package name */
        private int f34206i;

        /* renamed from: o  reason: collision with root package name */
        private List f34207o;

        /* renamed from: p  reason: collision with root package name */
        private int f34208p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34209q;

        /* renamed from: r  reason: collision with root package name */
        private int f34210r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<TypeTable, Builder> implements TypeTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34211e;

            /* renamed from: i  reason: collision with root package name */
            private List f34212i = Collections.EMPTY_LIST;

            /* renamed from: o  reason: collision with root package name */
            private int f34213o = -1;

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
                if ((this.f34211e & 1) != 1) {
                    this.f34212i = new ArrayList(this.f34212i);
                    this.f34211e |= 1;
                }
            }

            private void e() {
            }

            public TypeTable buildPartial() {
                TypeTable typeTable = new TypeTable(this);
                int i10 = this.f34211e;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34212i = Collections.unmodifiableList(this.f34212i);
                    this.f34211e &= -2;
                }
                typeTable.f34207o = this.f34212i;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                typeTable.f34208p = this.f34213o;
                typeTable.f34206i = i11;
                return typeTable;
            }

            public Type getType(int i10) {
                return (Type) this.f34212i.get(i10);
            }

            public int getTypeCount() {
                return this.f34212i.size();
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
                this.f34211e |= 2;
                this.f34213o = i10;
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
                if (!typeTable.f34207o.isEmpty()) {
                    if (this.f34212i.isEmpty()) {
                        this.f34212i = typeTable.f34207o;
                        this.f34211e &= -2;
                    } else {
                        d();
                        this.f34212i.addAll(typeTable.f34207o);
                    }
                }
                if (typeTable.hasFirstNullable()) {
                    setFirstNullable(typeTable.getFirstNullable());
                }
                setUnknownFields(getUnknownFields().concat(typeTable.f34205e));
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
            f34204s = typeTable;
            typeTable.m();
        }

        public static TypeTable getDefaultInstance() {
            return f34204s;
        }

        private void m() {
            this.f34207o = Collections.EMPTY_LIST;
            this.f34208p = -1;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getFirstNullable() {
            return this.f34208p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34210r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34207o.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34207o.get(i12));
            }
            if ((this.f34206i & 1) == 1) {
                i11 += CodedOutputStream.computeInt32Size(2, this.f34208p);
            }
            int size = i11 + this.f34205e.size();
            this.f34210r = size;
            return size;
        }

        public Type getType(int i10) {
            return (Type) this.f34207o.get(i10);
        }

        public int getTypeCount() {
            return this.f34207o.size();
        }

        public List<Type> getTypeList() {
            return this.f34207o;
        }

        public boolean hasFirstNullable() {
            if ((this.f34206i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34209q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getTypeCount(); i10++) {
                if (!getType(i10).isInitialized()) {
                    this.f34209q = (byte) 0;
                    return false;
                }
            }
            this.f34209q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34207o.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34207o.get(i10));
            }
            if ((this.f34206i & 1) == 1) {
                codedOutputStream.writeInt32(2, this.f34208p);
            }
            codedOutputStream.writeRawBytes(this.f34205e);
        }

        public static Builder newBuilder(TypeTable typeTable) {
            return newBuilder().mergeFrom(typeTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeTable getDefaultInstanceForType() {
            return f34204s;
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
            this.f34209q = (byte) -1;
            this.f34210r = -1;
            this.f34205e = builder.getUnknownFields();
        }

        private TypeTable(boolean z10) {
            this.f34209q = (byte) -1;
            this.f34210r = -1;
            this.f34205e = ByteString.EMPTY;
        }

        private TypeTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34209q = (byte) -1;
            this.f34210r = -1;
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
                                    this.f34207o = new ArrayList();
                                    z11 = true;
                                }
                                this.f34207o.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f34206i |= 1;
                                this.f34208p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11) {
                            this.f34207o = Collections.unmodifiableList(this.f34207o);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34205e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34205e = newOutput.toByteString();
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
                this.f34207o = Collections.unmodifiableList(this.f34207o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34205e = newOutput.toByteString();
                throw th4;
            }
            this.f34205e = newOutput.toByteString();
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
        private static final ValueParameter f34214x;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34215i;

        /* renamed from: o  reason: collision with root package name */
        private int f34216o;

        /* renamed from: p  reason: collision with root package name */
        private int f34217p;

        /* renamed from: q  reason: collision with root package name */
        private int f34218q;

        /* renamed from: r  reason: collision with root package name */
        private Type f34219r;

        /* renamed from: s  reason: collision with root package name */
        private int f34220s;

        /* renamed from: t  reason: collision with root package name */
        private Type f34221t;

        /* renamed from: u  reason: collision with root package name */
        private int f34222u;

        /* renamed from: v  reason: collision with root package name */
        private byte f34223v;

        /* renamed from: w  reason: collision with root package name */
        private int f34224w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<ValueParameter, Builder> implements ValueParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34225o;

            /* renamed from: p  reason: collision with root package name */
            private int f34226p;

            /* renamed from: q  reason: collision with root package name */
            private int f34227q;

            /* renamed from: s  reason: collision with root package name */
            private int f34229s;

            /* renamed from: u  reason: collision with root package name */
            private int f34231u;

            /* renamed from: r  reason: collision with root package name */
            private Type f34228r = Type.getDefaultInstance();

            /* renamed from: t  reason: collision with root package name */
            private Type f34230t = Type.getDefaultInstance();

            private Builder() {
                j();
            }

            static /* synthetic */ Builder g() {
                return h();
            }

            private static Builder h() {
                return new Builder();
            }

            private void j() {
            }

            public ValueParameter buildPartial() {
                ValueParameter valueParameter = new ValueParameter(this);
                int i10 = this.f34225o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                valueParameter.f34217p = this.f34226p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                valueParameter.f34218q = this.f34227q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                valueParameter.f34219r = this.f34228r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                valueParameter.f34220s = this.f34229s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                valueParameter.f34221t = this.f34230t;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                valueParameter.f34222u = this.f34231u;
                valueParameter.f34216o = i11;
                return valueParameter;
            }

            public Type getType() {
                return this.f34228r;
            }

            public Type getVarargElementType() {
                return this.f34230t;
            }

            public boolean hasName() {
                if ((this.f34225o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f34225o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasVarargElementType() {
                if ((this.f34225o & 16) == 16) {
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
                if ((this.f34225o & 4) == 4 && this.f34228r != Type.getDefaultInstance()) {
                    this.f34228r = Type.newBuilder(this.f34228r).mergeFrom(type).buildPartial();
                } else {
                    this.f34228r = type;
                }
                this.f34225o |= 4;
                return this;
            }

            public Builder mergeVarargElementType(Type type) {
                if ((this.f34225o & 16) == 16 && this.f34230t != Type.getDefaultInstance()) {
                    this.f34230t = Type.newBuilder(this.f34230t).mergeFrom(type).buildPartial();
                } else {
                    this.f34230t = type;
                }
                this.f34225o |= 16;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34225o |= 1;
                this.f34226p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34225o |= 2;
                this.f34227q = i10;
                return this;
            }

            public Builder setTypeId(int i10) {
                this.f34225o |= 8;
                this.f34229s = i10;
                return this;
            }

            public Builder setVarargElementTypeId(int i10) {
                this.f34225o |= 32;
                this.f34231u = i10;
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
                setUnknownFields(getUnknownFields().concat(valueParameter.f34215i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return h().mergeFrom(buildPartial());
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
            f34214x = valueParameter;
            valueParameter.u();
        }

        public static ValueParameter getDefaultInstance() {
            return f34214x;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void u() {
            this.f34217p = 0;
            this.f34218q = 0;
            this.f34219r = Type.getDefaultInstance();
            this.f34220s = 0;
            this.f34221t = Type.getDefaultInstance();
            this.f34222u = 0;
        }

        public int getFlags() {
            return this.f34217p;
        }

        public int getName() {
            return this.f34218q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<ValueParameter> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34224w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34216o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34217p);
            } else {
                i10 = 0;
            }
            if ((this.f34216o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34218q);
            }
            if ((this.f34216o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34219r);
            }
            if ((this.f34216o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34221t);
            }
            if ((this.f34216o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34220s);
            }
            if ((this.f34216o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f34222u);
            }
            int j10 = i10 + j() + this.f34215i.size();
            this.f34224w = j10;
            return j10;
        }

        public Type getType() {
            return this.f34219r;
        }

        public int getTypeId() {
            return this.f34220s;
        }

        public Type getVarargElementType() {
            return this.f34221t;
        }

        public int getVarargElementTypeId() {
            return this.f34222u;
        }

        public boolean hasFlags() {
            if ((this.f34216o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34216o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasType() {
            if ((this.f34216o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasTypeId() {
            if ((this.f34216o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementType() {
            if ((this.f34216o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementTypeId() {
            if ((this.f34216o & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34223v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f34223v = (byte) 0;
                return false;
            } else if (hasType() && !getType().isInitialized()) {
                this.f34223v = (byte) 0;
                return false;
            } else if (hasVarargElementType() && !getVarargElementType().isInitialized()) {
                this.f34223v = (byte) 0;
                return false;
            } else if (!i()) {
                this.f34223v = (byte) 0;
                return false;
            } else {
                this.f34223v = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34216o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34217p);
            }
            if ((this.f34216o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34218q);
            }
            if ((this.f34216o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f34219r);
            }
            if ((this.f34216o & 16) == 16) {
                codedOutputStream.writeMessage(4, this.f34221t);
            }
            if ((this.f34216o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f34220s);
            }
            if ((this.f34216o & 32) == 32) {
                codedOutputStream.writeInt32(6, this.f34222u);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34215i);
        }

        public static Builder newBuilder(ValueParameter valueParameter) {
            return newBuilder().mergeFrom(valueParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public ValueParameter getDefaultInstanceForType() {
            return f34214x;
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
            this.f34223v = (byte) -1;
            this.f34224w = -1;
            this.f34215i = extendableBuilder.getUnknownFields();
        }

        private ValueParameter(boolean z10) {
            this.f34223v = (byte) -1;
            this.f34224w = -1;
            this.f34215i = ByteString.EMPTY;
        }

        private ValueParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f34223v = (byte) -1;
            this.f34224w = -1;
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
                                this.f34216o |= 1;
                                this.f34217p = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (readTag == 26) {
                                    builder = (this.f34216o & 4) == 4 ? this.f34219r.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34219r = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34219r = builder.buildPartial();
                                    }
                                    this.f34216o |= 4;
                                } else if (readTag == 34) {
                                    builder = (this.f34216o & 16) == 16 ? this.f34221t.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34221t = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34221t = builder.buildPartial();
                                    }
                                    this.f34216o |= 16;
                                } else if (readTag == 40) {
                                    this.f34216o |= 8;
                                    this.f34220s = codedInputStream.readInt32();
                                } else if (readTag != 48) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f34216o |= 32;
                                    this.f34222u = codedInputStream.readInt32();
                                }
                            } else {
                                this.f34216o |= 2;
                                this.f34218q = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34215i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34215i = newOutput.toByteString();
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
                this.f34215i = newOutput.toByteString();
                throw th4;
            }
            this.f34215i = newOutput.toByteString();
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
        private static final VersionRequirement f34232w;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34233e;

        /* renamed from: i  reason: collision with root package name */
        private int f34234i;

        /* renamed from: o  reason: collision with root package name */
        private int f34235o;

        /* renamed from: p  reason: collision with root package name */
        private int f34236p;

        /* renamed from: q  reason: collision with root package name */
        private Level f34237q;

        /* renamed from: r  reason: collision with root package name */
        private int f34238r;

        /* renamed from: s  reason: collision with root package name */
        private int f34239s;

        /* renamed from: t  reason: collision with root package name */
        private VersionKind f34240t;

        /* renamed from: u  reason: collision with root package name */
        private byte f34241u;

        /* renamed from: v  reason: collision with root package name */
        private int f34242v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirement, Builder> implements VersionRequirementOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34243e;

            /* renamed from: i  reason: collision with root package name */
            private int f34244i;

            /* renamed from: o  reason: collision with root package name */
            private int f34245o;

            /* renamed from: q  reason: collision with root package name */
            private int f34247q;

            /* renamed from: r  reason: collision with root package name */
            private int f34248r;

            /* renamed from: p  reason: collision with root package name */
            private Level f34246p = Level.ERROR;

            /* renamed from: s  reason: collision with root package name */
            private VersionKind f34249s = VersionKind.LANGUAGE_VERSION;

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
                int i10 = this.f34243e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                versionRequirement.f34235o = this.f34244i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                versionRequirement.f34236p = this.f34245o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                versionRequirement.f34237q = this.f34246p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                versionRequirement.f34238r = this.f34247q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                versionRequirement.f34239s = this.f34248r;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                versionRequirement.f34240t = this.f34249s;
                versionRequirement.f34234i = i11;
                return versionRequirement;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setErrorCode(int i10) {
                this.f34243e |= 8;
                this.f34247q = i10;
                return this;
            }

            public Builder setLevel(Level level) {
                level.getClass();
                this.f34243e |= 4;
                this.f34246p = level;
                return this;
            }

            public Builder setMessage(int i10) {
                this.f34243e |= 16;
                this.f34248r = i10;
                return this;
            }

            public Builder setVersion(int i10) {
                this.f34243e |= 1;
                this.f34244i = i10;
                return this;
            }

            public Builder setVersionFull(int i10) {
                this.f34243e |= 2;
                this.f34245o = i10;
                return this;
            }

            public Builder setVersionKind(VersionKind versionKind) {
                versionKind.getClass();
                this.f34243e |= 32;
                this.f34249s = versionKind;
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
                setUnknownFields(getUnknownFields().concat(versionRequirement.f34233e));
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
            private static Internal.EnumLiteMap f34250e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34252d;

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
                this.f34252d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34252d;
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
            private static Internal.EnumLiteMap f34253e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34255d;

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
                this.f34255d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34255d;
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
            f34232w = versionRequirement;
            versionRequirement.p();
        }

        public static VersionRequirement getDefaultInstance() {
            return f34232w;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void p() {
            this.f34235o = 0;
            this.f34236p = 0;
            this.f34237q = Level.ERROR;
            this.f34238r = 0;
            this.f34239s = 0;
            this.f34240t = VersionKind.LANGUAGE_VERSION;
        }

        public int getErrorCode() {
            return this.f34238r;
        }

        public Level getLevel() {
            return this.f34237q;
        }

        public int getMessage() {
            return this.f34239s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirement> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34242v;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34234i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34235o);
            } else {
                i10 = 0;
            }
            if ((this.f34234i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34236p);
            }
            if ((this.f34234i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f34237q.getNumber());
            }
            if ((this.f34234i & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f34238r);
            }
            if ((this.f34234i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34239s);
            }
            if ((this.f34234i & 32) == 32) {
                i10 += CodedOutputStream.computeEnumSize(6, this.f34240t.getNumber());
            }
            int size = i10 + this.f34233e.size();
            this.f34242v = size;
            return size;
        }

        public int getVersion() {
            return this.f34235o;
        }

        public int getVersionFull() {
            return this.f34236p;
        }

        public VersionKind getVersionKind() {
            return this.f34240t;
        }

        public boolean hasErrorCode() {
            if ((this.f34234i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasLevel() {
            if ((this.f34234i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasMessage() {
            if ((this.f34234i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVersion() {
            if ((this.f34234i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionFull() {
            if ((this.f34234i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasVersionKind() {
            if ((this.f34234i & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34241u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34241u = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34234i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34235o);
            }
            if ((this.f34234i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34236p);
            }
            if ((this.f34234i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f34237q.getNumber());
            }
            if ((this.f34234i & 8) == 8) {
                codedOutputStream.writeInt32(4, this.f34238r);
            }
            if ((this.f34234i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f34239s);
            }
            if ((this.f34234i & 32) == 32) {
                codedOutputStream.writeEnum(6, this.f34240t.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f34233e);
        }

        public static Builder newBuilder(VersionRequirement versionRequirement) {
            return newBuilder().mergeFrom(versionRequirement);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirement getDefaultInstanceForType() {
            return f34232w;
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
            this.f34241u = (byte) -1;
            this.f34242v = -1;
            this.f34233e = builder.getUnknownFields();
        }

        private VersionRequirement(boolean z10) {
            this.f34241u = (byte) -1;
            this.f34242v = -1;
            this.f34233e = ByteString.EMPTY;
        }

        private VersionRequirement(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34241u = (byte) -1;
            this.f34242v = -1;
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
                                this.f34234i |= 1;
                                this.f34235o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34234i |= 2;
                                this.f34236p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                Level valueOf = Level.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34234i |= 4;
                                    this.f34237q = valueOf;
                                }
                            } else if (readTag == 32) {
                                this.f34234i |= 8;
                                this.f34238r = codedInputStream.readInt32();
                            } else if (readTag == 40) {
                                this.f34234i |= 16;
                                this.f34239s = codedInputStream.readInt32();
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
                                    this.f34234i |= 32;
                                    this.f34240t = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34233e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34233e = newOutput.toByteString();
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
                this.f34233e = newOutput.toByteString();
                throw th4;
            }
            this.f34233e = newOutput.toByteString();
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
        private static final VersionRequirementTable f34256q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34257e;

        /* renamed from: i  reason: collision with root package name */
        private List f34258i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34259o;

        /* renamed from: p  reason: collision with root package name */
        private int f34260p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirementTable, Builder> implements VersionRequirementTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34261e;

            /* renamed from: i  reason: collision with root package name */
            private List f34262i = Collections.EMPTY_LIST;

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
                if ((this.f34261e & 1) != 1) {
                    this.f34262i = new ArrayList(this.f34262i);
                    this.f34261e |= 1;
                }
            }

            private void e() {
            }

            public VersionRequirementTable buildPartial() {
                VersionRequirementTable versionRequirementTable = new VersionRequirementTable(this);
                if ((this.f34261e & 1) == 1) {
                    this.f34262i = Collections.unmodifiableList(this.f34262i);
                    this.f34261e &= -2;
                }
                versionRequirementTable.f34258i = this.f34262i;
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
                if (!versionRequirementTable.f34258i.isEmpty()) {
                    if (this.f34262i.isEmpty()) {
                        this.f34262i = versionRequirementTable.f34258i;
                        this.f34261e &= -2;
                    } else {
                        d();
                        this.f34262i.addAll(versionRequirementTable.f34258i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(versionRequirementTable.f34257e));
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
            f34256q = versionRequirementTable;
            versionRequirementTable.k();
        }

        public static VersionRequirementTable getDefaultInstance() {
            return f34256q;
        }

        private void k() {
            this.f34258i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirementTable> getParserForType() {
            return PARSER;
        }

        public int getRequirementCount() {
            return this.f34258i.size();
        }

        public List<VersionRequirement> getRequirementList() {
            return this.f34258i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34260p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34258i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34258i.get(i12));
            }
            int size = i11 + this.f34257e.size();
            this.f34260p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34259o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34259o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34258i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34258i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34257e);
        }

        public static Builder newBuilder(VersionRequirementTable versionRequirementTable) {
            return newBuilder().mergeFrom(versionRequirementTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirementTable getDefaultInstanceForType() {
            return f34256q;
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
            this.f34259o = (byte) -1;
            this.f34260p = -1;
            this.f34257e = builder.getUnknownFields();
        }

        private VersionRequirementTable(boolean z10) {
            this.f34259o = (byte) -1;
            this.f34260p = -1;
            this.f34257e = ByteString.EMPTY;
        }

        private VersionRequirementTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34259o = (byte) -1;
            this.f34260p = -1;
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
                                        this.f34258i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34258i.add(codedInputStream.readMessage(VersionRequirement.PARSER, extensionRegistryLite));
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
                        this.f34258i = Collections.unmodifiableList(this.f34258i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34257e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34257e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34258i = Collections.unmodifiableList(this.f34258i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34257e = newOutput.toByteString();
                throw th4;
            }
            this.f34257e = newOutput.toByteString();
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
        private static Internal.EnumLiteMap f34263e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f34265d;

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
            this.f34265d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f34265d;
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
