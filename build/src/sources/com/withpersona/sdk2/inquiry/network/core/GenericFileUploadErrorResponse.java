package com.withpersona.sdk2.inquiry.network.core;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final List<DocumentErrorResponse> errors;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final h.e getAdapter() {
            return xm.b.b(DocumentErrorResponse.class, "code").e(DocumentErrorResponse.DisabledFileTypeError.class, "document-generic-disabled-file-type-error").e(DocumentErrorResponse.FileLimitExceededError.class, "document-generic-file-limit-exceeded-error").e(DocumentErrorResponse.PageLimitExceededError.class, "document-generic-page-limit-exceeded-error").e(DocumentErrorResponse.MalformedFileError.class, "document-generic-malformed-file-error").e(DocumentErrorResponse.MalformedImageError.class, "document-generic-malformed-image-error").e(DocumentErrorResponse.MalformedPdfError.class, "document-generic-malformed-pdf-error").e(DocumentErrorResponse.GovernmentIdDimensionSizeError.class, "document-government-id-dimension-size-error").d(UnknownErrorAdapter.INSTANCE);
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class DocumentErrorResponse implements Parcelable {

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class DisabledFileTypeError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<DisabledFileTypeError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<DisabledFileTypeError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final DisabledFileTypeError createFromParcel(Parcel parcel) {
                    return new DisabledFileTypeError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final DisabledFileTypeError[] newArray(int i10) {
                    return new DisabledFileTypeError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();
                @NotNull
                private final List<String> enabledFileTypes;
                @NotNull
                private final String uploadedFileType;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        return new Details(parcel.readString(), parcel.createStringArrayList());
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                public Details(@g(name = "uploaded_file_type") @NotNull String str, @g(name = "enabled_file_types") @NotNull List<String> list) {
                    this.uploadedFileType = str;
                    this.enabledFileTypes = list;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                @NotNull
                public final List<String> getEnabledFileTypes() {
                    return this.enabledFileTypes;
                }

                @NotNull
                public final String getUploadedFileType() {
                    return this.uploadedFileType;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeString(this.uploadedFileType);
                    parcel.writeStringList(this.enabledFileTypes);
                }
            }

            public DisabledFileTypeError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class FileLimitExceededError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<FileLimitExceededError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<FileLimitExceededError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final FileLimitExceededError createFromParcel(Parcel parcel) {
                    return new FileLimitExceededError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final FileLimitExceededError[] newArray(int i10) {
                    return new FileLimitExceededError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        parcel.readInt();
                        return new Details();
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeInt(1);
                }
            }

            public FileLimitExceededError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class GovernmentIdDimensionSizeError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<GovernmentIdDimensionSizeError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<GovernmentIdDimensionSizeError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final GovernmentIdDimensionSizeError createFromParcel(Parcel parcel) {
                    return new GovernmentIdDimensionSizeError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final GovernmentIdDimensionSizeError[] newArray(int i10) {
                    return new GovernmentIdDimensionSizeError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();
                private final int maxDimensionSize;
                private final int minDimensionSize;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        return new Details(parcel.readInt(), parcel.readInt());
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                public Details(@g(name = "min_dimension_size") int i10, @g(name = "max_dimension_size") int i11) {
                    this.minDimensionSize = i10;
                    this.maxDimensionSize = i11;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public final int getMaxDimensionSize() {
                    return this.maxDimensionSize;
                }

                public final int getMinDimensionSize() {
                    return this.minDimensionSize;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeInt(this.minDimensionSize);
                    parcel.writeInt(this.maxDimensionSize);
                }
            }

            public GovernmentIdDimensionSizeError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class MalformedFileError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<MalformedFileError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<MalformedFileError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final MalformedFileError createFromParcel(Parcel parcel) {
                    return new MalformedFileError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final MalformedFileError[] newArray(int i10) {
                    return new MalformedFileError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        parcel.readInt();
                        return new Details();
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeInt(1);
                }
            }

            public MalformedFileError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class MalformedImageError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<MalformedImageError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<MalformedImageError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final MalformedImageError createFromParcel(Parcel parcel) {
                    return new MalformedImageError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final MalformedImageError[] newArray(int i10) {
                    return new MalformedImageError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        parcel.readInt();
                        return new Details();
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeInt(1);
                }
            }

            public MalformedImageError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class MalformedPdfError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<MalformedPdfError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<MalformedPdfError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final MalformedPdfError createFromParcel(Parcel parcel) {
                    return new MalformedPdfError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final MalformedPdfError[] newArray(int i10) {
                    return new MalformedPdfError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        parcel.readInt();
                        return new Details();
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeInt(1);
                }
            }

            public MalformedPdfError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class PageLimitExceededError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<PageLimitExceededError> CREATOR = new Creator();
            @NotNull
            private final String code;
            @NotNull
            private final Details details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<PageLimitExceededError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PageLimitExceededError createFromParcel(Parcel parcel) {
                    return new PageLimitExceededError(parcel.readString(), parcel.readString(), Details.CREATOR.createFromParcel(parcel));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final PageLimitExceededError[] newArray(int i10) {
                    return new PageLimitExceededError[i10];
                }
            }

            @i(generateAdapter = true)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Details implements ErrorDetails {
                @NotNull
                public static final Parcelable.Creator<Details> CREATOR = new Creator();
                private final int pageLimit;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class Creator implements Parcelable.Creator<Details> {
                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details createFromParcel(Parcel parcel) {
                        return new Details(parcel.readInt());
                    }

                    /* JADX WARN: Can't rename method to resolve collision */
                    @Override // android.os.Parcelable.Creator
                    public final Details[] newArray(int i10) {
                        return new Details[i10];
                    }
                }

                public Details(@g(name = "page_limit") int i10) {
                    this.pageLimit = i10;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public final int getPageLimit() {
                    return this.pageLimit;
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                    parcel.writeInt(this.pageLimit);
                }
            }

            public PageLimitExceededError(@NotNull String str, @NotNull String str2, @NotNull Details details) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = details;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                this.details.writeToParcel(parcel, i10);
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public Details getDetails() {
                return this.details;
            }
        }

        @i(generateAdapter = true)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class UnknownError extends DocumentErrorResponse {
            @NotNull
            public static final Parcelable.Creator<UnknownError> CREATOR = new Creator();
            private final String code;
            private final ErrorDetails details;
            @NotNull
            private final String title;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class Creator implements Parcelable.Creator<UnknownError> {
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final UnknownError createFromParcel(Parcel parcel) {
                    return new UnknownError(parcel.readString(), parcel.readString(), (ErrorDetails) parcel.readParcelable(UnknownError.class.getClassLoader()));
                }

                /* JADX WARN: Can't rename method to resolve collision */
                @Override // android.os.Parcelable.Creator
                public final UnknownError[] newArray(int i10) {
                    return new UnknownError[i10];
                }
            }

            public UnknownError() {
                this(null, null, null, 7, null);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            public String getCode() {
                return this.code;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            public ErrorDetails getDetails() {
                return this.details;
            }

            @Override // com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse.DocumentErrorResponse
            @NotNull
            public String getTitle() {
                return this.title;
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(@NotNull Parcel parcel, int i10) {
                parcel.writeString(this.title);
                parcel.writeString(this.code);
                parcel.writeParcelable(this.details, i10);
            }

            public /* synthetic */ UnknownError(String str, String str2, ErrorDetails errorDetails, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? "Unknown Error" : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : errorDetails);
            }

            public UnknownError(@NotNull String str, String str2, ErrorDetails errorDetails) {
                super(null);
                this.title = str;
                this.code = str2;
                this.details = errorDetails;
            }
        }

        public /* synthetic */ DocumentErrorResponse(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public abstract String getCode();

        public abstract ErrorDetails getDetails();

        @NotNull
        public abstract String getTitle();

        private DocumentErrorResponse() {
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
        public DocumentErrorResponse.UnknownError fromJson(@NotNull m mVar) {
            mVar.s();
            String str = null;
            String str2 = null;
            while (mVar.hasNext()) {
                String m02 = mVar.m0();
                if (Intrinsics.areEqual(m02, "title")) {
                    str = JsonReaderUtilsKt.nextStringOrNull(mVar);
                } else if (Intrinsics.areEqual(m02, "code")) {
                    str2 = JsonReaderUtilsKt.nextStringOrNull(mVar);
                } else {
                    mVar.P();
                }
            }
            mVar.z();
            if (str == null) {
                str = "Unknown Error";
            }
            return new DocumentErrorResponse.UnknownError(str, str2, null, 4, null);
        }

        @Override // com.squareup.moshi.h
        public void toJson(@NotNull t tVar, DocumentErrorResponse.UnknownError unknownError) {
            tVar.k();
            tVar.W("title");
            tVar.x1(unknownError != null ? unknownError.getTitle() : null);
            tVar.W("code");
            tVar.x1(unknownError != null ? unknownError.getCode() : null);
            tVar.E();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public GenericFileUploadErrorResponse(@NotNull List<? extends DocumentErrorResponse> list) {
        this.errors = list;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ GenericFileUploadErrorResponse copy$default(GenericFileUploadErrorResponse genericFileUploadErrorResponse, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = genericFileUploadErrorResponse.errors;
        }
        return genericFileUploadErrorResponse.copy(list);
    }

    @NotNull
    public final List<DocumentErrorResponse> component1() {
        return this.errors;
    }

    @NotNull
    public final GenericFileUploadErrorResponse copy(@NotNull List<? extends DocumentErrorResponse> list) {
        return new GenericFileUploadErrorResponse(list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof GenericFileUploadErrorResponse) && Intrinsics.areEqual(this.errors, ((GenericFileUploadErrorResponse) obj).errors);
    }

    @NotNull
    public final List<DocumentErrorResponse> getErrors() {
        return this.errors;
    }

    public int hashCode() {
        return this.errors.hashCode();
    }

    @NotNull
    public String toString() {
        List<DocumentErrorResponse> list = this.errors;
        return "GenericFileUploadErrorResponse(errors=" + list + ")";
    }
}
