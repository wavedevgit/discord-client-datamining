package com.withpersona.sdk2.inquiry.network.core;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponse {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final List<Error> errors;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ErrorResponse create(String str) {
            return new ErrorResponse(CollectionsKt.e(new Error.UnknownError(str, null)));
        }

        @NotNull
        public final h.e getAdapter() {
            return ErrorJsonAdapterFactory.INSTANCE;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class Error implements Parcelable {

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class FieldNotFoundError extends Error {
            @NotNull
            public static final Parcelable.Creator<FieldNotFoundError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<FieldNotFoundError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final FieldNotFoundError createFromParcel(Parcel parcel) {
                    return new FieldNotFoundError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final FieldNotFoundError[] newArray(int i10) {
                    return new FieldNotFoundError[i10];
                }
            }

            public FieldNotFoundError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ FieldNotFoundError copy$default(FieldNotFoundError fieldNotFoundError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = fieldNotFoundError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = fieldNotFoundError.details;
                }
                return fieldNotFoundError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final FieldNotFoundError copy(String str, String str2) {
                return new FieldNotFoundError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof FieldNotFoundError) {
                    FieldNotFoundError fieldNotFoundError = (FieldNotFoundError) obj;
                    return Intrinsics.areEqual(this.title, fieldNotFoundError.title) && Intrinsics.areEqual(this.details, fieldNotFoundError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "FieldNotFoundError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class InactiveTemplateError extends Error {
            @NotNull
            public static final Parcelable.Creator<InactiveTemplateError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<InactiveTemplateError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InactiveTemplateError createFromParcel(Parcel parcel) {
                    return new InactiveTemplateError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InactiveTemplateError[] newArray(int i10) {
                    return new InactiveTemplateError[i10];
                }
            }

            public InactiveTemplateError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ InactiveTemplateError copy$default(InactiveTemplateError inactiveTemplateError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = inactiveTemplateError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = inactiveTemplateError.details;
                }
                return inactiveTemplateError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final InactiveTemplateError copy(String str, String str2) {
                return new InactiveTemplateError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof InactiveTemplateError) {
                    InactiveTemplateError inactiveTemplateError = (InactiveTemplateError) obj;
                    return Intrinsics.areEqual(this.title, inactiveTemplateError.title) && Intrinsics.areEqual(this.details, inactiveTemplateError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "InactiveTemplateError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class InconsistentTransitionError extends Error {
            @NotNull
            public static final Parcelable.Creator<InconsistentTransitionError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<InconsistentTransitionError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InconsistentTransitionError createFromParcel(Parcel parcel) {
                    return new InconsistentTransitionError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InconsistentTransitionError[] newArray(int i10) {
                    return new InconsistentTransitionError[i10];
                }
            }

            public InconsistentTransitionError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ InconsistentTransitionError copy$default(InconsistentTransitionError inconsistentTransitionError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = inconsistentTransitionError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = inconsistentTransitionError.details;
                }
                return inconsistentTransitionError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final InconsistentTransitionError copy(String str, String str2) {
                return new InconsistentTransitionError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof InconsistentTransitionError) {
                    InconsistentTransitionError inconsistentTransitionError = (InconsistentTransitionError) obj;
                    return Intrinsics.areEqual(this.title, inconsistentTransitionError.title) && Intrinsics.areEqual(this.details, inconsistentTransitionError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "InconsistentTransitionError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class InvalidConfigError extends Error {
            @NotNull
            public static final Parcelable.Creator<InvalidConfigError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<InvalidConfigError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InvalidConfigError createFromParcel(Parcel parcel) {
                    return new InvalidConfigError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InvalidConfigError[] newArray(int i10) {
                    return new InvalidConfigError[i10];
                }
            }

            public InvalidConfigError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ InvalidConfigError copy$default(InvalidConfigError invalidConfigError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = invalidConfigError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = invalidConfigError.details;
                }
                return invalidConfigError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final InvalidConfigError copy(String str, String str2) {
                return new InvalidConfigError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof InvalidConfigError) {
                    InvalidConfigError invalidConfigError = (InvalidConfigError) obj;
                    return Intrinsics.areEqual(this.title, invalidConfigError.title) && Intrinsics.areEqual(this.details, invalidConfigError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "InvalidConfigError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class InvalidFieldValueError extends Error {
            @NotNull
            public static final Parcelable.Creator<InvalidFieldValueError> CREATOR = new Creator();
            private final Map<String, UiComponentError> details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<InvalidFieldValueError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InvalidFieldValueError createFromParcel(Parcel parcel) {
                    LinkedHashMap linkedHashMap;
                    String readString = parcel.readString();
                    if (parcel.readInt() == 0) {
                        linkedHashMap = null;
                    } else {
                        int readInt = parcel.readInt();
                        LinkedHashMap linkedHashMap2 = new LinkedHashMap(readInt);
                        for (int i10 = 0; i10 != readInt; i10++) {
                            linkedHashMap2.put(parcel.readString(), parcel.readParcelable(InvalidFieldValueError.class.getClassLoader()));
                        }
                        linkedHashMap = linkedHashMap2;
                    }
                    return new InvalidFieldValueError(readString, linkedHashMap);
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final InvalidFieldValueError[] newArray(int i10) {
                    return new InvalidFieldValueError[i10];
                }
            }

            /* JADX WARN: Multi-variable type inference failed */
            public InvalidFieldValueError(String str, Map<String, ? extends UiComponentError> map) {
                super(null);
                this.title = str;
                this.details = map;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            @NotNull
            public String getDescription() {
                String str;
                Set<String> keySet;
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Invalid value(s) on field(s) ");
                Map<String, UiComponentError> map = this.details;
                if (map != null && (keySet = map.keySet()) != null) {
                    str = CollectionsKt.x0(keySet, null, null, null, 0, null, null, 63, null);
                } else {
                    str = null;
                }
                sb2.append(str);
                sb2.append(".");
                return sb2.toString();
            }

            public final Map<String, UiComponentError> getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                Map<String, UiComponentError> map = this.details;
                if (map == null) {
                    parcel.writeInt(0);
                    return;
                }
                parcel.writeInt(1);
                parcel.writeInt(map.size());
                for (Map.Entry<String, UiComponentError> entry : map.entrySet()) {
                    parcel.writeString(entry.getKey());
                    parcel.writeParcelable(entry.getValue(), i10);
                }
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RateLimitExceededError extends Error {
            @NotNull
            public static final Parcelable.Creator<RateLimitExceededError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<RateLimitExceededError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final RateLimitExceededError createFromParcel(Parcel parcel) {
                    return new RateLimitExceededError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final RateLimitExceededError[] newArray(int i10) {
                    return new RateLimitExceededError[i10];
                }
            }

            public RateLimitExceededError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ RateLimitExceededError copy$default(RateLimitExceededError rateLimitExceededError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = rateLimitExceededError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = rateLimitExceededError.details;
                }
                return rateLimitExceededError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final RateLimitExceededError copy(String str, String str2) {
                return new RateLimitExceededError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof RateLimitExceededError) {
                    RateLimitExceededError rateLimitExceededError = (RateLimitExceededError) obj;
                    return Intrinsics.areEqual(this.title, rateLimitExceededError.title) && Intrinsics.areEqual(this.details, rateLimitExceededError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "RateLimitExceededError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class TransitionFromTerminalStateError extends Error {
            @NotNull
            public static final Parcelable.Creator<TransitionFromTerminalStateError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<TransitionFromTerminalStateError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final TransitionFromTerminalStateError createFromParcel(Parcel parcel) {
                    return new TransitionFromTerminalStateError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final TransitionFromTerminalStateError[] newArray(int i10) {
                    return new TransitionFromTerminalStateError[i10];
                }
            }

            public TransitionFromTerminalStateError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ TransitionFromTerminalStateError copy$default(TransitionFromTerminalStateError transitionFromTerminalStateError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = transitionFromTerminalStateError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = transitionFromTerminalStateError.details;
                }
                return transitionFromTerminalStateError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final TransitionFromTerminalStateError copy(String str, String str2) {
                return new TransitionFromTerminalStateError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof TransitionFromTerminalStateError) {
                    TransitionFromTerminalStateError transitionFromTerminalStateError = (TransitionFromTerminalStateError) obj;
                    return Intrinsics.areEqual(this.title, transitionFromTerminalStateError.title) && Intrinsics.areEqual(this.details, transitionFromTerminalStateError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "TransitionFromTerminalStateError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class UnauthenticatedError extends Error {
            @NotNull
            public static final Parcelable.Creator<UnauthenticatedError> CREATOR = new Creator();
            private final String details;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<UnauthenticatedError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final UnauthenticatedError createFromParcel(Parcel parcel) {
                    return new UnauthenticatedError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final UnauthenticatedError[] newArray(int i10) {
                    return new UnauthenticatedError[i10];
                }
            }

            public UnauthenticatedError(String str, String str2) {
                super(null);
                this.title = str;
                this.details = str2;
            }

            public static /* synthetic */ UnauthenticatedError copy$default(UnauthenticatedError unauthenticatedError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = unauthenticatedError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = unauthenticatedError.details;
                }
                return unauthenticatedError.copy(str, str2);
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.details;
            }

            @NotNull
            public final UnauthenticatedError copy(String str, String str2) {
                return new UnauthenticatedError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof UnauthenticatedError) {
                    UnauthenticatedError unauthenticatedError = (UnauthenticatedError) obj;
                    return Intrinsics.areEqual(this.title, unauthenticatedError.title) && Intrinsics.areEqual(this.details, unauthenticatedError.details);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return this.details;
            }

            public final String getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.details;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.details;
                return "UnauthenticatedError(title=" + str + ", details=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.details);
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class UnknownError extends Error {
            @NotNull
            public static final Parcelable.Creator<UnknownError> CREATOR = new Creator();
            private transient ResponseBody errorBody;
            private final String originalCode;
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<UnknownError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final UnknownError createFromParcel(Parcel parcel) {
                    return new UnknownError(parcel.readString(), parcel.readString());
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final UnknownError[] newArray(int i10) {
                    return new UnknownError[i10];
                }
            }

            public UnknownError(String str, String str2) {
                super(null);
                this.title = str;
                this.originalCode = str2;
            }

            public static /* synthetic */ UnknownError copy$default(UnknownError unknownError, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = unknownError.title;
                }
                if ((i10 & 2) != 0) {
                    str2 = unknownError.originalCode;
                }
                return unknownError.copy(str, str2);
            }

            public static /* synthetic */ void getErrorBody$annotations() {
            }

            public final String component1() {
                return this.title;
            }

            public final String component2() {
                return this.originalCode;
            }

            @NotNull
            public final UnknownError copy(String str, String str2) {
                return new UnknownError(str, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof UnknownError) {
                    UnknownError unknownError = (UnknownError) obj;
                    return Intrinsics.areEqual(this.title, unknownError.title) && Intrinsics.areEqual(this.originalCode, unknownError.originalCode);
                }
                return false;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getDescription() {
                return getTitle();
            }

            public final ResponseBody getErrorBody() {
                return this.errorBody;
            }

            public final String getOriginalCode() {
                return this.originalCode;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.ErrorResponse.Error
            public String getTitle() {
                return this.title;
            }

            public int hashCode() {
                String str = this.title;
                int hashCode = (str == null ? 0 : str.hashCode()) * 31;
                String str2 = this.originalCode;
                return hashCode + (str2 != null ? str2.hashCode() : 0);
            }

            public final void setErrorBody(ResponseBody responseBody) {
                this.errorBody = responseBody;
            }

            @NotNull
            public String toString() {
                String str = this.title;
                String str2 = this.originalCode;
                return "UnknownError(title=" + str + ", originalCode=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.originalCode);
            }
        }

        public /* synthetic */ Error(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract String getDescription();

        public abstract String getTitle();

        private Error() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class ErrorJsonAdapterFactory implements h.e {
        @NotNull
        public static final ErrorJsonAdapterFactory INSTANCE = new ErrorJsonAdapterFactory();
        @NotNull
        private static final String LABEL_KEY = "code";
        private static final um.b adapterFactory = um.b.b(Error.class, LABEL_KEY).e(Error.InactiveTemplateError.class, "inactive_template_error").e(Error.InvalidConfigError.class, "invalid_config").e(Error.UnauthenticatedError.class, "unauthenticated").e(Error.InconsistentTransitionError.class, "inconsistent_transition_error").e(Error.TransitionFromTerminalStateError.class, "transition_from_terminal_state_error").e(Error.FieldNotFoundError.class, "field_not_found_error").e(Error.RateLimitExceededError.class, "rate_limit_exceeded").e(Error.InvalidFieldValueError.class, "invalid_field_value_error").e(Error.UnknownError.class, "unknown_error").d(UnknownErrorAdapter.INSTANCE);

        private ErrorJsonAdapterFactory() {
        }

        @Override // com.squareup.moshi.h.e
        public h create(@NotNull Type type, @NotNull Set<? extends Annotation> set, @NotNull w wVar) {
            final h create = adapterFactory.create(type, set, wVar);
            if (create == null) {
                return null;
            }
            return new h(create) { // from class: com.withpersona.sdk2.inquiry.network.core.ErrorResponse$ErrorJsonAdapterFactory$create$1
                private final h errorAdapter;

                {
                    this.errorAdapter = create;
                }

                public static /* synthetic */ void getErrorAdapter$annotations() {
                }

                public final h getErrorAdapter() {
                    return this.errorAdapter;
                }

                @Override // com.squareup.moshi.h
                public ErrorResponse.Error fromJson(m mVar) {
                    if (ErrorResponse.ErrorJsonAdapterFactory.INSTANCE.hasLabel(mVar.F())) {
                        return (ErrorResponse.Error) this.errorAdapter.fromJson(mVar);
                    }
                    return ErrorResponse.UnknownErrorAdapter.INSTANCE.fromJson(mVar);
                }

                @Override // com.squareup.moshi.h
                public void toJson(t tVar, ErrorResponse.Error error) {
                    this.errorAdapter.toJson(tVar, error);
                }
            }.nullSafe();
        }

        public final boolean hasLabel(@NotNull m mVar) {
            mVar.r();
            while (mVar.hasNext()) {
                if (!Intrinsics.areEqual(mVar.l0(), LABEL_KEY)) {
                    mVar.P();
                } else {
                    return true;
                }
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class UnknownErrorAdapter extends h {
        @NotNull
        public static final UnknownErrorAdapter INSTANCE = new UnknownErrorAdapter();

        private UnknownErrorAdapter() {
        }

        @Override // com.squareup.moshi.h
        @NotNull
        public Error.UnknownError fromJson(@NotNull m mVar) {
            mVar.r();
            String str = null;
            String str2 = null;
            while (mVar.hasNext()) {
                String l02 = mVar.l0();
                if (Intrinsics.areEqual(l02, "code")) {
                    str2 = JsonReaderUtilsKt.nextStringOrNull(mVar);
                } else if (Intrinsics.areEqual(l02, "title")) {
                    str = JsonReaderUtilsKt.nextStringOrNull(mVar);
                } else {
                    mVar.P();
                }
            }
            mVar.y();
            return new Error.UnknownError(str, str2);
        }

        @Override // com.squareup.moshi.h
        public void toJson(@NotNull t tVar, Error.UnknownError unknownError) {
            tVar.l();
            tVar.A0("originalCode");
            tVar.x1(unknownError != null ? unknownError.getOriginalCode() : null);
            tVar.A0("title");
            tVar.x1(unknownError != null ? unknownError.getTitle() : null);
            tVar.E();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public ErrorResponse(List<? extends Error> list) {
        this.errors = list;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ ErrorResponse copy$default(ErrorResponse errorResponse, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = errorResponse.errors;
        }
        return errorResponse.copy(list);
    }

    public final List<Error> component1() {
        return this.errors;
    }

    @NotNull
    public final ErrorResponse copy(List<? extends Error> list) {
        return new ErrorResponse(list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof ErrorResponse) && Intrinsics.areEqual(this.errors, ((ErrorResponse) obj).errors);
    }

    public final List<Error> getErrors() {
        return this.errors;
    }

    public int hashCode() {
        List<Error> list = this.errors;
        if (list == null) {
            return 0;
        }
        return list.hashCode();
    }

    public final /* synthetic */ <T extends Error> boolean isAnyError() {
        List<Error> errors = getErrors();
        if (errors != null && !errors.isEmpty()) {
            for (Error error : errors) {
                Intrinsics.reifiedOperationMarker(3, "T");
                if (error != null) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    @NotNull
    public String toString() {
        List<Error> list = this.errors;
        return "ErrorResponse(errors=" + list + ")";
    }
}
